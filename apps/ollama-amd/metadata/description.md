# Checklist
## Dynamic compose for ollama-amd
This is a ollama-amd update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://ollama-amd.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/.ollama:/root/.ollama
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 📱 Devices

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "ollama-amd",
      "image": "ollama/ollama:0.5.7-rocm",
      "isMain": true,
      "internalPort": 11434,
      "environment": {
        "PORT": "11434"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/.ollama",
          "containerPath": "/root/.ollama"
        }
      ],
      "devices": [
        "/dev/kfd",
        "/dev/dri"
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  ollama-amd:
    image: ollama/ollama:0.5.7-rocm
    restart: unless-stopped
    container_name: ollama-amd
    environment:
    - PORT=11434
    ports:
    - ${APP_PORT}:11434
    networks:
    - tipi_main_network
    volumes:
    - ${APP_DATA_DIR}/data/.ollama:/root/.ollama
    devices:
    - /dev/kfd
    - /dev/dri
    labels:
      traefik.enable: true
      traefik.http.middlewares.ollama-amd-web-redirect.redirectscheme.scheme: https
      traefik.http.services.ollama-amd.loadbalancer.server.port: 11434
      traefik.http.routers.ollama-amd-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.ollama-amd-insecure.entrypoints: web
      traefik.http.routers.ollama-amd-insecure.service: ollama-amd
      traefik.http.routers.ollama-amd-insecure.middlewares: ollama-amd-web-redirect
      traefik.http.routers.ollama-amd.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.ollama-amd.entrypoints: websecure
      traefik.http.routers.ollama-amd.service: ollama-amd
      traefik.http.routers.ollama-amd.tls.certresolver: myresolver
      traefik.http.routers.ollama-amd-local-insecure.rule: Host(`ollama-amd.${LOCAL_DOMAIN}`)
      traefik.http.routers.ollama-amd-local-insecure.entrypoints: web
      traefik.http.routers.ollama-amd-local-insecure.service: ollama-amd
      traefik.http.routers.ollama-amd-local-insecure.middlewares: ollama-amd-web-redirect
      traefik.http.routers.ollama-amd-local.rule: Host(`ollama-amd.${LOCAL_DOMAIN}`)
      traefik.http.routers.ollama-amd-local.entrypoints: websecure
      traefik.http.routers.ollama-amd-local.service: ollama-amd
      traefik.http.routers.ollama-amd-local.tls: true
      runtipi.managed: true
 
```
