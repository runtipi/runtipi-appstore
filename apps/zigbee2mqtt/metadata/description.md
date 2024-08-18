# Zigbee2MQTT 🐝🌉🔨 

Allows you to use your Zigbee devices without the vendor's bridge or gateway.

It bridges events and allows you to control your Zigbee devices via MQTT. In this way you can integrate your Zigbee devices with whatever smart home infrastructure you are using. 

|**Compatible**   | **Integrations**  | **Open Source**  |   
|---|---|---|
| Zigbee2MQTT supports [various Zigbee adapters](https://www.zigbee2mqtt.io/guide/adapters/) and a big bunch of [devices](https://www.zigbee2mqtt.io/supported-devices/). | Zigbee2MQTT integrates well with most home automation solutions because it uses [MQTT](https://mqtt.org/). | Zigbee2MQTT is licenced under the free [GNU General Public License 3](https://www.gnu.org/licenses/gpl-3.0.de.html). |

## Setup

You need to have a mqtt broker like [eclipse mosquitto](/apps/eclipse-mosquitto) running to use this app.

###  Configuration of the Zigbee adapter

For USB apdaters you can use dmesg command on Linux hosts to find the mounted device. Where possible you should use the `/dev/serial/by-id/` path of the stick, instead of `/dev/tty*`. This is because the `/dev/tty*` path can change - for example `/dev/ttyACM0` may become `/dev/ttyACM1` and then later back to `/dev/ttyACM0`. The `/dev/serial/by-id/` path won't change.

The **usb device path** must be set in the settings of the app before installing.

## Integrations

Zigbee2MQTT integrates well with (almost) every home automation solution because it uses MQTT. However the following integrations are worth mentioning:

- [Home Assistant](/apps/homeassistant)
- [Homey](https://homey.app/)
- [Domoticz](https://www.domoticz.com/)
- [Gladys Assistant](https://gladysassistant.com/)
- [IoBroker](https://www.iobroker.net/)
