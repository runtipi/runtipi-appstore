<p align="center">
  <img src="ui/public/logo_black.svg?raw=true" alt="Maintainerr's custom image"/>
</p>

<p align="center" >
  <a href="https://discord.gg/WP4ZW2QYwk"><img src="https://dcbadge.vercel.app/api/server/WP4ZW2QYwk?style=flat&theme=default-inverted" width="25%" alt="Discord link"/></a>
  &nbsp; 
  <picture>
  <img src="https://github.com/jorenn92/Maintainerr/actions/workflows/build.yml/badge.svg?branch=main" width="17%" alt="Build" /> </picture>
    &nbsp; 
  <picture>  
  <img src="https://github.com/jorenn92/Maintainerr/actions/workflows/release.yml/badge.svg?branch=main" width="19%" alt="Release" /> </picture>
  &nbsp; 
  <a href="https://hub.docker.com/r/jorenn92/maintainerr"><img src="https://img.shields.io/docker/pulls/jorenn92/maintainerr" alt="Docker pulls" width="16.5%"></a>
</p>

<b>Maintainerr</b> makes managing your media easy.

- Do you hate being the janitor of your server?
- Do you have a lot of media that never gets watched?
- Do your users constantly request media, and let it sit there afterward never to be touched again?

If you answered yes to any of those questions.. You NEED <b>Maintainerr</b>.
It's a one-stop-shop for handling those outlying shows and movies that take up precious space on your server.

# Features

- Configure rules specific to your needs, based off of several available options from Plex, Overseerr, Radarr, and Sonarr.
- Manually add media to a collection, in case it's not included after rule execution. (one-off items that don't match a rule set)
- Selectively exclude media from being added to a collection, even if it matches a rule.
- Show a collection, containing rule matched media, on the Plex home screen for a specific duration before deletion. Think "Leaving soon".
- Optionally, use a manual Plex collection, in case you don't want <b>Maintainerr</b> to add & remove Plex collections at will.
- Manage media straight from the collection within Plex. <b>Maintainerr</b> will sync and add or exclude media to/from the internal collection.

- Remove or unmonitor media from \*arr
- Clear requests from Overseerr
- Delete files from disk

<br />
Currently, <b>Maintainerr</b> supports rule parameters from these apps :

- Plex
- Overseerr
- Radarr
- Sonarr

# Preview

![image](./ui/public/screenshots/overview_screenshot.png)
![image](./ui/public/screenshots/rules_screenshot.png)
![image](./ui/public/screenshots/collections_screenshot.png)
![image](./ui/public/screenshots/rule_example_screenshot.png)