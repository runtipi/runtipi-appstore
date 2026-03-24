# Specification: Remove labels and networks from OpenClaw app

## Overview
The Runtipi dynamic compose guide specifies that `labels` and `networks` should not be manually added to the `docker-compose.yml` file, as they are managed by Runtipi. This track involves removing these sections from the OpenClaw app's configuration to comply with the official documentation.

## Requirements
- Modify `runtipi-appstore/apps/openclaw/docker-compose.yml` to remove the `networks` and `labels` sections from the `openclaw` service.
- Remove the top-level `networks` section from the `docker-compose.yml` file.

## Acceptance Criteria
- [ ] `runtipi-appstore/apps/openclaw/docker-compose.yml` no longer contains a `labels` section.
- [ ] `runtipi-appstore/apps/openclaw/docker-compose.yml` no longer contains a `networks` section.
- [ ] The app still passes project validation (`bun run scripts/validate-json.js`).
- [ ] App-specific tests pass (`bun test apps/__tests__/apps.test.ts`).
