### Port Info

| Exposed Service      | Local Port | Exposed Domain      |
|----------------------|------------|---------------------|
| Lidarr | IP:8186   | example.com         |
| Deemix | IP:8167   | Not Exposed Via Domain|

---

This repository bundles a modded version of Lidarr and Deemix into a docker image featuring :

-   Native Deemix integration as an indexer and downloader for Lidarr
-   Automatic Lidarr and Deemix configuration
-   Automatic conversion from any format with ffmpeg
-   Podman compatibility with rootless mode

This allows an easy deployment, with the advantage of having a direct control over Deemix indexing and downloader capacities into Lidarr :

[!["Lidarr indexers"](https://github.com/youegraillot/lidarr-on-steroids/raw/main/.assets/lidarr-indexers.png "Lidarr indexers")](https://github.com/youegraillot/lidarr-on-steroids/raw/main/.assets/lidarr-indexers.png)