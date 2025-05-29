import fs from "node:fs/promises";
import path from "node:path";
import { Octokit } from "@octokit/rest";
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
  let updateType = "patch";

  if (updates.updates.some((u) => u.updateType === "minor")) {
    updateType = "minor";
  }
  if (updates.updates.some((u) => u.updateType === "major")) {
    updateType = "major";
  }

  const prTitle = `chore(${appId}): update ${updates.oldVersion} → ${updates.newVersion} (${updateType})`;

  // Check for existing PR
  const existingPR = await findExistingPR(appId);

  if (existingPR) {
    console.log(`Found existing PR #${existingPR.number} for ${appId}, updating it...`);
    if (existingPR.title.includes(`→ ${updates.newVersion}`)) {
      console.log(`PR #${existingPR.number} already has the latest version ${updates.newVersion}, skipping update.`);
      return;
    }
    await updateExistingPR(existingPR, updates, prTitle, updateType);
  } else {
    console.log(`No existing PR found for ${appId}, creating a new one...`);
    await createNewPR(appId, updates, prTitle, baseBranch, updateType);
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

    console.log(`Found ${pulls.length} open PRs for ${appId}`);

    return pulls.find((pr) => pr.title.startsWith(`chore(${appId}):`));
  } catch (error) {
    console.error(`Error searching for existing PR for ${appId}:`, error);
    return null;
  }
}

async function createNewPR(appId: string, updates: UpdateInfo, prTitle: string, baseBranch: string, updateType: string): Promise<void> {
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
  const dockerComposeYmlPath = path.join("apps", appId, "docker-compose.yml");

  const [updatedConfig, updatedCompose] = await Promise.all([fs.readFile(configPath, "utf-8"), fs.readFile(composePath, "utf-8")]);

  // Check if docker-compose.yml exists
  let updatedDockerComposeYml: string | null = null;
  try {
    await fs.access(dockerComposeYmlPath);
    updatedDockerComposeYml = await fs.readFile(dockerComposeYmlPath, "utf-8");
  } catch {
    // docker-compose.yml doesn't exist, which is fine
  }

  // Update files in the new branch
  await updateFileInRepo(branch, `apps/${appId}/config.json`, updatedConfig, `Update config.json for ${appId}`);
  await updateFileInRepo(branch, `apps/${appId}/docker-compose.json`, updatedCompose, `Update docker-compose.json for ${appId}`);

  // Update docker-compose.yml if it exists
  if (updatedDockerComposeYml) {
    await updateFileInRepo(branch, `apps/${appId}/docker-compose.yml`, updatedDockerComposeYml, `Update docker-compose.yml for ${appId}`);
  }

  // Create PR
  const { data } = await octokit.pulls.create({
    owner: OWNER,
    repo: REPO,
    title: prTitle,
    head: branch,
    base: baseBranch,
    body: formatPRDescription(updates),
  });

  // Add labels
  const labels = [updateType];
  if (updateType === "minor" || updateType === "patch") {
    labels.push("automerge");
  }

  await octokit.issues.addLabels({
    owner: OWNER,
    repo: REPO,
    issue_number: data.number,
    labels,
  });
}

async function updateExistingPR(existingPR: PullRequest, updates: UpdateInfo, prTitle: string, updateType: string): Promise<void> {
  const branch = existingPR.head.ref;
  const appId = updates.appId;

  // Get updated file contents
  const configPath = path.join("apps", appId, "config.json");
  const composePath = path.join("apps", appId, "docker-compose.json");
  const dockerComposeYmlPath = path.join("apps", appId, "docker-compose.yml");

  const [updatedConfig, updatedCompose] = await Promise.all([fs.readFile(configPath, "utf-8"), fs.readFile(composePath, "utf-8")]);

  // Check if docker-compose.yml exists
  let updatedDockerComposeYml: string | null = null;
  try {
    await fs.access(dockerComposeYmlPath);
    updatedDockerComposeYml = await fs.readFile(dockerComposeYmlPath, "utf-8");
  } catch {
    // docker-compose.yml doesn't exist, which is fine
  }

  // Update files in the existing branch
  await updateFileInRepo(branch, `apps/${appId}/config.json`, updatedConfig, `Update config.json for ${appId}`);
  await updateFileInRepo(branch, `apps/${appId}/docker-compose.json`, updatedCompose, `Update docker-compose.json for ${appId}`);

  // Update docker-compose.yml if it exists
  if (updatedDockerComposeYml) {
    await updateFileInRepo(branch, `apps/${appId}/docker-compose.yml`, updatedDockerComposeYml, `Update docker-compose.yml for ${appId}`);
  }

  // Update PR description
  await octokit.pulls.update({
    owner: OWNER,
    repo: REPO,
    title: prTitle,
    pull_number: existingPR.number,
    body: formatPRDescription(updates),
  });

  const currentLabels = await octokit.issues.listLabelsOnIssue({
    owner: OWNER,
    repo: REPO,
    issue_number: existingPR.number,
  });

  const labelsToRemove = currentLabels.data.filter((label) => ["patch", "minor", "major"].includes(label.name)).map((label) => label.name);

  for (const labelName of labelsToRemove) {
    await octokit.issues.removeLabel({
      owner: OWNER,
      repo: REPO,
      issue_number: existingPR.number,
      name: labelName,
    });
  }

  // Add new labels
  const labels = [updateType];
  if (updateType === "minor" || updateType === "patch") {
    labels.push("automerge");
  }

  await octokit.issues.addLabels({
    owner: OWNER,
    repo: REPO,
    issue_number: existingPR.number,
    labels,
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
