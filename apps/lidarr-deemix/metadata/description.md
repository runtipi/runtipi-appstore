## Install Notice

- To Finish the AutoConfig, Please login to your Deezer Account in the Deemix UI. After logging in, the container will run

``` 
-   /music root folder if no other root folder is configured
-   Delay profile allowing Deemix to be used by automatic search
-   Deemix as an indexer
-   Deemix as a download client
-   Flac2Custom script connection if `FLAC2CUSTOM_ARGS` is set
-   clean-downloads script connection to keep your downloads folder _clean_ after each imports
```

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