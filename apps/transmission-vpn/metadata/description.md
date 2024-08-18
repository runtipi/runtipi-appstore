## Recommended VPN

![https://airvpn.org/?referred_by=674291](https://airvpn.org/images/promotional/banner_641x91.gif)

**This container is heavily tested using [AirVPN](https://airvpn.org/?referred_by=674291).**

| VPN Provider               | Port Forwarding | Works ? |
|----------------------------|-----------------|---------|
| [AirVPN](https://airvpn.org/?referred_by=674291) | **Yes** | **Yes** |
| [ProtonVPN](https://protonvpn.com/fr) | **Yes** | N.C. |
| [NordVPN](https://ref.nordvpn.com/EQNOEHVwOCW)* | No | **Almost Yes** |

PS: [VPN Providers with port forwarding are better for torrenting.](https://www.reddit.com/r/VPNTorrents/comments/p6h7em/answered_why_you_do_need_portforwarding_for/) (reddit.com)

*[NordVPN, Get 3 months free here.](https://ref.nordvpn.com/EQNOEHVwOCW)

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
### Custom
For AirVPN, grab your custom config from: https://airvpn.org/generator/. Drop it in `runtipi/app-data/transmission-vpn/data/custom/AirVPN_XX-XXXXXX_XXXX_UDP-443-Entry3.ovpn`

Don't forget to requests ports here: https://airvpn.org/ports/

Fill Settings of Transmission VPN app with:
- **OpenVPN > Username**: Your AirVPN email.
- **OpenVPN > Password**: Your AirVPN password.
- **OpenVPN > Default Provider Config**: Name of your generated file in your custom folder (*without .ovpn extension*)
- **OpenVPN > Provider**: Custom Config.

### Overriding with user-config
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
