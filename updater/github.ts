import fs from "node:fs/promises";
import path from "node:path";
import { Octokit } from "@octokit/rest";
import semver from "semver";
import type { UpdateInfo } from "./types/app";

type PullRequest = {
  number: number;
  title: string;
  head: {
    ref: string;
  };
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = "runtipi";
const REPO = "runtipi-appstore";

export async function createPullRequest(appId: string, updates: UpdateInfo): Promise<void> {
  const baseBranch = "master";
  const updateType = semver.diff(updates.oldVersion, updates.newVersion);

  const prTitle = `chore(${appId}): update to ${updates.newVersion} (${updateType})`;

  // Check for existing PR
  const existingPR = await findExistingPR(appId);

  if (existingPR) {
    console.log(`Found existing PR #${existingPR.number} for ${appId}, updating it...`);
    if (existingPR.title.includes(`update to ${updates.newVersion}`)) {
      console.log(`PR #${existingPR.number} already has the latest version ${updates.newVersion}, skipping update.`);
      return;
    }
    await updateExistingPR(existingPR, updates);
  } else {
    console.log(`No existing PR found for ${appId}, creating a new one...`);
    await createNewPR(appId, updates, prTitle, baseBranch);
  }
}

async function findExistingPR(appId: string) {
  try {
    const { data: pulls } = await octokit.pulls.list({
      owner: OWNER,
      repo: REPO,
      state: "open",
      base: "master",
      query: `chore(${appId}):`,
    });

    return pulls.find((pr) => pr.title.startsWith(`chore(${appId}):`));
  } catch (error) {
    console.error(`Error searching for existing PR for ${appId}:`, error);
    return null;
  }
}

async function createNewPR(appId: string, updates: UpdateInfo, prTitle: string, baseBranch: string): Promise<void> {
  const branch = `chore/update-${appId}-${Date.now()}`;

  // Get default branch SHA
  const { data: ref } = await octokit.git.getRef({
    owner: OWNER,
    repo: REPO,
    ref: `heads/${baseBranch}`,
  });

  // Create a new branch
  await octokit.git.createRef({
    owner: OWNER,
    repo: REPO,
    ref: `refs/heads/${branch}`,
    sha: ref.object.sha,
  });

  // Get updated file contents
  const configPath = path.join("apps", appId, "config.json");
  const composePath = path.join("apps", appId, "docker-compose.json");
  const [updatedConfig, updatedCompose] = await Promise.all([fs.readFile(configPath, "utf-8"), fs.readFile(composePath, "utf-8")]);

  // Update files in the new branch
  await updateFileInRepo(branch, `apps/${appId}/config.json`, updatedConfig, `Update config.json for ${appId}`);
  await updateFileInRepo(branch, `apps/${appId}/docker-compose.json`, updatedCompose, `Update docker-compose.json for ${appId}`);

  // Create PR
  await octokit.pulls.create({
    owner: OWNER,
    repo: REPO,
    title: prTitle,
    head: branch,
    base: baseBranch,
    body: formatPRDescription(updates),
  });
}

async function updateExistingPR(existingPR: PullRequest, updates: UpdateInfo): Promise<void> {
  const branch = existingPR.head.ref;
  const appId = updates.appId;

  // Get updated file contents
  const configPath = path.join("apps", appId, "config.json");
  const composePath = path.join("apps", appId, "docker-compose.json");
  const [updatedConfig, updatedCompose] = await Promise.all([fs.readFile(configPath, "utf-8"), fs.readFile(composePath, "utf-8")]);

  // Update files in the existing branch
  await updateFileInRepo(branch, `apps/${appId}/config.json`, updatedConfig, `Update config.json for ${appId}`);
  await updateFileInRepo(branch, `apps/${appId}/docker-compose.json`, updatedCompose, `Update docker-compose.json for ${appId}`);

  // Update PR description
  await octokit.pulls.update({
    owner: OWNER,
    repo: REPO,
    pull_number: existingPR.number,
    body: formatPRDescription(updates),
  });
}

async function updateFileInRepo(branch: string, filePath: string, content: string, commitMessage: string): Promise<void> {
  const fileResponse = await octokit.repos.getContent({
    owner: OWNER,
    repo: REPO,
    path: filePath,
    ref: branch,
  });

  const sha = (fileResponse.data as { sha: string }).sha;

  await octokit.repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path: filePath,
    message: commitMessage,
    content: Buffer.from(content).toString("base64"),
    sha,
    branch,
  });
}

function formatPRDescription(updates: UpdateInfo): string {
  return [
    "## Docker Image Updates",
    "",
    ...updates.updates.map((u) => `- ${u.service}: \`${u.oldImage}\` → \`${u.newImage}\` (${u.updateType})`),
    "",
  ].join("\n");
}
