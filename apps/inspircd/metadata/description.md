# Checklist
## Dynamic compose for inspircd
This is a inspircd update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://inspircd.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data:/inspircd/conf

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "inspircd",
      "image": "inspircd/inspircd-docker:3.18.0",
      "isMain": true,
      "internalPort": 6697,
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data",
          "containerPath": "/inspircd/conf"
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
  inspircd:
    container_name: inspircd
    image: inspircd/inspircd-docker:3.18.0
    restart: unless-stopped
    volumes:
    - ${APP_DATA_DIR}/data:/inspircd/conf
    ports:
    - ${APP_PORT}:6697
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.inspircd-web-redirect.redirectscheme.scheme: https
      traefik.http.services.inspircd.loadbalancer.server.port: 6697
      traefik.http.routers.inspircd-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.inspircd-insecure.entrypoints: web
      traefik.http.routers.inspircd-insecure.service: inspircd
      traefik.http.routers.inspircd-insecure.middlewares: inspircd-web-redirect
      traefik.http.routers.inspircd.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.inspircd.entrypoints: websecure
      traefik.http.routers.inspircd.service: inspircd
      traefik.http.routers.inspircd.tls.certresolver: myresolver
      traefik.http.routers.inspircd-local-insecure.rule: Host(`inspircd.${LOCAL_DOMAIN}`)
      traefik.http.routers.inspircd-local-insecure.entrypoints: web
      traefik.http.routers.inspircd-local-insecure.service: inspircd
      traefik.http.routers.inspircd-local-insecure.middlewares: inspircd-web-redirect
      traefik.http.routers.inspircd-local.rule: Host(`inspircd.${LOCAL_DOMAIN}`)
      traefik.http.routers.inspircd-local.entrypoints: websecure
      traefik.http.routers.inspircd-local.service: inspircd
      traefik.http.routers.inspircd-local.tls: true
      runtipi.managed: true
 
```
