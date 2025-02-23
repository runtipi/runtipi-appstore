# Checklist
## Dynamic compose for simplex-smp
This is a simplex-smp update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://simplex-smp.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/simplex/logs:/var/opt/simplex:z
- [ ] ${APP_DATA_DIR}/data/simplex/config:/etc/opt/simplex:z
##### Specific instructions :
- [ ] 🌳 Environment

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "simplex-smp",
      "image": "simplexchat/smp-server:v6.2.1",
      "isMain": true,
      "internalPort": 5223,
      "environment": {
        "PASS": "${SIMPLEX_SMP_PASSWORD}",
        "ADDR": "${APP_DOMAIN}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/simplex/logs",
          "containerPath": "/var/opt/simplex"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/simplex/config",
          "containerPath": "/etc/opt/simplex"
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
  simplex-smp:
    image: simplexchat/smp-server:v6.2.1
    container_name: simplex-smp
    volumes:
    - ${APP_DATA_DIR}/data/simplex/logs:/var/opt/simplex:z
    - ${APP_DATA_DIR}/data/simplex/config:/etc/opt/simplex:z
    ports:
    - ${APP_PORT}:5223
    environment:
    - PASS=${SIMPLEX_SMP_PASSWORD}
    - ADDR=${APP_DOMAIN}
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.simplex-smp-web-redirect.redirectscheme.scheme: https
      traefik.http.services.simplex-smp.loadbalancer.server.port: 5223
      traefik.http.routers.simplex-smp-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.simplex-smp-insecure.entrypoints: web
      traefik.http.routers.simplex-smp-insecure.service: simplex-smp
      traefik.http.routers.simplex-smp-insecure.middlewares: simplex-smp-web-redirect
      traefik.http.routers.simplex-smp.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.simplex-smp.entrypoints: websecure
      traefik.http.routers.simplex-smp.service: simplex-smp
      traefik.http.routers.simplex-smp.tls.certresolver: myresolver
      traefik.http.routers.simplex-smp-local-insecure.rule: Host(`simplex-smp.${LOCAL_DOMAIN}`)
      traefik.http.routers.simplex-smp-local-insecure.entrypoints: web
      traefik.http.routers.simplex-smp-local-insecure.service: simplex-smp
      traefik.http.routers.simplex-smp-local-insecure.middlewares: simplex-smp-web-redirect
      traefik.http.routers.simplex-smp-local.rule: Host(`simplex-smp.${LOCAL_DOMAIN}`)
      traefik.http.routers.simplex-smp-local.entrypoints: websecure
      traefik.http.routers.simplex-smp-local.service: simplex-smp
      traefik.http.routers.simplex-smp-local.tls: true
      runtipi.managed: true
 
```
