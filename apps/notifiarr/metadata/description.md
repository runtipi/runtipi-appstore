# Notifiarr

This is the unified client for Notifiarr.com. The client enables content requests from Media Bot in your Discord Server and also provides reports for Plex usage and system health among many other features.

## Features
- Enables Media Requests. Add content from your chat server.
- Configurable Network and Service Health checks. Get notified when something goes down.
- Plex webhook relay. Plex sends many webhooks; we use the client to filter them.
- Starr app proxy. This feature enables access to starr APIs with your Notifiarr API key (or a custom api key).
- Configurable System Snapshots. Get notifications containing system metrics. Examples:
    - CPU, Memory, Storage, Raid Health: MegaRaid, mdadm, disk health: smartctl
    - Nvidia: nvidia-smi, MySQL: display top queries
- TRaSH Custom format Sonarr and Radarr sync.
- Get notifications for downloads stuck in your starr app queues.
    - Configure automated actions for these items.
- Daily dashboard notification for all starr, media and download apps.
- Hourly Plex Sessions notifications.
- Sqlite database corruption checks for Starr apps.
- Watch / Tail [log] files and get notifications for matched lines.
- Command Relay. Run scripts or commands on your server right from a chat channel.
- Act as a timer/trigger for certain Notifiarr Website actions
    - Discord Cleanup

## Docs
POST INSTALLATION VIEW LOGS FOR USERNAME AND PASSWORD
Documentation is available here: [notifiarr.wiki](https://notifiarr.wiki/en/Client/Main).
