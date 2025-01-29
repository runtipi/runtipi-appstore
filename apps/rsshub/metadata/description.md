# Checklist
## Dynamic compose for rsshub
This is a rsshub update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://rsshub.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/redis:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on
- [ ] 🧱 Ulimits

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "rsshub",
      "image": "diygod/rsshub:2024-04-17",
      "isMain": true,
      "internalPort": 1200,
      "environment": {
        "TZ": "${TZ}"
      },
      "dependsOn": [
        "redis",
        "browserless"
      ]
    },
    {
      "name": "browserless",
      "image": "browserless/chrome",
      "ulimits": {
        "core": {
          "soft": 0,
          "hard": 0
        }
      }
    },
    {
      "name": "redis",
      "image": "redis:alpine",
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/redis",
          "containerPath": "/data"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
services:
  rsshub:
    image: diygod/rsshub:2024-04-17
    container_name: rsshub
    restart: unless-stopped
    ports:
    - ${APP_PORT}:1200
    environment:
      TZ: ${TZ}
    env_file:
    - ${APP_DATA_DIR}/data/app.env
    networks:
    - tipi_main_network
    depends_on:
    - redis
    - browserless
    labels:
      traefik.enable: true
      traefik.http.middlewares.rsshub-web-redirect.redirectscheme.scheme: https
      traefik.http.services.rsshub.loadbalancer.server.port: 1200
      traefik.http.routers.rsshub-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.rsshub-insecure.entrypoints: web
      traefik.http.routers.rsshub-insecure.service: rsshub
      traefik.http.routers.rsshub-insecure.middlewares: rsshub-web-redirect
      traefik.http.routers.rsshub.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.rsshub.entrypoints: websecure
      traefik.http.routers.rsshub.service: rsshub
      traefik.http.routers.rsshub.tls.certresolver: myresolver
      traefik.http.routers.rsshub-local-insecure.rule: Host(`rsshub.${LOCAL_DOMAIN}`)
      traefik.http.routers.rsshub-local-insecure.entrypoints: web
      traefik.http.routers.rsshub-local-insecure.service: rsshub
      traefik.http.routers.rsshub-local-insecure.middlewares: rsshub-web-redirect
      traefik.http.routers.rsshub-local.rule: Host(`rsshub.${LOCAL_DOMAIN}`)
      traefik.http.routers.rsshub-local.entrypoints: websecure
      traefik.http.routers.rsshub-local.service: rsshub
      traefik.http.routers.rsshub-local.tls: true
      runtipi.managed: true
  browserless:
    image: browserless/chrome
    container_name: rsshub_browserless
    restart: unless-stopped
    ulimits:
      core:
        hard: 0
        soft: 0
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  redis:
    image: redis:alpine
    container_name: rsshub_redis
    restart: unless-stopped
    volumes:
    - ${APP_DATA_DIR}/data/redis:/data
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
 
```
