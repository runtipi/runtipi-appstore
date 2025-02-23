# Checklist
## Dynamic compose for sabnzbd
This is a sabnzbd update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://sabnzbd.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/config:/config
- [ ] ${ROOT_FOLDER_HOST}/media/usenet:/media/usenet
##### Specific instructions :
- [ ] 🌳 Environment

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "sabnzbd",
      "image": "lscr.io/linuxserver/sabnzbd:4.4.1",
      "isMain": true,
      "internalPort": 8080,
      "environment": {
        "PUID": "1000",
        "PGID": "1000",
        "TZ": "${TZ}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/config",
          "containerPath": "/config"
        },
        {
          "hostPath": "${ROOT_FOLDER_HOST}/media/usenet",
          "containerPath": "/media/usenet"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3'
services:
  sabnzbd:
    image: lscr.io/linuxserver/sabnzbd:4.4.1
    container_name: sabnzbd
    ports:
    - ${APP_PORT}:8080
    volumes:
    - ${APP_DATA_DIR}/data/config:/config
    - ${ROOT_FOLDER_HOST}/media/usenet:/media/usenet
    environment:
    - PUID=1000
    - PGID=1000
    - TZ=${TZ}
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.sabnzbd-web-redirect.redirectscheme.scheme: https
      traefik.http.services.sabnzbd.loadbalancer.server.port: 8080
      traefik.http.routers.sabnzbd-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.sabnzbd-insecure.entrypoints: web
      traefik.http.routers.sabnzbd-insecure.service: sabnzbd
      traefik.http.routers.sabnzbd-insecure.middlewares: sabnzbd-web-redirect
      traefik.http.routers.sabnzbd.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.sabnzbd.entrypoints: websecure
      traefik.http.routers.sabnzbd.service: sabnzbd
      traefik.http.routers.sabnzbd.tls.certresolver: myresolver
      traefik.http.routers.sabnzbd-local-insecure.rule: Host(`sabnzbd.${LOCAL_DOMAIN}`)
      traefik.http.routers.sabnzbd-local-insecure.entrypoints: web
      traefik.http.routers.sabnzbd-local-insecure.service: sabnzbd
      traefik.http.routers.sabnzbd-local-insecure.middlewares: sabnzbd-web-redirect
      traefik.http.routers.sabnzbd-local.rule: Host(`sabnzbd.${LOCAL_DOMAIN}`)
      traefik.http.routers.sabnzbd-local.entrypoints: websecure
      traefik.http.routers.sabnzbd-local.service: sabnzbd
      traefik.http.routers.sabnzbd-local.tls: true
      runtipi.managed: true
 
```
