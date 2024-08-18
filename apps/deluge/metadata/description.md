# Default credentials

Username: admin
Password: deluge

---

# Folder Info

| Root Folder                                  | Container Folder |
|----------------------------------------------|------------------|
| /runtipi/app-data/deluge/data/deluge/config	 | /config          |
| /runtipi/media/torrents                 | /media/torrents       |

---

# [linuxserver/deluge](https://github.com/linuxserver/docker-deluge)

[Deluge](http://deluge-torrent.org/) is a lightweight, Free Software, cross-platform BitTorrent client.

- Full Encryption
- WebUI
- Plugin System
- Much more...

## [](https://github.com/linuxserver/docker-deluge#supported-architectures)Supported Architectures

We utilise the docker manifest for multi-platform awareness. More information is available from docker [here](https://github.com/docker/distribution/blob/master/docs/spec/manifest-v2-2.md#manifest-list) and our announcement [here](https://blog.linuxserver.io/2019/02/21/the-lsio-pipeline-project/).

Simply pulling `lscr.io/linuxserver/deluge:latest` should retrieve the correct image for your arch, but you can also pull specific arch images via tags.

## [](https://github.com/linuxserver/docker-deluge#application-setup)Application Setup

The admin interface is available at `http://SERVER-IP:8112` with a default user/password of admin/deluge.

To change the password (recommended) log in to the web interface and go to Preferences->Interface->Password.
