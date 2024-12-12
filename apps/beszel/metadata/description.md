## Beszel

A lightweight server resource monitoring hub with historical data, docker stats, and alerts.

![Screenshot of the hub](https://henrygd-assets.b-cdn.net/beszel/screenshot.png)

### Features

- **Lightweight**: Much smaller and less demanding than leading solutions.
- **Docker stats**: CPU and memory usage history for each container.
- **Alerts**: Configurable alerts for CPU, memory, and disk usage, and system status.
- **Multi-user**: Each user has their own systems. Admins can share systems across users.
- **Simple**: Easy setup and doesn't require anything to be publicly available online.
- **OAuth / OIDC**: Supports many OAuth2 providers. Password auth can be disabled.
- **Automatic backups**: Save and restore your data to / from disk or S3-compatible storage.
- **REST API**: Use your metrics in your own scripts and applications.

### Introduction

Beszel has two components: the hub and the agent.

The hub is a web application that provides a dashboard to view and manage your connected systems. It's built on top of [PocketBase](https://pocketbase.io/).

The agent runs on each system you want to monitor. It creates a minimal SSH server through which it communicates system metrics to the hub.
