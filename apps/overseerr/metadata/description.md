# Migration Notice - 2026
*Overseer* merge with *Jellyseer* to become **Seer**
You can install **Seer** from the appstore and transfer your data easily with the following steps.

## Migration steps
#### From the Runtipi Web UI
1. Install the new app **Seer**
2. Stop it *(Keep it stopped until **step 5**)*

#### From your Runtipi host terminal
3. Go to your Runtipi install folder : `cd /path/to/runtipi`
4. Copy all files to their new location :
``` bash
cp -r app-data/migrated/overseerr/data/config/. app-data/migrated/seerr/data/config/
```
#### Back to the Runtipi Web UI
5. You can start Seer, migration will proceed automatically

> Once everything is fine you can uninstall Overseer.

# What is Overseer
**Overseerr** is a free and open source software application for managing requests for your media library. It integrates with your existing services, such as **[Sonarr](https://sonarr.tv/)**, **[Radarr](https://radarr.video/)**, and **[Plex](https://www.plex.tv/)**!

## Current Features

- Full Plex integration. Authenticate and manage user access with Plex!
- Easy integration with your existing services. Currently, Overseerr supports Sonarr and Radarr. More to come!
- Plex library scan, to keep track of the titles which are already available.
- Customizable request system, which allows users to request individual seasons or movies in a friendly, easy-to-use interface.
- Incredibly simple request management UI. Don't dig through the app to simply approve recent requests!
- Granular permission system.
- Support for various notification agents.
- Mobile-friendly design, for when you need to approve requests on the go!

With more features on the way! Check out our [issue tracker](https://github.com/sct/overseerr/issues) to see the features which have already been requested.