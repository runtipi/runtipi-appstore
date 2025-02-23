# Checklist
## Dynamic compose for transmission-vpn
This is a transmission-vpn update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://transmission-vpn.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/config:/config
- [ ] ${APP_DATA_DIR}/data/custom:/etc/openvpn/custom
- [ ] ${ROOT_FOLDER_HOST}/media/torrents:/media/torrents
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] ⚙ Sysctls
- [ ] 📱 Devices
- [ ] 🔓 Capacity add
- [ ] 📃 Logging
- 🏷 DNS (skipped)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "transmission-vpn",
      "image": "haugene/transmission-openvpn:5.3.1",
      "isMain": true,
      "internalPort": 9091,
      "environment": {
        "PUID": "${TRANSMISSION_PUID-1000}",
        "PGID": "${TRANSMISSION_PGID-1000}",
        "TZ": "${TZ-Europe/Paris}",
        "USER": "${TRANSMISSION_USERNAME}",
        "PASS": "${TRANSMISSION_PASSWORD}",
        "OPENVPN_PROVIDER": "${TRANSMISSION_OVPN_PROVIDER-NORDVPN}",
        "OPENVPN_CONFIG": "${TRANSMISSION_OVPN_CONFIG}",
        "OPENVPN_USERNAME": "${TRANSMISSION_OVPN_USERNAME}",
        "OPENVPN_PASSWORD": "${TRANSMISSION_OVPN_PASSWORD}",
        "OPENVPN_OPTS": "--inactive 3600 --ping 10 --ping-exit 60 --pull-filter ignore ping",
        "LOCAL_NETWORK": "${TRANSMISSION_OVPN_LOCAL_NETWORK-10.0.0.0/8,172.16.0.0/12,192.168.0.0/16}",
        "TRANSMISSION_WEB_UI": "${TRANSMISSION_WEBUI}",
        "LOG_TO_STDOUT": "true",
        "GLOBAL_APPLY_PERMISSIONS": "false",
        "CREATE_TUN_DEVICE": "${TRANSMISSION_CREATE_TUN_DEVICE-false}",
        "PEER_DNS": "${TRANSMISSION_PEER_DNS-false}",
        "TRANSMISSION_DOWNLOAD_DIR": "/media/torrents/complete",
        "TRANSMISSION_INCOMPLETE_DIR_ENABLED": "true",
        "TRANSMISSION_INCOMPLETE_DIR": "/media/torrents/incomplete",
        "TRANSMISSION_PREALLOCATION": "1",
        "TRANSMISSION_DHT_ENABLED": "${TRANSMISSION_DHT_ENABLED-false}",
        "TRANSMISSION_LPD_ENABLED": "${TRANSMISSION_LPD_ENABLED-false}",
        "TRANSMISSION_PEX_ENABLED": "${TRANSMISSION_PEX_ENABLED-false}",
        "TRANSMISSION_BLOCKLIST_ENABLED": "${TRANSMISSION_BLOCKLIST_ENABLED-true}",
        "TRANSMISSION_BLOCKLIST_URL": "${TRANSMISSION_BLOCKLIST_URL-http://list.iblocklist.com/?list"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/config",
          "containerPath": "/config"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/custom",
          "containerPath": "/etc/openvpn/custom"
        },
        {
          "hostPath": "${ROOT_FOLDER_HOST}/media/torrents",
          "containerPath": "/media/torrents"
        }
      ],
      "sysctls": [
        "net.ipv6.conf.all.disable_ipv6=0"
      ],
      "devices": [
        "/dev/net/tun"
      ],
      "capAdd": [
        "NET_ADMIN"
      ],
      "logging": {
        "driver": "json-file",
        "options": {
          "max-size": "10m"
        }
      }
    }
  ]
} 
```
# Original YAML
```yaml
services:
  transmission-vpn:
    image: haugene/transmission-openvpn:5.3.1
    container_name: transmission-vpn
    cap_add:
    - NET_ADMIN
    devices:
    - /dev/net/tun
    dns:
    - ${DNS_IP}
    environment:
    - PUID=${TRANSMISSION_PUID-1000}
    - PGID=${TRANSMISSION_PGID-1000}
    - TZ=${TZ-Europe/Paris}
    - USER=${TRANSMISSION_USERNAME}
    - PASS=${TRANSMISSION_PASSWORD}
    - OPENVPN_PROVIDER=${TRANSMISSION_OVPN_PROVIDER-NORDVPN}
    - OPENVPN_CONFIG=${TRANSMISSION_OVPN_CONFIG}
    - OPENVPN_USERNAME=${TRANSMISSION_OVPN_USERNAME}
    - OPENVPN_PASSWORD=${TRANSMISSION_OVPN_PASSWORD}
    - OPENVPN_OPTS=--inactive 3600 --ping 10 --ping-exit 60 --pull-filter ignore ping
    - LOCAL_NETWORK=${TRANSMISSION_OVPN_LOCAL_NETWORK-10.0.0.0/8,172.16.0.0/12,192.168.0.0/16}
    - TRANSMISSION_WEB_UI=${TRANSMISSION_WEBUI}
    - LOG_TO_STDOUT=true
    - GLOBAL_APPLY_PERMISSIONS=false
    - CREATE_TUN_DEVICE=${TRANSMISSION_CREATE_TUN_DEVICE-false}
    - PEER_DNS=${TRANSMISSION_PEER_DNS-false}
    - TRANSMISSION_DOWNLOAD_DIR=/media/torrents/complete
    - TRANSMISSION_INCOMPLETE_DIR_ENABLED=true
    - TRANSMISSION_INCOMPLETE_DIR=/media/torrents/incomplete
    - TRANSMISSION_PREALLOCATION=1
    - TRANSMISSION_DHT_ENABLED=${TRANSMISSION_DHT_ENABLED-false}
    - TRANSMISSION_LPD_ENABLED=${TRANSMISSION_LPD_ENABLED-false}
    - TRANSMISSION_PEX_ENABLED=${TRANSMISSION_PEX_ENABLED-false}
    - TRANSMISSION_BLOCKLIST_ENABLED=${TRANSMISSION_BLOCKLIST_ENABLED-true}
    - TRANSMISSION_BLOCKLIST_URL=${TRANSMISSION_BLOCKLIST_URL-http://list.iblocklist.com/?list=bt_level1&fileformat=p2p&archiveformat=gz}
    volumes:
    - ${APP_DATA_DIR}/data/config:/config
    - ${APP_DATA_DIR}/data/custom:/etc/openvpn/custom
    - ${ROOT_FOLDER_HOST}/media/torrents:/media/torrents
    ports:
    - ${APP_PORT}:9091
    restart: unless-stopped
    networks:
    - tipi_main_network
    sysctls:
    - net.ipv6.conf.all.disable_ipv6=0
    logging:
      driver: json-file
      options:
        max-size: 10m
    labels:
      traefik.enable: true
      traefik.http.middlewares.transmission-web-redirect.redirectscheme.scheme: https
      traefik.http.services.transmission.loadbalancer.server.scheme: http
      traefik.http.services.transmission.loadbalancer.server.port: 9091
      traefik.http.routers.transmission-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.transmission-insecure.entrypoints: web
      traefik.http.routers.transmission-insecure.service: transmission
      traefik.http.routers.transmission-insecure.middlewares: transmission-web-redirect
      traefik.http.routers.transmission.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.transmission.entrypoints: websecure
      traefik.http.routers.transmission.service: transmission
      traefik.http.routers.transmission.tls.certresolver: myresolver
      traefik.http.routers.transmission-local-insecure.rule: Host(`transmission.${LOCAL_DOMAIN}`)
      traefik.http.routers.transmission-local-insecure.entrypoints: web
      traefik.http.routers.transmission-local-insecure.service: transmission
      traefik.http.routers.transmission-local-insecure.middlewares: transmission-web-redirect
      traefik.http.routers.transmission-local.rule: Host(`transmission.${LOCAL_DOMAIN}`)
      traefik.http.routers.transmission-local.entrypoints: websecure
      traefik.http.routers.transmission-local.service: transmission
      traefik.http.routers.transmission-local.tls: true
      runtipi.managed: true
 
```
