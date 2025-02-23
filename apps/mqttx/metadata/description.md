# Checklist
## Dynamic compose for mqttx
This is a mqttx update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://mqttx.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/mqttx:/app/data
- [ ] /etc/localtime:/etc/localtime:ro

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "mqttx",
      "image": "emqx/mqttx-web:v1.11.1",
      "isMain": true,
      "internalPort": 80,
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/mqttx",
          "containerPath": "/app/data"
        },
        {
          "hostPath": "/etc/localtime",
          "containerPath": "/etc/localtime",
          "readOnly": true
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
services:
  mqttx:
    image: emqx/mqttx-web:v1.11.1
    container_name: mqttx
    restart: unless-stopped
    volumes:
    - ${APP_DATA_DIR}/data/mqttx:/app/data
    - /etc/localtime:/etc/localtime:ro
    ports:
    - ${APP_PORT}:80
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.mqttx-web-redirect.redirectscheme.scheme: https
      traefik.http.services.mqttx.loadbalancer.server.port: 80
      traefik.http.routers.mqttx-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.mqttx-insecure.entrypoints: web
      traefik.http.routers.mqttx-insecure.service: mqttx
      traefik.http.routers.mqttx-insecure.middlewares: mqttx-web-redirect
      traefik.http.routers.mqttx.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.mqttx.entrypoints: websecure
      traefik.http.routers.mqttx.service: mqttx
      traefik.http.routers.mqttx.tls.certresolver: myresolver
      traefik.http.routers.mqttx-local-insecure.rule: Host(`mqttx.${LOCAL_DOMAIN}`)
      traefik.http.routers.mqttx-local-insecure.entrypoints: web
      traefik.http.routers.mqttx-local-insecure.service: mqttx
      traefik.http.routers.mqttx-local-insecure.middlewares: mqttx-web-redirect
      traefik.http.routers.mqttx-local.rule: Host(`mqttx.${LOCAL_DOMAIN}`)
      traefik.http.routers.mqttx-local.entrypoints: websecure
      traefik.http.routers.mqttx-local.service: mqttx
      traefik.http.routers.mqttx-local.tls: true
      runtipi.managed: true
 
```
