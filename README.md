# Tipi App Store
This is the official repository for the Tipi App Store. It contains all the apps that are available for download on [Tipi](https://github.com/meienberger/runtipi).

## Apps available
- [Adguard Home](https://github.com/AdguardTeam/AdGuardHome) - Adguard Home DNS adblocker
- [Booksonic](https://github.com/popeen) - A server for streaming your audiobooks
- [Calibre-Web](https://github.com/janeczku/calibre-web) - Web Ebook Reader
- [Code-Server](https://github.com/coder/code-server) - Web VS Code 
- [Filebrowser](https://github.com/filebrowser/filebrowser) - Web File Browser
- [Firefly III](https://github.com/firefly-iii/firefly-iii) - A personal finances manager 
- [Freshrss](https://github.com/FreshRSS/FreshRSS) - A free, self-hostable RSS aggregator
- [Gitea](https://github.com/go-gitea/gitea) - Gitea - A painless self-hosted Git service
- [Ghost](https://github.com/TryGhost/Ghost) - Ghost - Turn your audience into a business
- [Homarr](https://github.com/ajnart/homarr) - A homepage for your server
- [Home Assistant](https://github.com/home-assistant/core) - Open source home automation that puts local control and privacy first
- [Invidious](https://github.com/iv-org/invidious) - An alternative front-end to YouTube
- [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
- [Jellyfin](https://github.com/jellyfin/jellyfin) - A media server for your home collection
- [Joplin](https://github.com/laurent22/joplin) - Privacy focused note-taking app
- [Libreddit](https://github.com/spikecodes/libreddit) - Private front-end for Reddit
- [Mealie](https://github.com/hay-kot/mealie) - Self-hosted recipe manager and meal planner.
- [n8n](https://github.com/n8n-io/n8n) - Workflow Automation Tool
- [Nextcloud](https://github.com/nextcloud/server) - A safe home for all your data
- [Nitter](https://github.com/zedeus/nitter) - Alternative Twitter front-end
- [Node-RED](https://github.com/node-red/node-red) - Low-code programming for event-driven applications
- [Overseerr](https://github.com/sct/overseerr) - Request management and media discovery tool for the Plex ecosystem
- [Photoprism](https://github.com/photoprism/photoprism) - AI-Powered Photos App for the Decentralized Web. We are on a mission to protect your freedom and privacy.
- [Pihole](https://github.com/pi-hole/pi-hole) - A black hole for Internet advertisements
- [Plex](https://github.com/plexinc/pms-docker) - Stream Movies & TV Shows
- [Portainer](https://github.com/portainer/portainer) - Making Docker and Kubernetes management easy.
- [Prowlarr](https://github.com/Prowlarr/Prowlarr/) - A torrent/usenet indexer manager/proxy
- [Radarr](https://github.com/Radarr/Radarr) - Movie collection manager for Usenet and BitTorrent users
- [Readarr](https://github.com/Readarr/Readarr) - Book Manager and Automation (Sonarr for Ebooks)
- [Resilio Sync](https://github.com/bt-sync) - Fast, reliable, and simple file sync and share solution
- [Sonarr](https://github.com/Sonarr/Sonarr) - TV show manager for Usenet and BitTorrent
- [Syncthing](https://github.com/syncthing/syncthing) - Continuous File Synchronization
- [Tailscale](https://github.com/tailscale/tailscale) - The easiest, most secure way to use WireGuard and 2FA
- [Tautulli](https://github.com/Tautulli/Tautulli) - A Python based monitoring and tracking tool for Plex Media Server
- [Transmission](https://github.com/transmission/transmission) - Fast, easy, and free BitTorrent client
- [Wireguard Easy](https://github.com/WeeJeWel/wg-easy) - WireGuard VPN + Web-based Admin UI
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Unofficial Bitwarden compatible server

## How to sumbit an app
If you want to see new apps on Tipi you can either :
- [Open an issue]() on this repository and some members of the community will add it
- Fork this repo and create the necessary files for a Tipi app (guide below)

## Adding your own app
> ⚠️ In order to proceed you should be familiar working with the Terminal and Git.
#### Prerequisites
- The app you want to add is free and open-source
- The app you want to add has an official and maintained docker image

#### 1. Fork the repo
In order to open a pull request you need to fork the repo. Start by clicking the "Fork" button in the upper right corner of this page.
This will create a new repository with your name and an identical structure to the original repo.

#### 2. Clone the repo locally
On your computer clone the repo you just forked.

```bash
git clone https://<your-github-username>/meienberger/runtipi-appstore
```

#### 3. Create a new branch for your app
Navigate to the repoisitory you just cloned.

```bash
cd runtipi-appstore
```

Create a new branch for your app.

```bash
git checkout -b app/<app-name>
```

#### 4. Create the app files
Each app requires at least the following files:
- A `docker-compose.yml` file to run your app
- A `config.json` file to configure your app
- A description in markdown format
- A logo in jpg format (512 x 512px)

Inside the repo open the `apps` folder and create a new folder for your app. The name should be the same as the app name without spaces or capital letters.

Create a new `config.json` file inside the newly create folder

```JSON
{
  "name": "My super app",
  "available": true,
  "port": 8100,
  "id": "my-app", # This should be the same name as the folder
  "description": "", # Long description of the app
  "tipi_version": 1, # Always 1 if you are adding a new app
  "version": "1.25.1", # The actual version of the app (not the tipi version)
  "categories": ["utilities"], # One or more categories for the app
  "short_desc": "", # Short description of the app
  "author": "", # Link or name of the author 
  "source": "", # Link for git repo
  "form_fields": [] # Used to ask for more info to the user before installing. Will be explained further
}
```

Available categories : `utilities`, `network`, `media`, `development`, `automation`, `social`, `utilities`, `photography`, `security`, `featured`, `books`, `data`, `music`, `finance`

If you want to add a new category, please open a new issue.

In the same folder, create a `docker-compose.yml` file with your app config.

```yml
version: "3.9"
services:
  my-app: # Should be exact same name as "id" field in config.json
    container_name: my-app  # Should be exact same name as "id" field in config.json
    image: my-app:1.0.0 # Try to avoid "latest" tag. As it may break configs in the future.
    environment:
      - TZ=${TZ} # Can use any env variable. List in runtipi/templates/env-sample
    volumes:
      - ${APP_DATA_DIR}/data/config:/config # Always start the path with ${APP_DATA_DIR}. This will put all data inside app-data/my-app/data
      - ${APP_DATA_DIR}/data/projects:/projects
    ports:
      - ${APP_PORT}:8443
    restart: unless-stopped
    networks:
      - tipi_main_network
```

You'll also need to create a `metadata` folder and inside put the following files:
- `description.md` - Long description of the app in markdown format. (see previous apps for inspiration)
- `logo.jpg` - Logo of the app in jpg format (512 x 512px)

#### 5. User defined environment variables
Sometimes an app is requiring more info to run it such as passwords or username. You can leverage the `form_fields` property in the `config.json` file to ask such information. Let's take for example Nextcloud. The image requires a username and password. We can simply add two fields in the config.json that will be presented to the user before installing.

```JSON
{
  ...
  "form_fields": [
    {
        "type": "text",
        "label": "Username",
        "max": 50,
        "min": 3,
        "required": true,
        "env_variable": "NEXTCLOUD_ADMIN_USER"
    },
    {
        "type": "password",
        "label": "Password",
        "max": 50,
        "min": 3,
        "required": true,
        "env_variable": "NEXTCLOUD_ADMIN_PASSWORD"
    }
  ]
}
```

You can choose between different types of fields. The app will automatically validate the user input before submitting.

| Type         | Description     | Example value |
|--------------|-----------------|------------|
| **text**     | Just a string of text      | username       |
| **password** | Will be hidden on typing  | password       |
| **email** | An email address | test@example.org |
| **number** | Any number | 123 |
| **fqdn** | Fully qualified domain name | example.org |
| **ip** | Any valid ipv4 address | 192.168.2.100 |
| **fqdnip** | Combination between ip and fqdn | 192.168.2.100 or example.org |
| **random** | Generate a random value for the user | 2m3ffc0923rk93df9023f9 |

You can also define a min and max length of input with the corresponding properties.
The `env_variable` property is the name of the variable you'll use in your `docker-compose.yml` file. Be sure to have a unique name.

So if we take the Nextcloud example again, this is how you would use the `form_fields` inside your compose file.

```yml
version: "3.7"

services:
  nextcloud:
    container_name: nextcloud
    image: nextcloud:23.0.3-apache
    restart: unless-stopped
    ports:
      - ${APP_PORT}:80
    volumes:
      - ${APP_DATA_DIR}/data/nextcloud:/var/www/html
    environment:
      - NEXTCLOUD_ADMIN_USER=${NEXTCLOUD_ADMIN_USER}
      - NEXTCLOUD_ADMIN_PASSWORD=${NEXTCLOUD_ADMIN_PASSWORD}
```

`NEXTCLOUD_ADMIN_USER` and `NEXTCLOUD_ADMIN_PASSWORD` are coming from the user inputs.

#### 6. Default data folder
If your app requires default files or configuration, you can easily provide those by creating a `data` folder beside the app config.

```
├── apps
    |-- my-app
        |-- config.json
        |-- data
        |   |-- anything.conf
        |-- docker-compose.yml
        |-- metadata
            |-- description.md
            |-- logo.jpg
```

Anything placed under data will be copied over `app-data/<app-id>/data`
Then you can mount those files inside your compose file.

```yml
my-app:
    container_name: my-app
    restart: unless-stopped
    volumes:
      - ${APP_DATA_DIR}/data:/var/lib/config # Will mount the folder with `anything.conf` inside
```