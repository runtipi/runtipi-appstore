# DuckDNS

[Duckdns](https://duckdns.org/) is a free service which will point a DNS (sub domains of duckdns.org) to an IP of your choice. The service is completely free, and doesn't require reactivation or forum posts to maintain its existence.

[![duckdns](https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/duckdns.png)](https://duckdns.org/)

## Supported Architectures

We utilise the docker manifest for multi-platform awareness. More information is available from docker [here](https://distribution.github.io/distribution/spec/manifest-v2-2/#manifest-list) and our announcement [here](https://blog.linuxserver.io/2019/02/21/the-lsio-pipeline-project/).

Simply pulling `lscr.io/linuxserver/duckdns:latest` should retrieve the correct image for your arch, but you can also pull specific arch images via tags.

The architectures supported by this image are:

| Architecture | Available | Tag |
| :----: | :----: | ---- |
| x86-64 | ✅ | amd64-\<version tag\> |
| arm64 | ✅ | arm64v8-\<version tag\> |
| armhf | ❌ | |

## Application Setup

- Go to the [duckdns website](https://duckdns.org/), register your subdomain(s) and retrieve your token
- Create a container with your subdomain(s) and token. If you own user.duckdns.org, you put `SUBDOMAINS=user` you would NOT put a sub subdomain like overseerr from overseerr.user.ducksdns.org
- It will update your IP with the DuckDNS service every 5 minutes (with a random jitter)

## Notice regarding automatic detection

Using the `UPDATE_IP` variable whatever its value (`ipv4`, `ipv6` or `both`) uses external *Cloudflare whoami* service to detect public IP addresses.
**Be aware that using this variable will query a third-party service other than DuckDNS.**

Omitting the `UPDATE_IP` variable uses DuckDNS for detection and only supports IPv4.
