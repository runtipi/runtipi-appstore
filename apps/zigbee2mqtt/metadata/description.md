# Checklist
## Dynamic compose for zigbee2mqtt
This is a zigbee2mqtt update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://zigbee2mqtt.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/:/app/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🙉 Expose
- [ ] 📱 Devices

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "zigbee2mqtt",
      "image": "koenkk/zigbee2mqtt:2.0.0",
      "isMain": true,
      "internalPort": 8080,
      "expose": [
        8080
      ],
      "environment": {
        "TZ": "${TZ}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/",
          "containerPath": "/app/data"
        }
      ],
      "devices": [
        "${Z2M_DEVICE}:/dev/ttyACM0"
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  zigbee2mqtt:
    container_name: zigbee2mqtt
    image: koenkk/zigbee2mqtt:2.0.0
    environment:
    - TZ=${TZ}
    volumes:
    - ${APP_DATA_DIR}/data/:/app/data
    devices:
    - ${Z2M_DEVICE}:/dev/ttyACM0
    ports:
    - ${APP_PORT}:8080
    expose:
    - 8080
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.zigbee2mqtt-web-redirect.redirectscheme.scheme: https
      traefik.http.services.zigbee2mqtt.loadbalancer.server.port: 8080
      traefik.http.routers.zigbee2mqtt-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.zigbee2mqtt-insecure.entrypoints: web
      traefik.http.routers.zigbee2mqtt-insecure.service: zigbee2mqtt-web
      traefik.http.routers.zigbee2mqtt-insecure.middlewares: zigbee2mqtt-web-redirect
      traefik.http.routers.zigbee2mqtt.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.zigbee2mqtt.entrypoints: websecure
      traefik.http.routers.zigbee2mqtt.service: zigbee2mqtt-web
      traefik.http.routers.zigbee2mqtt.tls.certresolver: myresolver
      traefik.http.routers.zigbee2mqtt-local-insecure.rule: Host(`zigbee2mqtt.${LOCAL_DOMAIN}`)
      traefik.http.routers.zigbee2mqtt-local-insecure.entrypoints: web
      traefik.http.routers.zigbee2mqtt-local-insecure.service: zigbee2mqtt-web
      traefik.http.routers.zigbee2mqtt-local-insecure.middlewares: zigbee2mqtt-web-redirect
      traefik.http.routers.zigbee2mqtt-local.rule: Host(`zigbee2mqtt.${LOCAL_DOMAIN}`)
      traefik.http.routers.zigbee2mqtt-local.entrypoints: websecure
      traefik.http.routers.zigbee2mqtt-local.service: zigbee2mqtt-web
      traefik.http.routers.zigbee2mqtt-local.tls: true
      runtipi.managed: true
 
```
