# Lightweight universal DDNS Updater program

Program to keep DNS A and/or AAAA records updated for multiple DNS providers

## Versioned documentation

This readme and the [docs/](docs/) directory are **versioned** to match the program version:

| Version  | Readme link                                                           | Docs link                                                       |
| -------- | --------------------------------------------------------------------- | --------------------------------------------------------------- |
| Latest   | [README](https://github.com/qdm12/ddns-updater/blob/master/README.md) | [docs/](https://github.com/qdm12/ddns-updater/tree/master/docs) |
| `v2.7.0` | [README](https://github.com/qdm12/ddns-updater/blob/v2.7.0/README.md) | [docs/](https://github.com/qdm12/ddns-updater/blob/v2.7.0/docs) |
| `v2.6.1` | [README](https://github.com/qdm12/ddns-updater/blob/v2.6.1/README.md) | [docs/](https://github.com/qdm12/ddns-updater/blob/v2.6.1/docs) |
| `v2.5.0` | [README](https://github.com/qdm12/ddns-updater/blob/v2.5.0/README.md) | [docs/](https://github.com/qdm12/ddns-updater/blob/v2.5.0/docs) |

## Features

- Available as a Docker image [`qmcgaw/ddns-updater`](https://hub.docker.com/r/qmcgaw/ddns-updater) and [`ghcr.io/qdm12/ddns-updater`](<(https://github.com/qdm12/ddns-updater/pkgs/container/ddns-updater)>)
- 🆕 Available as [zero-dependency binaries for Linux, Windows and MacOS](https://github.com/qdm12/ddns-updater/releases)
- Updates periodically A records for different DNS providers:
  - Aliyun
  - AllInkl
  - Changeip
  - Cloudflare
  - DD24
  - DDNSS.de
  - deSEC
  - DigitalOcean
  - DonDominio
  - DNSOMatic
  - DNSPod
  - Dreamhost
  - DuckDNS
  - DynDNS
  - Dynu
  - EasyDNS
  - FreeDNS
  - Gandi
  - GCP
  - GoDaddy
  - GoIP.de
  - He.net
  - Hetzner
  - Infomaniak
  - INWX
  - Ionos
  - Linode
  - LuaDNS
  - Name.com
  - Namecheap
  - Netcup
  - NoIP
  - Now-DNS
  - Njalla
  - OpenDNS
  - OVH
  - Porkbun
  - Route53
  - Selfhost.de
  - Servercow.de
  - Spdyn
  - Strato.de
  - Variomedia.de
  - Zoneedit
  - **Want more?** [Create an issue for it](https://github.com/qdm12/ddns-updater/issues/new/choose)!
- Web user interface (Desktop)

  ![Web UI](https://github.com/qdm12/ddns-updater/raw/master/readme/webui-desktop.gif)

- Web user interface (Mobile)

  ![Mobile Web UI](https://github.com/qdm12/ddns-updater/raw/master/readme/webui-mobile.png)

- Send notifications with [**Shoutrrr**](https://containrrr.dev/shoutrrr/v0.8/services/overview/) using `SHOUTRRR_ADDRESSES` _you will need user-config for this_
- Container (Docker/K8s) specific features:
  - Lightweight 12MB Docker image based on the Scratch Docker image
  - Docker healthcheck verifying the DNS resolution of your domains
  - Images compatible with `amd64`, `386`, `arm64`, `armv7`, `armv6`, `s390x`, `ppc64le`, `riscv64` CPU architectures
- Persistence with a JSON file _updates.json_ to store old IP addresses with change times for each record
