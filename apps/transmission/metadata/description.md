## Fast, easy, and free BitTorrent client

Transmission is a fast, easy, and free BitTorrent client. It comes in several flavors:
  * A native macOS GUI application
  * GTK+ and Qt GUI applications for Linux, BSD, etc.
  * A headless daemon for servers and routers
  * A web UI for remote controlling any of the above

Visit [https://transmissionbt.com/](https://transmissionbt.com/) for more information.

## First install notice

When first installed the download path is set to a non-existent directory `/downloads`.
To set a correct path :
  1. Access the Transmission WebUI
  2. Click on the top-right menu bar
  3. Select **Edit preferences**
  4. In **Download to** enter `/media/torrents/complete`
  5. In **Use temporary folder** enter `/media/torrents/incomplete`

Feel free to adapt the settings to your convenience.

If you still encounter a `Permission denied (13)` error, make sure that user `1000` has access to the directory. If you work with another user, change the environment variables `PUID` & `PGID` accordingly through user-config.

## Folder Info

| Root Folder                   | Container Folder |
|-------------------------------|------------------|
| /runtipi/app-data/transmission/data/config | /config          |
| /runtipi/media/torrents                | /media/torrents       |
