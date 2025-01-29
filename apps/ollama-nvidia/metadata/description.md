# Checklist
## Dynamic compose for ollama-nvidia
This is a ollama-nvidia update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://ollama-nvidia.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/.ollama:/root/.ollama
##### Specific instructions :
- [ ] 🪂 Deploy

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "ollama-nvidia",
      "image": "ollama/ollama:0.5.7",
      "isMain": true,
      "internalPort": 11434,
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/.ollama",
          "containerPath": "/root/.ollama"
        }
      ],
      "deploy": {
        "resources": {
          "reservations": {
            "devices": [
              {
                "driver": "nvidia",
                "count": "all",
                "capabilities": [
                  "gpu"
                ]
              }
            ]
          }
        }
      }
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  ollama-nvidia:
    image: ollama/ollama:0.5.7
    restart: unless-stopped
    container_name: ollama-nvidia
    ports:
    - ${APP_PORT}:11434
    networks:
    - tipi_main_network
    deploy:
      resources:
        reservations:
          devices:
          - driver: nvidia
            count: all
            capabilities:
            - gpu
    volumes:
    - ${APP_DATA_DIR}/data/.ollama:/root/.ollama
    labels:
      traefik.enable: true
      traefik.http.middlewares.ollama-nvidia-web-redirect.redirectscheme.scheme: https
      traefik.http.services.ollama-nvidia.loadbalancer.server.port: 11434
      traefik.http.routers.ollama-nvidia-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.ollama-nvidia-insecure.entrypoints: web
      traefik.http.routers.ollama-nvidia-insecure.service: ollama-nvidia
      traefik.http.routers.ollama-nvidia-insecure.middlewares: ollama-nvidia-web-redirect
      traefik.http.routers.ollama-nvidia.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.ollama-nvidia.entrypoints: websecure
      traefik.http.routers.ollama-nvidia.service: ollama-nvidia
      traefik.http.routers.ollama-nvidia.tls.certresolver: myresolver
      traefik.http.routers.ollama-nvidia-local-insecure.rule: Host(`ollama-nvidia.${LOCAL_DOMAIN}`)
      traefik.http.routers.ollama-nvidia-local-insecure.entrypoints: web
      traefik.http.routers.ollama-nvidia-local-insecure.service: ollama-nvidia
      traefik.http.routers.ollama-nvidia-local-insecure.middlewares: ollama-nvidia-web-redirect
      traefik.http.routers.ollama-nvidia-local.rule: Host(`ollama-nvidia.${LOCAL_DOMAIN}`)
      traefik.http.routers.ollama-nvidia-local.entrypoints: websecure
      traefik.http.routers.ollama-nvidia-local.service: ollama-nvidia
      traefik.http.routers.ollama-nvidia-local.tls: true
      runtipi.managed: true
 
```
