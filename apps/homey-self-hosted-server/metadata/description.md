# Homey self-hosted server

Homey is a smart home platform that connects and automates devices from many different brands in one place. The Homey Self-Hosted Server lets you run Homey on your own Linux machine using Docker.

## Notes

* Uses `network_mode: host` and `privileged: true` as required by Homey.
* Stores persistent data in `${APP_DATA_DIR}/data`.
* Default Homey ports include `4859`, `4860`, `4861`, and `4862`.

For setup details, see the official Homey documentation:
[Homey Self-Hosted Server Documentation](https://support.homey.app/hc/en-us/articles/24010537261980-How-to-install-Homey-Self-Hosted-Server-with-Docker-on-Linux?utm_source=chatgpt.com)
