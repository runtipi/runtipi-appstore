# MyNeS — My Network Scanner

**See every device on your home network — including the ones an IP scan cannot find.**

An IP scan of my LAN found 29 devices. There were about 60. Everything on Zigbee and Z-Wave has
no IP address, so an IP scan is blind to it — and the inventory was never real.

MyNeS discovers devices over **ARP, mDNS/Bonjour, SSDP/UPnP, Matter, Bluetooth LE and MQTT**.
That last one is the trick: reading retained Zigbee2MQTT / Z-Wave JS / Tasmota / Home Assistant
discovery topics is the only way to see a radio device that has no IP at all. Everything lands in
one inventory.

## Features

- **Multi-protocol discovery** — Zigbee bulbs behind Zigbee2MQTT and Z-Wave sensors behind
  Z-Wave JS appear next to your laptops and NAS.
- **Identification** — vendor lookup over a 1000+ entry OUI database, hostname pattern analysis,
  port signatures, automatic device-type classification. Identification regexes are editable in
  the UI.
- **Views** — device grid, table, network topology, force-directed graph, and a home floor plan
  you can pin devices onto.
- **Scan history** — when a device first appeared, when it went quiet.
- **Monitoring and alerts** — rule-based alerts on new, missing or changed devices, delivered by
  Web Push (MyNeS runs its own, no third-party relay), webhook, e-mail, or Home Assistant.
- **Two-way Home Assistant integration** — MQTT Discovery pushes every device in as an entity;
  the REST/WebSocket side pulls HA's device registry back and diffs it against what is actually
  on the wire.
- **Turkish and English UI**, light and dark themes, installable as a PWA.

No cloud, no account, no telemetry. Everything stays on your LAN.

## ⚠️ Host networking

MyNeS runs with `network_mode: host` and the `NET_ADMIN` / `NET_RAW` capabilities. It sends raw
ARP frames and listens for mDNS/SSDP multicast, and neither crosses a bridge network — from a
bridge it would see the Docker bridge instead of your LAN. This is why the app ships
`dynamic_config: false`: the dynamic compose format cannot express host networking.

It does **not** run as root (uid 1000) and it is **not** `privileged`. Without those capabilities
it degrades to a ping sweep plus the OS ARP cache and finds fewer devices rather than failing —
`GET /api/capabilities` reports exactly what is missing and why.

Because it is on the host network, the web UI is reachable directly on port **5883**.

## Optional configuration

Everything below is optional and can also be set later in MyNeS's own Settings page.

- **MQTT broker host** — the only way to see Zigbee / Z-Wave / Tasmota devices.
- **Home Assistant URL + long-lived token** — enables the pull/diff side of the integration.
- **Master password** — encrypts stored device credentials. Auto-generated if left empty.

> MyNeS is a scanner. Only scan networks you own.

## Links

- Source: <https://github.com/fxerkan/my_network_scanner>
- Docker image: <https://hub.docker.com/r/fxerkan/my_network_scanner>
- Issues: <https://github.com/fxerkan/my_network_scanner/issues>
