# Home Assistant

Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server.

Check out [home-assistant.io](https://home-assistant.io) for a [demo](https://home-assistant.io/demo/), [tutorials](https://home-assistant.io/getting-started/automation/) and [documentation](https://home-assistant.io/docs/)

## Configuration tips 
- **Matter Support in Docker:** Use the Matter Server app !
- **HomeKit Support in Docker:** Install the MDNS app and use `host`network mode *(see below)*

## Help
- Device not detected on network ?
>You may need to use Home Assistant to change the **network mode** of the container.

### Set host network mode
In the `user-config` tab, edit `docker-compose.yaml` to have this :
```yaml
services:
  homeassistant-1:
    networks: !reset []
    network_mode: host
```
⚠️ This will bypass port/domain access defined in Runtipi, you will then need to access Home Assistant through port **8123** instead.

