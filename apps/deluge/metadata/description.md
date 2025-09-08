# [Deluge](https://github.com/linuxserver/docker-deluge)

[Deluge](http://deluge-torrent.org/) is a lightweight, Free Software, cross-platform BitTorrent client.

- Full Encryption
- WebUI
- Plugin System
- Much more...

## [](https://github.com/linuxserver/docker-deluge#application-setup)Application Setup

When first installed the download path is set to a non-existent directory `/downloads`.
To set a correct path :
  1. Access the Deluge WebUI
  2. Go to **Preferences** on the top bar
  3. In **Downloads** check the **Folders** section
  4. Edit **Download to** and enter `/media/torrents/complete`

Feel free to adapt the settings further to your convenience.

If you still encounter an error, make sure that user `1000` has access to the directory. If you work with another user, change the environment variables `PUID` & `PGID` accordingly through user-config.

# Default credentials

Username: admin
Password: deluge

---

# Folder Info

| Root Folder                                  | Container Folder |
|----------------------------------------------|------------------|
| /runtipi/app-data/deluge/data/deluge/config	 | /config          |
| /runtipi/media/torrents                 | /media/torrents       |
