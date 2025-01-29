# Checklist
## Dynamic compose for smallweb
This is a smallweb update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://smallweb.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/:/smallweb
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 👤 User (0:0)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "smallweb",
      "image": "ghcr.io/pomdtr/smallweb:0.20.1",
      "isMain": true,
      "internalPort": 7777,
      "user": "0:0",
      "environment": {
        "SMALLWEB_DOMAIN": "${SMALLWEB_DOMAIN}",
        "SMALLWEB_CUSTOM_DOMAINS": "smallweb.${LOCAL_DOMAIN}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/",
          "containerPath": "/smallweb"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
services:
  smallweb:
    container_name: smallweb
    image: ghcr.io/pomdtr/smallweb:0.20.1
    restart: unless-stopped
    user: 0:0
    ports:
    - ${APP_PORT}:7777
    environment:
    - SMALLWEB_DOMAIN=${SMALLWEB_DOMAIN}
    - SMALLWEB_CUSTOM_DOMAINS=smallweb.${LOCAL_DOMAIN}=*;${APP_DOMAIN}=*;
    volumes:
    - ${APP_DATA_DIR}/data/:/smallweb
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.smallweb-web-redirect.redirectscheme.scheme: https
      traefik.http.services.smallweb.loadbalancer.server.port: 7777
      traefik.http.routers.smallweb-insecure.rule: Host(`${APP_DOMAIN}`) || HostRegexp(`.+\.${APP_DOMAIN}`)
      traefik.http.routers.smallweb-insecure.entrypoints: web
      traefik.http.routers.smallweb-insecure.service: smallweb
      traefik.http.routers.smallweb-insecure.middlewares: smallweb-web-redirect
      traefik.http.routers.smallweb.rule: Host(`${APP_DOMAIN}`) || HostRegexp(`.+\.${APP_DOMAIN}`)
      traefik.http.routers.smallweb.entrypoints: websecure
      traefik.http.routers.smallweb.service: smallweb
      traefik.http.routers.smallweb.tls.certresolver: myresolver
      traefik.http.routers.smallweb.tls.domains[0].main: ${APP_DOMAIN}
      traefik.http.routers.smallweb.tls.domains[0].sans: '*.${APP_DOMAIN}'
      traefik.http.routers.smallweb-local-insecure.rule: Host(`smallweb.${LOCAL_DOMAIN}`)
        || HostRegexp(`.+\.smallweb\.${LOCAL_DOMAIN}`)
      traefik.http.routers.smallweb-local-insecure.entrypoints: web
      traefik.http.routers.smallweb-local-insecure.service: smallweb
      traefik.http.routers.smallweb-local-insecure.middlewares: smallweb-web-redirect
      traefik.http.routers.smallweb-local.rule: Host(`smallweb.${LOCAL_DOMAIN}`) ||
        HostRegexp(`.+\.smallweb\.${LOCAL_DOMAIN}`)
      traefik.http.routers.smallweb-local.entrypoints: websecure
      traefik.http.routers.smallweb-local.service: smallweb
      traefik.http.routers.smallweb-local.tls: true
      runtipi.managed: true
 
```
