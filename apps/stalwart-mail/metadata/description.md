# Checklist
## Dynamic compose for stalwart-mail
This is a stalwart-mail update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://stalwart-mail.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data:/opt/stalwart-mail

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "stalwart-mail",
      "image": "stalwartlabs/mail-server:v0.11.3",
      "isMain": true,
      "internalPort": 8080,
      "addPorts": [
        {
          "hostPort": 25,
          "containerPort": 25,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        },
        {
          "hostPort": 143,
          "containerPort": 143,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        },
        {
          "hostPort": 465,
          "containerPort": 465,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        },
        {
          "hostPort": 587,
          "containerPort": 587,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        },
        {
          "hostPort": 993,
          "containerPort": 993,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        },
        {
          "hostPort": 4190,
          "containerPort": 4190,
          "interface": "${NETWORK_INTERFACE:-0.0.0.0}",
          "tcp": true
        }
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data",
          "containerPath": "/opt/stalwart-mail"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  stalwart-mail:
    image: stalwartlabs/mail-server:v0.11.3
    container_name: stalwart-mail
    volumes:
    - ${APP_DATA_DIR}/data:/opt/stalwart-mail
    restart: unless-stopped
    networks:
    - tipi_main_network
    ports:
    - ${NETWORK_INTERFACE:-0.0.0.0}:25:25/tcp
    - ${NETWORK_INTERFACE:-0.0.0.0}:143:143/tcp
    - ${NETWORK_INTERFACE:-0.0.0.0}:465:465/tcp
    - ${NETWORK_INTERFACE:-0.0.0.0}:587:587/tcp
    - ${NETWORK_INTERFACE:-0.0.0.0}:993:993/tcp
    - ${NETWORK_INTERFACE:-0.0.0.0}:4190:4190/tcp
    - ${APP_PORT}:8080
    labels:
      traefik.enable: true
      traefik.http.middlewares.stalwart-mail-web-redirect.redirectscheme.scheme: https
      traefik.http.services.stalwart-mail.loadbalancer.server.port: 8080
      traefik.http.routers.stalwart-mail-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.stalwart-mail-insecure.entrypoints: web
      traefik.http.routers.stalwart-mail-insecure.service: stalwart-mail
      traefik.http.routers.stalwart-mail-insecure.middlewares: stalwart-mail-web-redirect
      traefik.http.routers.stalwart-mail.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.stalwart-mail.entrypoints: websecure
      traefik.http.routers.stalwart-mail.service: stalwart-mail
      traefik.http.routers.stalwart-mail.tls.certresolver: myresolver
      traefik.http.routers.stalwart-mail-local-insecure.rule: Host(`stalwart-mail.${LOCAL_DOMAIN}`)
      traefik.http.routers.stalwart-mail-local-insecure.entrypoints: web
      traefik.http.routers.stalwart-mail-local-insecure.service: stalwart-mail
      traefik.http.routers.stalwart-mail-local-insecure.middlewares: stalwart-mail-web-redirect
      traefik.http.routers.stalwart-mail-local.rule: Host(`stalwart-mail.${LOCAL_DOMAIN}`)
      traefik.http.routers.stalwart-mail-local.entrypoints: websecure
      traefik.http.routers.stalwart-mail-local.service: stalwart-mail
      traefik.http.routers.stalwart-mail-local.tls: true
      runtipi.managed: true
 
```
