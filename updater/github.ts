import fs from "node:fs/promises";
import path from "node:path";
import { Octokit } from "@octokit/rest";
import type { UpdateInfo } from "./types/app";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = "runtipi";
const REPO = "runtipi-appstore";

export async function createPullRequest(appId: string, updates: UpdateInfo): Promise<void> {
  const branch = `chore/update-${appId}-${Date.now()}`;
  const baseBranch = "master";

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
    title: `chore(${appId}): update Docker images`,
    head: branch,
    base: baseBranch,
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
