## Recommended VPN
This container is heavily tested using
[NordVPN, get 3 months free here.](https://ref.nordvpn.com/EQNOEHVwOCW)

## Features
 * Choose your Web UI !
 * Support many OpenVPN providers ([complete list](https://haugene.github.io/docker-transmission-openvpn/supported-providers/))
 * Works with traefik !
 * Pre-configured for Tipi.
 * Healthcheck
 * Highly configurable.

## Documentation

Don't hesitate to read related docs available here: https://haugene.github.io/docker-transmission-openvpn/

## VPN Provider Settings
You can configure specific settings to your provider by creating a `docker-compose.yml` file in your `user-config` directory.
| Directory               | File |
|-------------------------------|------------------|
| /runtipi/user-config/transmission-vpn/ | docker-compose.yml         |

With the following content by e.g. for NordVPN:
```
services:
  transmission-vpn:
    environment:
      - NORDVPN_COUNTRY=FR
      - NORDVPN_CATEGORY=legacy_p2p # Servers optimized for P2P usage
      - NORDVPN_PROTOCOL=tcp
      - NORDVPN_SERVER=fr000.nordvpn.com
```
Instructions for NordVPN can be found here: https://haugene.github.io/docker-transmission-openvpn/provider-specific/

For other's supported providers: https://haugene.github.io/docker-transmission-openvpn/supported-providers/

## Fast, easy, and free BitTorrent client

Docker container running Transmission torrent client with WebUI over an OpenVPN tunnel

Transmission is a fast, easy, and free BitTorrent client. It comes in several flavors:
  * A native macOS GUI application
  * GTK+ and Qt GUI applications for Linux, BSD, etc.
  * A headless daemon for servers and routers
  * A web UI for remote controlling any of the above

Visit [https://transmissionbt.com/](https://transmissionbt.com/) for more information.

## Folder Info

| Root Folder                   | Container Folder |
|-------------------------------|------------------|
| /runtipi/app-data/transmission/data/config | /config          |
| /runtipi/media/torrents                | /media/torrents       |
