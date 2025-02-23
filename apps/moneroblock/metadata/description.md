# Checklist
## Dynamic compose for moneroblock
This is a moneroblock update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://moneroblock.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Specific instructions :
- [ ] ⌨ Command

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "moneroblock",
      "image": "sethsimmons/moneroblock:v0.1.2",
      "isMain": true,
      "internalPort": 31312,
      "command": [
        "--daemon",
        "${DAEMON_ADDRESS:-node.sethforprivacy.com:18089}"
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  moneroblock:
    image: sethsimmons/moneroblock:v0.1.2
    restart: unless-stopped
    container_name: moneroblock
    ports:
    - ${APP_PORT}:31312
    command:
    - --daemon
    - ${DAEMON_ADDRESS:-node.sethforprivacy.com:18089}
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.moneroblock-web-redirect.redirectscheme.scheme: https
      traefik.http.services.moneroblock.loadbalancer.server.port: 31312
      traefik.http.routers.moneroblock-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.moneroblock-insecure.entrypoints: web
      traefik.http.routers.moneroblock-insecure.service: moneroblock
      traefik.http.routers.moneroblock-insecure.middlewares: moneroblock-web-redirect
      traefik.http.routers.moneroblock.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.moneroblock.entrypoints: websecure
      traefik.http.routers.moneroblock.service: moneroblock
      traefik.http.routers.moneroblock.tls.certresolver: myresolver
      traefik.http.routers.moneroblock-local-insecure.rule: Host(`moneroblock.${LOCAL_DOMAIN}`)
      traefik.http.routers.moneroblock-local-insecure.entrypoints: web
      traefik.http.routers.moneroblock-local-insecure.service: moneroblock
      traefik.http.routers.moneroblock-local-insecure.middlewares: moneroblock-web-redirect
      traefik.http.routers.moneroblock-local.rule: Host(`moneroblock.${LOCAL_DOMAIN}`)
      traefik.http.routers.moneroblock-local.entrypoints: websecure
      traefik.http.routers.moneroblock-local.service: moneroblock
      traefik.http.routers.moneroblock-local.tls: true
      runtipi.managed: true
 
```
