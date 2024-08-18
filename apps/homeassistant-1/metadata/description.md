# Home Assistant

Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server.

Check out [home-assistant.io](https://home-assistant.io) for a [demo](https://home-assistant.io/demo/), installation [instructions](https://home-assistant.io/getting-started/), [tutorials](https://home-assistant.io/getting-started/automation/) and [documentation](https://home-assistant.io/docs/)

**HomeKit Support in Docker:** Use MDNS app ! (And follow https://community.home-assistant.io/t/using-homekit-component-inside-docker/45409/41)
**Matter Support in Docker:** Use Matter Server app !

## Migration

February 2024

This version of Home Assistant can be exposed. To migrate from the non-exposable app, follow these steps:

- stop the installed app
- rename `runtipi/app-data/homeassistant` to `runtipi/app-data/__homeassistant`
- make a backup of `runtipi/app-data/__homeassistant` to a safe location
- uninstall the app
- install Home Assistant from the App Store
- stop the app
- remove `runtipi/app-data/homeassistant-1`
- rename `runtipi/app-data/__homeassistant` to `runtipi/app-data/homeassistant-1`
- add the following section to `runtipi/app-data/homeassistant/data/config/configuration.yaml`
  ```
  http:
    use_x_forwarded_for: true
    trusted_proxies:
      - 127.0.0.1
      - 172.16.0.0/12
      - ::1
  ```
- start the app
