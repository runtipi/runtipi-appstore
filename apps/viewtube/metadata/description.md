ViewTube is an alternative YouTube frontend that lets you watch, search and discover YouTube videos without ads or tracking. It's built to be mobile and desktop friendly, with dark and light themes, and a touch-friendly video player with gestures. You can create an account separately from YouTube, read comments, watch playlists, subscribe to channels and receive push notifications for new uploads It's built using [Nuxt](https://nuxt.com/) and [Nest](https://nestjs.com/).

You can find the documentation at [viewtube.wiki](https://viewtube.wiki) 

**Warning! MongoDB version 4.4.18 will be used for arm64 devices like the raspberry pi!**

## Features

-   Watch videos without ads or tracking
-   Built from the ground up to be mobile and desktop friendly
-   Dark and light themes
-   Touch friendly video player with gestures
-   Supports loop, speed, autoplay and volume
-   Create an account separately from Youtube
-   Read comments
-   Search for videos
-   Watch playlists
-   Subscribe to channels and see their latest uploads
-   Receive push notifications for subscribed channels
-   Integrated SponsorBlock support

## Where does ViewTube get the data from?

ViewTube does not use the official Youtube API. It instead scrapes the data from the website using a combination of custom built tools and the following open source libraries.

-   [node-ytdl-core](https://github.com/fent/node-ytdl-core)
-   [node-ytsr](https://github.com/TimeForANinja/node-ytsr)
-   [node-ytpl](https://github.com/TimeForANinja/node-ytpl)
-   [yt-comment-scraper](https://github.com/FreeTubeApp/yt-comment-scraper)
-   [yt-channel-info](https://github.com/FreeTubeApp/yt-channel-info)

## Screenshots

### Homepage

[![Screenshot-Homepage](https://camo.githubusercontent.com/7ca1b34ee39d918f86a7043a3ffae08b574d5630975255eb8840536e7e169248/68747470733a2f2f692e6962622e636f2f476b35744b51372f6c78743179306d6b2e6a7067)](https://camo.githubusercontent.com/7ca1b34ee39d918f86a7043a3ffae08b574d5630975255eb8840536e7e169248/68747470733a2f2f692e6962622e636f2f476b35744b51372f6c78743179306d6b2e6a7067)

### Video

[![Screenshot-Video](https://camo.githubusercontent.com/07ecf2f4a9e61eb326d2125375f674020cbf97b1a998defdeb21fd8d1aa6f8f7/68747470733a2f2f692e6962622e636f2f52544c327633662f6732656a663777662e6a7067)](https://camo.githubusercontent.com/07ecf2f4a9e61eb326d2125375f674020cbf97b1a998defdeb21fd8d1aa6f8f7/68747470733a2f2f692e6962622e636f2f52544c327633662f6732656a663777662e6a7067)

### Channel

[![Screenshot-Channel](https://camo.githubusercontent.com/b50d3f852326d5436cc32507eb2ee48d036092ae1cba3bc61485a8a4661d0ffd/68747470733a2f2f692e6962622e636f2f68396d663179642f366a3435616f35722e6a7067)](https://camo.githubusercontent.com/b50d3f852326d5436cc32507eb2ee48d036092ae1cba3bc61485a8a4661d0ffd/68747470733a2f2f692e6962622e636f2f68396d663179642f366a3435616f35722e6a7067)


