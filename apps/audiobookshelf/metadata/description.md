# AudiobookShelf
Audiobookshelf is a self-hosted audiobook and podcast server.

### Features

* Fully **open-source**, including the [android & iOS app](https://github.com/advplyr/audiobookshelf-app) *(in beta)*
* Stream all audio formats on the fly
* Search and add podcasts to download episodes w/ auto-download
* Multi-user support w/ custom permissions
* Keeps progress per user and syncs across devices
* Auto-detects library updates, no need to re-scan
* Upload books and podcasts w/ bulk upload drag and drop folders
* Backup your metadata + automated daily backups
* Progressive Web App (PWA)
* Chromecast support on the web app and android app
* Fetch metadata and cover art from several sources
* Chapter editor and chapter lookup (using [Audnexus API](https://audnex.us/))
* Merge your audio files into a single m4b
* Embed metadata and cover image into your audio files (using [Tone](https://github.com/sandreas/tone))
* Basic ebook support and ereader
  * Epub, pdf, cbr, cbz
  * Send ebook to device (i.e. Kindle)
* Open RSS feeds for podcasts and audiobooks

# Folder Info

| Root Folder                         | Container Folder |
|-------------------------------------|------------------|
| /runtipi/app-data/audiobookshelf/config	 | /config          |
| /runtipi/app-data/audiobookshelf/metadata	 | /metadata          |
| /runtipi/media/data/books/spoken    | /audiobooks      |
| /runtipi/media/data/podcasts        | /podcasts        |