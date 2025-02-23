# Checklist
## Dynamic compose for monerod
This is a monerod update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://monerod.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data:/home/monero/.bitmonero
##### Specific instructions :
- [ ] ⌨ Command
- 🏷 DNS (skipped)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "monerod",
      "image": "sethsimmons/simple-monerod:v0.18.3.4",
      "isMain": true,
      "internalPort": 18080,
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data",
          "containerPath": "/home/monero/.bitmonero"
        }
      ],
      "command": "--rpc-restricted-bind-ip=0.0.0.0 --rpc-restricted-bind-port=18089 --public-node --no-igd --enable-dns-blocklist --prune-blockchain --zmq-pub=tcp://0.0.0.0:18083"
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  monerod:
    image: sethsimmons/simple-monerod:v0.18.3.4
    dns:
    - ${DNS_IP}
    ports:
    - ${APP_PORT}:18080
    restart: unless-stopped
    networks:
    - tipi_main_network
    container_name: monerod
    volumes:
    - ${APP_DATA_DIR}/data:/home/monero/.bitmonero
    command: --rpc-restricted-bind-ip=0.0.0.0 --rpc-restricted-bind-port=18089 --public-node
      --no-igd --enable-dns-blocklist --prune-blockchain --zmq-pub=tcp://0.0.0.0:18083
    labels:
      traefik.enable: true
      traefik.http.middlewares.monerod-web-redirect.redirectscheme.scheme: https
      traefik.http.services.monerod.loadbalancer.server.port: 18089
      traefik.http.routers.monerod-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.monerod-insecure.entrypoints: web
      traefik.http.routers.monerod-insecure.service: monerod
      traefik.http.routers.monerod-insecure.middlewares: monerod-web-redirect
      traefik.http.routers.monerod.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.monerod.entrypoints: websecure
      traefik.http.routers.monerod.service: monerod
      traefik.http.routers.monerod.tls.certresolver: myresolver
      traefik.http.routers.monerod-local-insecure.rule: Host(`monerod.${LOCAL_DOMAIN}`)
      traefik.http.routers.monerod-local-insecure.entrypoints: web
      traefik.http.routers.monerod-local-insecure.service: monerod
      traefik.http.routers.monerod-local-insecure.middlewares: monerod-web-redirect
      traefik.http.routers.monerod-local.rule: Host(`monerod.${LOCAL_DOMAIN}`)
      traefik.http.routers.monerod-local.entrypoints: websecure
      traefik.http.routers.monerod-local.service: monerod
      traefik.http.routers.monerod-local.tls: true
      runtipi.managed: true
 
```
