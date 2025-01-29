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
      "image": "minio/minio:RELEASE.2024-02-24T17-11-14Z",
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
        "MINIO_DOMAIN": "Host(`${APP_DOMAIN}`)"
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
version: '3.9'
services:
  minio:
    container_name: minio
    image: minio/minio:RELEASE.2024-02-24T17-11-14Z
    environment:
    - MINIO_ROOT_USER=${MINIO_ROOT_USER}
    - MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD}
    - MINIO_BROWSER_REDIRECT_URL=${APP_PROTOCOL:-http}://${APP_DOMAIN}
    - MINIO_DOMAIN=Host(`${APP_DOMAIN}`)
    ports:
    - 8000:9000
    - ${APP_PORT}:9001
    restart: unless-stopped
    volumes:
    - ${APP_DATA_DIR}/data/minio/data:/data
    networks:
    - tipi_main_network
    command: server --console-address :9001 /data
    labels:
      traefik.enable: ${APP_EXPOSED}
      traefik.http.routers.minio-console.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.minio-console.entrypoints: websecure
      traefik.http.routers.minio-console.service: minio-console
      traefik.http.routers.minio-console.tls.certresolver: myresolver
      traefik.http.services.minio-console.loadbalancer.server.port: 9001
      traefik.http.routers.minio.rule: Host(`${MINIO_API_URL}`)
      traefik.http.routers.minio.entrypoints: websecure
      traefik.http.routers.minio.service: minio
      traefik.http.routers.minio.tls.certresolver: myresolver
      traefik.http.services.minio.loadbalancer.server.port: 9000
      runtipi.managed: true
 
```
