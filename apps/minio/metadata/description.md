# Checklist
## Dynamic compose for minio
This is a minio update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://minio.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/minio/data:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] ⌨ Command

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "minio",
      "image": "minio/minio:RELEASE.2025-02-07T23-21-09Z",
      "isMain": true,
      "internalPort": 9001,
      "addPorts": [
        {
          "hostPort": 8000,
          "containerPort": 9000
        }
      ],
      "environment": {
        "MINIO_ROOT_USER": "${MINIO_ROOT_USER}",
        "MINIO_ROOT_PASSWORD": "${MINIO_ROOT_PASSWORD}",
        "MINIO_BROWSER_REDIRECT_URL": "${APP_PROTOCOL:-http}://${APP_DOMAIN}",
        "MINIO_DOMAIN": "${APP_DOMAIN}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/minio/data",
          "containerPath": "/data"
        }
      ],
      "command": "server --console-address :9001 /data"
    }
  ]
} 
```
# Original YAML
```yaml
services:
  minio:
    container_name: minio
    image: minio/minio:RELEASE.2025-02-07T23-21-09Z
    restart: unless-stopped
    environment:
    - MINIO_ROOT_USER=${MINIO_ROOT_USER}
    - MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD}
    - MINIO_BROWSER_REDIRECT_URL=${APP_PROTOCOL:-http}://${APP_DOMAIN}
    - MINIO_DOMAIN=${APP_DOMAIN}
    ports:
    - 8000:9000
    - ${APP_PORT}:9001
    volumes:
    - ${APP_DATA_DIR}/data/minio/data:/data
    networks:
    - tipi_main_network
    command: server --console-address :9001 /data
    labels:
      traefik.enable: true
      traefik.http.middlewares.minio-console-web-redirect.redirectscheme.scheme: https
      traefik.http.services.minio-console.loadbalancer.server.port: 9001
      traefik.http.middlewares.minio-api-web-redirect.redirectscheme.scheme: https
      traefik.http.services.minio-api.loadbalancer.server.port: 9000
      traefik.http.routers.minio-console-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.minio-console-insecure.entrypoints: web
      traefik.http.routers.minio-console-insecure.service: minio-console
      traefik.http.routers.minio-console-insecure.middlewares: minio-console-web-redirect
      traefik.http.routers.minio-api-insecure.rule: Host(`${MINIO_API_URL}`)
      traefik.http.routers.minio-api-insecure.entrypoints: web
      traefik.http.routers.minio-api-insecure.service: minio-api
      traefik.http.routers.minio-api-insecure.middlewares: minio-api-web-redirect
      traefik.http.routers.minio-console.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.minio-console.entrypoints: websecure
      traefik.http.routers.minio-console.service: minio-console
      traefik.http.routers.minio-console.tls.certresolver: myresolver
      traefik.http.routers.minio-api.rule: Host(`${MINIO_API_URL}`)
      traefik.http.routers.minio-api.entrypoints: websecure
      traefik.http.routers.minio-api.service: minio-api
      traefik.http.routers.minio-api.tls.certresolver: myresolver
      traefik.http.routers.minio-console-local-insecure.rule: Host(`minio.${LOCAL_DOMAIN}`)
      traefik.http.routers.minio-console-local-insecure.entrypoints: web
      traefik.http.routers.minio-console-local-insecure.service: minio-console
      traefik.http.routers.minio-console-local-insecure.middlewares: minio-console-web-redirect
      traefik.http.routers.minio-api-local-insecure.rule: Host(`minio-api.${LOCAL_DOMAIN}`)
      traefik.http.routers.minio-api-local-insecure.entrypoints: web
      traefik.http.routers.minio-api-local-insecure.service: minio-api
      traefik.http.routers.minio-api-local-insecure.middlewares: minio-api-web-redirect
      traefik.http.routers.minio-console-local.rule: Host(`minio.${LOCAL_DOMAIN}`)
      traefik.http.routers.minio-console-local.entrypoints: websecure
      traefik.http.routers.minio-console-local.service: minio-console
      traefik.http.routers.minio-console-local.tls: true
      traefik.http.routers.minio-api-local.rule: Host(`minio-api.${LOCAL_DOMAIN}`)
      traefik.http.routers.minio-api-local.entrypoints: websecure
      traefik.http.routers.minio-api-local.service: minio-api
      traefik.http.routers.minio-api-local.tls: true
      runtipi.managed: true
 
```
