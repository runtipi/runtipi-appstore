# Checklist
## Dynamic compose for qbittorrent
This is a qbittorrent update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://qbittorrent.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/config:/config
- [ ] ${ROOT_FOLDER_HOST}/media/torrents:/media/torrents
##### Specific instructions :
- [ ] 🌳 Environment
- 🏷 DNS (skipped)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "qbittorrent",
      "image": "lscr.io/linuxserver/qbittorrent:5.0.3",
      "isMain": true,
      "internalPort": "${APP_PORT}",
      "addPorts": [
        {
          "hostPort": 6881,
          "containerPort": 6881,
          "udp": true
        }
      ],
      "environment": {
        "PUID": "1000",
        "PGID": "1000",
        "TZ": "${TZ}",
        "WEBUI_PORT": "${APP_PORT}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/config",
          "containerPath": "/config"
        },
        {
          "hostPath": "${ROOT_FOLDER_HOST}/media/torrents",
          "containerPath": "/media/torrents"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:5.0.3
    container_name: qbittorrent
    dns:
    - ${DNS_IP}
    environment:
    - PUID=1000
    - PGID=1000
    - TZ=${TZ}
    - WEBUI_PORT=${APP_PORT}
    volumes:
    - ${APP_DATA_DIR}/data/config:/config
    - ${ROOT_FOLDER_HOST}/media/torrents:/media/torrents
    ports:
    - ${APP_PORT}:${APP_PORT}
    - 6881:6881
    - 6881:6881/udp
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.qbittorrent-web-redirect.redirectscheme.scheme: https
      traefik.http.services.qbittorrent.loadbalancer.server.port: ${APP_PORT}
      traefik.http.routers.qbittorrent-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.qbittorrent-insecure.entrypoints: web
      traefik.http.routers.qbittorrent-insecure.service: qbittorrent
      traefik.http.routers.qbittorrent-insecure.middlewares: qbittorrent-web-redirect
      traefik.http.routers.qbittorrent.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.qbittorrent.entrypoints: websecure
      traefik.http.routers.qbittorrent.service: qbittorrent
      traefik.http.routers.qbittorrent.tls.certresolver: myresolver
      traefik.http.routers.qbittorrent-local-insecure.rule: Host(`qbittorrent.${LOCAL_DOMAIN}`)
      traefik.http.routers.qbittorrent-local-insecure.entrypoints: web
      traefik.http.routers.qbittorrent-local-insecure.service: qbittorrent
      traefik.http.routers.qbittorrent-local-insecure.middlewares: qbittorrent-web-redirect
      traefik.http.routers.qbittorrent-local.rule: Host(`qbittorrent.${LOCAL_DOMAIN}`)
      traefik.http.routers.qbittorrent-local.entrypoints: websecure
      traefik.http.routers.qbittorrent-local.service: qbittorrent
      traefik.http.routers.qbittorrent-local.tls: true
      runtipi.managed: true
 
```
