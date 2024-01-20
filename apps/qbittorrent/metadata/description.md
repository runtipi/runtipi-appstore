## Fast, easy, and free BitTorrent client

The [Qbittorrent](https://www.qbittorrent.org/) project aims to provide an open-source software alternative to µTorrent. qBittorrent is based on the Qt toolkit and libtorrent-rasterbar library.

## Credentials

Please note that starting from version 4.6.1, qBittorrent no longer provides a default password. Instead, a randomly generated password is used and can be found in the container logs. Please check the logs for the password. Alternatively, you can manually modify the config file to set it to the hash of `adminadmin`. Example:

```
 [Preferences]
WebUI\Password_PBKDF2="@ByteArray(ARQ77eY1NUZaQsuDHbIMCA==:0WMRkYTUWVT9wVvdDtHAjU9b3b7uB8NR1Gur2hmQCvCDpm39Q+PsJRJPaCU51dEiz+dTzh8qbPsL8WkFljQYFQ==)" 
```

## Folder Info 

| Root Folder                               | Container Folder |
|-------------------------------------------|------------------|
| /runtipi/app-data/qbittorrent/data/config | /config          |
| /runtipi/media/torrents                   | /media/torrents  |
