# Specification: Implement OpenClaw App

## Overview
Add `OpenClaw` (the personal AI assistant) to the Runtipi App Store. This track involves setting up the necessary directory structure, metadata, and Docker configurations to make the assistant available for one-click installation on Runtipi.

## Requirements

### 1. Directory Structure
Create the following structure in `apps/openclaw/`:
- `metadata/`: Directory for app-specific assets.
  - `logo.jpg`: The application logo.
  - `description.md`: A detailed, user-friendly description of the app.
- `config.json`: Standard Runtipi app configuration.
- `docker-compose.yml`: Standard Docker Compose file.
- `docker-compose.json`: Runtipi dynamic compose configuration.

### 2. Application Details
- **App Name:** OpenClaw
- **Short Description:** OpenClaw is a personal AI assistant you run on your own devices. It answers you on the channels you already use (WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, BlueBubbles, IRC, Microsoft Teams, Matrix, Feishu, LINE, Mattermost, Nextcloud Talk, Nostr, Synology Chat, Tlon, Twitch, Zalo, Zalo Personal, WebChat). It can speak and listen on macOS/iOS/Android, and can render a live Canvas you control. The Gateway is just the control plane — the product is the assistant. If you want a personal, single-user assistant that feels local, fast, and always-on, this is it.
- **Docker Image:** `alpine/openclaw`
- **Port:** 18789 (Standard for OpenClaw Gateway).
- **Architectures:** `amd64`, `arm64`.

### 3. Metadata Content
- **Logo:** A high-quality logo representing OpenClaw.
- **Description:** A friendly and helpful description explaining the benefits of a self-hosted personal AI assistant.

### 4. Configuration
- **config.json**: Populate with correct ID (`openclaw`), name, version, author, and architecture requirements.
- **docker-compose.yml**: Define the service using the `alpine/openclaw` image.
- **docker-compose.json**: Map standard compose settings to the Runtipi dynamic schema.

## Acceptance Criteria
- [ ] Directory `apps/openclaw/` exists and contains all required files.
- [ ] `config.json` is correctly formatted and valid according to project standards.
- [ ] `docker-compose.yml` correctly defines the OpenClaw service using `alpine/openclaw`.
- [ ] `docker-compose.json` is valid against the Runtipi dynamic compose schema.
- [ ] Automated validation via `bun run scripts/validate-json.js` passes.
- [ ] Automated tests via `bun test apps/__tests__/apps.test.ts` pass for the new app.
