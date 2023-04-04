Podfetch is a self-hosted podcast manager. It is a web app that lets you download podcasts and listen to them online. It is written in Rust and uses React for the frontend.

Every time a new commit is pushed to the main branch, a new docker image is built and pushed to docker hub. So it is best to use something like [watchtower](https://github.com/containrrr/watchtower) to automatically update the docker image.


# API Info

Sign up for an [Podcast Index](https://api.podcastindex.org/signup) account to get an API key.
---

## Folder Info

| Root Folder                                 | Container Folder |
|---------------------------------------------|------------------|
| /runtipi/app-data/podfetch/data/podfetch-db | /app/db          |
| /runtipi/media/data/podcasts:/app/podcasts  | /app/podcasts    |

---

## UI

## [](https://github.com/SamTV12345/PodFetch#audio-player)Audio Player

The podcast listening tool contains an advanced audio player that can be used to listen to your podcasts,skip episodes, turn the volumes as high as 300% or skip around in the current episode. [![Audio Player](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/advanced_audio_player.png)](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/advanced_audio_player.png)

# [](https://github.com/SamTV12345/PodFetch#continue-right-where-you-stopped)Continue right where you stopped

The tool will automatically save your progress in the current episode and will resume from where you left off even if you close the browser. You can continue listening on all devices by just hitting play on any episode on your home screen.

[![Continue listening to episodes](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/continue_listening.png)](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/continue_listening.png)

## [](https://github.com/SamTV12345/PodFetch#search-for-podcasts)Search for podcasts

You can search for podcast episodes by hitting CTRL+F and typing any word that might appear in the description or title of the podcast episode you want to listen to. [![Audio Player](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/search.png)](https://raw.githubusercontent.com/SamTV12345/podgrabv2/main/docs/search.png)

## [](https://github.com/SamTV12345/PodFetch#internationalization)Internationalization

Podfetch is currently available in English and German. If you want to add a new language you can do so by adding a new file to the `i18n` folder and adding the translations to the file.

# [](https://github.com/SamTV12345/PodFetch#rss-feed)RSS feed

Podfetch offers an own feed to download podcast episodes. You can add the url <SERVER\_URL>/rss to your favorite podcast app like gPodder to download and play episodes.
s
# [](https://github.com/SamTV12345/PodFetch#roadmap)Roadmap

-   [x]  Add podcasts via Itunes API
-   [x]  Check for new episodes.
-   [x]  Download episodes.
-   [x]  Play episodes.
-   [x]  Force refresh download of podcast episodes.
-   [x]  Force refresh of podcast episodes.
-   [x]  Resume podcasts even if browser is closed.
-   [x]  Add websocket support for new podcasts.
-   [x]  Add detailed audio player.
-   [x]  Star podcasts.
-   [x]  Unsubscribe podcasts.
-   [x]  Add retrieving podcasts from Podcastindex.org.
-   [x]  Basic Auth.
-   [x]  Import from OPML file.
-   [ ]  Like episodes.
-   [ ]  Delete podcasts.