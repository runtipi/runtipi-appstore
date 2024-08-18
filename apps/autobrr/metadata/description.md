autobrr is the modern download automation tool for torrents. With inspiration and ideas from tools like trackarr, autodl-irssi and flexget we built one tool that can do it all, and then some.

[![autobrr ui](https://github.com/autobrr/autobrr/raw/develop/.github/images/autobrr-front.png)](https://github.com/autobrr/autobrr/blob/develop/.github/images/autobrr-front.png)

## [](https://github.com/autobrr/autobrr#documentation)Documentation

Installation guide and documentation can be found at [https://autobrr.com](https://autobrr.com)

## [](https://github.com/autobrr/autobrr#key-features)Key features

- Support for 60+ trackers with IRC announces
- Torznab/RSS support via Prowlarr to easily get access to hundreds of trackers
- Powerful but simple filtering with RegEx support (like in autodl-irssi)
- Easy to use and mobile friendly web UI (with dark mode!) to manage everything
- Built on Go and React making autobrr lightweight and perfect for supporting multiple platforms (Linux, FreeBSD, Windows, macOS) on different architectures (e.g. x86, ARM)
- Great container support (Docker, k8s/Kubernetes)
- Database engine supporting both PostgreSQL and SQLite
- Notifications (Discord, Telegram, Notifiarr)
- One autobrr instance can communicate with multiple clients (both torrent and \*arr) on remote servers
- Base path / Subfolder (and subdomain) support for convenient reverse-proxy support

Available download clients and actions

- qBittorrent (with built in re-announce, categories, rules, max active downloads, etc)
- Deluge v1+ and v2+
- rTorrent
- Transmission
- Sonarr, Radarr, Lidarr, Whisparr and Readarr (pushes releases directly to them and gets in the early swarm, instead of getting them via RSS when it's already over)
- Watch folder
- Exec custom scripts
- Webhook

## [](https://github.com/autobrr/autobrr#what-is-autobrr-and-how-does-it-fit-into-the-ecosystem)What is autobrr and how does it fit into the ecosystem?

We can start by talking about torrent trackers (hereby referred to as indexers) and maintaining ratio. You are required to maintain a ratio with most indexers. Ratio is built by seeding your torrents. The earlier you're seeding a torrent, the more peers you make yourself available to on that torrent.

Software like Radarr and Sonarr utilizes RSS to look for new torrents. RSS feeds are updated regularly, but too slow to let you be a part of what we call the initial swarm of a torrent. This is were autobrr comes into play.

Many indexers announce new torrents on their IRC channels the second it is uploaded to the site. autobrr monitors such channels in real time and grabs the torrent file as soon as it's uploaded based on certain conditions (hereby referred to as filters) that you set up within autobrr. It then sends that torrent file to a download client of your choice via an action set within the filter. A download client can be anything from qBittorrent and Deluge, to Radarr and Sonarr, or a watch folder.

When your autobrr filter is set to send the torrent files to Radarr and Sonarr, they will decide if it's something they want, and then forward it to the torrent client they are set up with.

autobrr can also send matches (torrent files that meets your filter's criteria) directly to torrent clients like qBittorrent, Deluge, r(u)Torrent and Transmission. You don't need to use the \*arr suite to make use of autobrr.

### [](https://github.com/autobrr/autobrr#rss-support-for-indexers-without-an-irc-announcer)RSS support for indexers without an IRC announcer

A lot of indexers do not announce new torrents in an IRC channel. You can still make use of these indexers with autobrr since it has built in support for feeds as well. Both torznab and regular RSS is supported. RSS indexers are treated the same way as regular indexers within autobrr.

This isn't needed if your usecase is feeding the \*arrs only. Since they have RSS support already.
