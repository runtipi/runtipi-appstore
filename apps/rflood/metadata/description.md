## Folder Information
| Root Folder                                  | Container Folder |
|----------------------------------------------|------------------|
| /runtipi/app-data/rflood/data/config	 | /config          |
| /runtipi/media/torrents                 | /media/torrents       |

--
rFlood docker image with rTorrent and the Flood UI.

What is the Flood UI?

Flood is a monitoring service for various torrent clients. It's a Node.js service that communicates with your favorite torrent client and serves a decent web UI for administration. [Flood-UI](https://github.com/Flood-UI) organization hosts related projects.

#### Supported Clients

| Client | Support |
| --- | --- |
| [rTorrent](https://github.com/rakshasa/rtorrent) | ✅ ([tested](https://github.com/jesec/flood/blob/master/server/.jest/rtorrent.setup.js)) |
| [qBittorrent](https://github.com/qbittorrent/qBittorrent) v4.1+ | ✅ ([tested](https://github.com/jesec/flood/blob/master/server/.jest/qbittorrent.setup.js)) |
| [Transmission](https://github.com/transmission/transmission) | ✅ ([tested](https://github.com/jesec/flood/blob/master/server/.jest/transmission.setup.js)) |
| [Deluge](https://github.com/deluge-torrent/deluge) v2+ | ⚗️ Experimental |

#### Integrating with Flood

APIs are officially documented inline by the [comments](https://github.com/jesec/flood/blob/f7019001dd81ee8401c87d4c4cd6da6f5f520611/server/routes/api/torrents.ts#L106-L117) and [types](https://github.com/jesec/flood/blob/f7019001dd81ee8401c87d4c4cd6da6f5f520611/shared/schema/api/torrents.ts#L10-L32).

You can also check out:

-   [community documentation site](https://flood-api.netlify.app)
-   [list of unofficial client API libraries](https://github.com/jesec/flood/wiki/List-of-unofficial-client-API-libraries)
-   [list of unofficial API integrations](https://github.com/jesec/flood/wiki/List-of-unofficial-API-integrations)

Flood conforms to [Semantic Versioning](https://semver.org) conventions.

#### Feedback

If you have a specific issue or bug, please file a [GitHub issue](https://github.com/jesec/flood/issues). Please join the [Flood Discord server](https://discord.gg/Z7yR5Uf) to discuss feature requests and implementation details.

#### More Information

Check out the [Wiki](https://github.com/jesec/flood/wiki) for more information.

