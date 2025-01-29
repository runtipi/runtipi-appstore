# Checklist
## Dynamic compose for netbootxyz
This is a netbootxyz update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://netbootxyz.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/config:/config
- [ ] ${APP_DATA_DIR}/data/assets:/assets

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "netbootxyz",
      "image": "netbootxyz/netbootxyz:0.7.3-nbxyz3",
      "isMain": true,
      "internalPort": 3000,
      "addPorts": [
        {
          "hostPort": 69,
          "containerPort": 69,
          "udp": true
        }
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/config",
          "containerPath": "/config"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/assets",
          "containerPath": "/assets"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.9'
services:
  netbootxyz:
    image: netbootxyz/netbootxyz:0.7.3-nbxyz3
    container_name: netbootxyz
    volumes:
    - ${APP_DATA_DIR}/data/config:/config
    - ${APP_DATA_DIR}/data/assets:/assets
    ports:
    - ${APP_PORT}:3000
    - 69:69/udp
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.netbootxyz-web-redirect.redirectscheme.scheme: https
      traefik.http.services.netbootxyz.loadbalancer.server.port: 3000
      traefik.http.routers.netbootxyz-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.netbootxyz-insecure.entrypoints: web
      traefik.http.routers.netbootxyz-insecure.service: netbootxyz
      traefik.http.routers.netbootxyz-insecure.middlewares: netbootxyz-web-redirect
      traefik.http.routers.netbootxyz.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.netbootxyz.entrypoints: websecure
      traefik.http.routers.netbootxyz.service: netbootxyz
      traefik.http.routers.netbootxyz.tls.certresolver: myresolver
      traefik.http.routers.netbootxyz-local-insecure.rule: Host(`netbootxyz.${LOCAL_DOMAIN}`)
      traefik.http.routers.netbootxyz-local-insecure.entrypoints: web
      traefik.http.routers.netbootxyz-local-insecure.service: netbootxyz
      traefik.http.routers.netbootxyz-local-insecure.middlewares: netbootxyz-web-redirect
      traefik.http.routers.netbootxyz-local.rule: Host(`netbootxyz.${LOCAL_DOMAIN}`)
      traefik.http.routers.netbootxyz-local.entrypoints: websecure
      traefik.http.routers.netbootxyz-local.service: netbootxyz
      traefik.http.routers.netbootxyz-local.tls: true
      runtipi.managed: true
 
```
