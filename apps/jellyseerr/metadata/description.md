# Migration Notice - 2026
*Jellyseer* merge with *Overseer* to become **Seer**
You can install **Seer** from the appstore and transfer your data easily with the following steps.

## Migration steps
#### From the Runtipi Web UI
1. Install the new app **Seer**
2. Stop it
3. Click on the three dots and select `Reset app`
4. Keep it stopped until **step 7** 

#### From your Runtipi host terminal
5. Go to your Runtipi install folder : `cd /path/to/runtipi`
6. Copy all files to their new location :
``` bash
cp -r app-data/migrated/jellyseer/data/jellyseerr-config/. app-data/migrated/seer/config/
```
#### Back to the Runtipi Web UI
7. You can start Seer, migration will proceed automatically

> Once everything is fine you can uninstall Jellyseer.

# What is Jellyseer
**Jellyseerr** is a free and open source software application for managing requests for your media library. It is a a fork of Overseerr built to bring support for Jellyfin & Emby media servers!

_The original Overseerr team have been busy and Jellyfin/Emby support aren't on their roadmap, so we started this project as we wanted to bring the Overseerr experience to the Jellyfin/Emby Community!_

## [](https://github.com/Fallenbagel/jellyseerr#current-features)Current Features

- Full Jellyfin/Emby/Plex integration. Authenticate and manage user access with Jellyfin/Emby/Plex!
- Supports Movies, Shows, Mixed Libraries!
- Ability to change email addresses for smtp purposes
- Ability to import all jellyfin/emby users
- Easy integration with your existing services. Currently, Jellyseerr supports Sonarr and Radarr. More to come!
- Jellyfin/Emby/Plex library scan, to keep track of the titles which are already available.
- Customizable request system, which allows users to request individual seasons or movies in a friendly, easy-to-use interface.
- Incredibly simple request management UI. Don't dig through the app to simply approve recent requests!
- Granular permission system.
- Support for various notification agents.
- Mobile-friendly design, for when you need to approve requests on the go!

  (Upcoming Features include: Multiple Server Instances, Music Support, and much more!)

With more features on the way! Check out our [issue tracker](https://github.com/fallenbagel/jellyseerr/issues) to see the features which have already been requested.

## [](https://github.com/Fallenbagel/jellyseerr#preview)Preview

[![](https://github.com/Fallenbagel/jellyseerr/raw/develop/public/preview.jpg)](https://github.com/Fallenbagel/jellyseerr/blob/develop/public/preview.jpg)

## [](https://github.com/Fallenbagel/jellyseerr#support)Support

- You can get support on [Discord](https://discord.gg/ckbvBtDJgC).
- You can ask questions in the Help category of our [GitHub Discussions](https://github.com/fallenbagel/jellyseerr/discussions).
- Bug reports and feature requests can be submitted via [GitHub Issues](https://github.com/fallenbagel/jellyseerr/issues).

## [](https://github.com/Fallenbagel/jellyseerr#api-documentation)API Documentation

You can access the API documentation from your local Jellyseerr install at [http://localhost:5055/api-docs](http://localhost:5055/api-docs)

## [](https://github.com/Fallenbagel/jellyseerr#community)Community

You can ask questions, share ideas, and more in [GitHub Discussions](https://github.com/fallenbagel/jellyseerr/discussions).

If you would like to chat with other members of our growing community, [join the Jellyseerr Discord server](https://discord.gg/ckbvBtDJgC)!

Our [Code of Conduct](https://github.com/fallenbagel/jellyseerr/blob/develop/CODE_OF_CONDUCT.md) applies to all Jellyseerr community channels.
