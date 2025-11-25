# Your self-hosted YouTube media server

![Tube Archivist](https://github.com/tubearchivist/tubearchivist/blob/master/assets/tube-archivist-banner.jpg?raw=true "Tube Archivist Banner")

## Core functionality

* Subscribe to your favorite YouTube channels
* Download Videos using **yt-dlp**
* Index and make videos searchable
* Play videos
* Keep track of viewed and unviewed videos

## Folder Info 

| Root Folder                                | Container Folder |
|--------------------------------------------|------------------|
| /runtipi/app-data/tubearchivist/data/cache | /cache           |
| /runtipi/media/data/youtube                | /youtube         |

If your /runtipi/media folder is remote mounted with NFS, follow the app
customization instructions to set the environment variables for HOST_UID and
HOST_GID to the owner of your media folder.

Customization documentation:
https://www.runtipi.io/docs/guides/customize-app-config

TubeArchivist installation documentation:
https://github.com/tubearchivist/tubearchivist#installing