# Barrage

  

[![](https://github.com/maulik9898/barrage/raw/main/public/logo.png)](https://github.com/maulik9898/barrage/blob/main/public/logo.png)

> Introducing Barrage
> 
> Minimal Deluge WebUI with full mobile support



## [](https://github.com/maulik9898/barrage/blob/main/README.md#features)Features

-   Responsive mobile first design
-   Add torrent by URL or magnet
-   Sort and Filter Torrents
-   Global upload and Download speed limits
-   Change File Priority
-   Change Torrent options

## [](https://github.com/maulik9898/barrage/blob/main/README.md#screenshots)Screenshots

Click me  

[![](https://github.com/maulik9898/barrage/raw/main/_docs/home.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/home.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/add.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/add.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/add_torrent.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/add_torrent.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/sort.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/sort.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/filter.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/filter.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/menu.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/menu.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/globalup.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/globalup.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/detail.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/detail.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/files.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/files.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/options.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/options.jpg)     [![](https://github.com/maulik9898/barrage/raw/main/_docs/pagination.jpg)](https://github.com/maulik9898/barrage/blob/main/_docs/pagination.jpg)                                                    

## [](https://github.com/maulik9898/barrage/blob/main/README.md#deploy)Deploy

You can deploy barrage with docker.

```
docker run --name barrage \
  -p 3000:3000 \
  -e NEXTAUTH_SECRET=secret \
  -e DELUGE_URL=http://localhost:8112 \
  -e DELUGE_PASSWORD=password \
  -e BARRAGE_PASSWORD=password \
  maulik9898/barrage

```

Then you can use the following environment variables to configure Barrage

| Environment | Description |
| --- | --- |
| `NEXTAUTH_SECRET` | Used to encrypt the NextAuth.js JWT |
| `DELUGE_URL` | The Deluge WebUI URL |
| `DELUGE_PASSWORD` | The password from deluge WebUI |
| `BARRAGE_PASSWORD` | The password for accessing Barrage |