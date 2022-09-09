![headscale logo](https://github.com/juanfont/headscale/raw/main/docs/logo/headscale3_header_stacked_left.png)

An open source, self-hosted implementation of the Tailscale control server.

Join our [Discord](https://discord.gg/c84AZQhmpx) server for a chat.

## What is Tailscale

Tailscale is [a modern VPN](https://tailscale.com/) built on top of
[Wireguard](https://www.wireguard.com/).
It [works like an overlay network](https://tailscale.com/blog/how-tailscale-works/)
between the computers of your networks - using
[NAT traversal](https://tailscale.com/blog/how-nat-traversal-works/).

Everything in Tailscale is Open Source, except the GUI clients for proprietary OS
(Windows and macOS/iOS), and the control server.

The control server works as an exchange point of Wireguard public keys for the
nodes in the Tailscale network. It assigns the IP addresses of the clients,
creates the boundaries between each user, enables sharing machines between users,
and exposes the advertised routes of your nodes.

A [Tailscale network (tailnet)](https://tailscale.com/kb/1136/tailnet/) is private
network which Tailscale assigns to a user in terms of private users or an
organisation.

## Design goal

`headscale` aims to implement a self-hosted, open source alternative to the Tailscale
control server. `headscale` has a narrower scope and an instance of `headscale`
implements a _single_ Tailnet, which is typically what a single organisation, or
home/personal setup would use.

`headscale` uses terms that maps to Tailscale's control server, consult the
[glossary](https://github.com/juanfont/headscale/blob/main/docs/glossary.md) for explainations.

## Support

If you like `headscale` and find it useful, there is a sponsorship and donation
buttons available in the repo.

If you would like to sponsor features, bugs or prioritisation, reach out to
one of the maintainers.

## Features

- Full "base" support of Tailscale's features
- Configurable DNS
  - [Split DNS](https://tailscale.com/kb/1054/dns/#using-dns-settings-in-the-admin-console)
- Node registration
  - Single-Sign-On (via Open ID Connect)
  - Pre authenticated key
- Taildrop (File Sharing)
- [Access control lists](https://tailscale.com/kb/1018/acls/)
- [MagicDNS](https://tailscale.com/kb/1081/magicdns)
- Support for multiple IP ranges in the tailnet
- Dual stack (IPv4 and IPv6)
- Routing advertising (including exit nodes)
- Ephemeral nodes
- Embedded [DERP server](https://tailscale.com/blog/how-tailscale-works/#encrypted-tcp-relays-derp)
