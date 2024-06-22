# Python Matter Server

This project implements a Matter Controller Server over WebSockets using the
[official Matter (formerly CHIP) SDK](https://github.com/project-chip/connectedhomeip)
as a base and provides both a server and client implementation.

The goal of this project is primarily to have Matter support in Home Assistant
but its universal approach makes it suitable to be used in other projects too.

## Support

Got questions?

You have several options to get them answered:

  * The Home Assistant [Community Forum](https://community.home-assistant.io/).
  * The Home Assistant [Discord Chat Server](https://discord.gg/c5DvZ4e).
  * Join [the Reddit subreddit in /r/homeassistant](https://reddit.com/r/homeassistant).

If you experience issues using Matter with Home Assistant, please open an issue
report in the [Home Assistant Core repository](https://github.com/home-assistant/core/issues/new/choose).

You may also open issues in this repository if you are absolutely sure that your
issue is related to the Matter Server component.

### Requirements to communicate with Wi-Fi/Ethernet based Matter devices

Make sure you run the container on the host network. The host network
interface needs to be in the same network as the Android/iPhone device
you are using for commissioning. Matter uses link-local multicast protocols
which do not work across different LANs or VLANs.

The host network interface needs IPv6 support enabled.

### Requirements to communicate with Thread devices through Thread border routers

For communication through Thread border routers which are not running on the same
host as the Matter Controller server to work, IPv6 routing needs to be properly
working. IPv6 routing is largely setup automatically through the IPv6 Neighbor
Discovery Protocol, specifically the Route Information Options (RIO). However,
if IPv6 Neighbor Discovery RIO's are processed, and processed correctly depends on the network
management software your system is using. There may be bugs and caveats in
processing this Route Information Options.

In general, make sure the kernel option `CONFIG_IPV6_ROUTER_PREF` is enabled and
that IPv6 forwarding is disabled (sysctl variable `net.ipv6.conf.all.forwarding`).
If IPv6 forwarding is enabled, the Linux kernel doesn't employ reachability
probing (RFC 4191), which can lead to longer outages (up to 30min) until
network changes are detected.