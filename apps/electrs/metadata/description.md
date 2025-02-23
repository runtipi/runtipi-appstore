# Checklist
## Dynamic compose for electrs
This is a electrs update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://electrs.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
- [ ] ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
- [ ] ${APP_DATA_DIR}/data:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 👤 User (0:0)
- [ ] 👼 Stop grace period

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "electrs-ui",
      "image": "ghcr.io/montejojorge/electrs-ui:v0.9.2",
      "internalPort": 3006,
      "environment": {
        "BITCOIND_DIR": "/data/.bitcoin",
        "ELECTRUM_LOCAL_DOMAIN": "runtipi.home",
        "ELECTRUM_IP_ADDRESS": "${INTERNAL_IP}",
        "ELECTRS_HOST": "electrs",
        "BITCOIND_HOST": "${BITCOIND_HOST:-bitcoind}"
      },
      "volumes": [
        {
          "hostPath": "${BITCOIND_DIR",
          "containerPath": "-${APP_DATA_DIR}/../bitcoind/data}"
        }
      ]
    },
    {
      "name": "electrs",
      "image": "getumbrel/electrs:v0.10.6",
      "isMain": true,
      "addPorts": [
        {
          "hostPort": 50001,
          "containerPort": 50001
        }
      ],
      "user": "0:0",
      "environment": {
        "ELECTRS_COOKIE_FILE": "/data/.bitcoin/.cookie",
        "ELECTRS_DB_DIR": "/data/db",
        "ELECTRS_ELECTRUM_RPC_ADDR": "0.0.0.0:50001",
        "ELECTRS_LOG_FILTERS": "INFO",
        "ELECTRS_DAEMON_RPC_ADDR": "${BITCOIND_HOST:-bitcoind}:8332",
        "ELECTRS_DAEMON_P2P_ADDR": "${BITCOIND_HOST:-bitcoind}:8333"
      },
      "volumes": [
        {
          "hostPath": "${BITCOIND_DIR",
          "containerPath": "-${APP_DATA_DIR}/../bitcoind/data}"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data",
          "containerPath": "/data"
        }
      ],
      "stopGracePeriod": "15m"
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.9'
services:
  electrs-ui:
    container_name: electrs-ui
    image: ghcr.io/montejojorge/electrs-ui:v0.9.2
    restart: unless-stopped
    volumes:
    - ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
    environment:
      BITCOIND_DIR: /data/.bitcoin
      ELECTRUM_LOCAL_DOMAIN: runtipi.home
      ELECTRUM_IP_ADDRESS: ${INTERNAL_IP}
      ELECTRS_HOST: electrs
      BITCOIND_HOST: ${BITCOIND_HOST:-bitcoind}
    ports:
    - ${APP_PORT}:3006
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.electrs-web-redirect.redirectscheme.scheme: https
      traefik.http.services.electrs.loadbalancer.server.port: 3006
      traefik.http.routers.electrs-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.electrs-insecure.entrypoints: web
      traefik.http.routers.electrs-insecure.service: electrs
      traefik.http.routers.electrs-insecure.middlewares: electrs-web-redirect
      traefik.http.routers.electrs.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.electrs.entrypoints: websecure
      traefik.http.routers.electrs.service: electrs
      traefik.http.routers.electrs.tls.certresolver: myresolver
      traefik.http.routers.electrs-local-insecure.rule: Host(`electrs.${LOCAL_DOMAIN}`)
      traefik.http.routers.electrs-local-insecure.entrypoints: web
      traefik.http.routers.electrs-local-insecure.service: electrs
      traefik.http.routers.electrs-local-insecure.middlewares: electrs-web-redirect
      traefik.http.routers.electrs-local.rule: Host(`electrs.${LOCAL_DOMAIN}`)
      traefik.http.routers.electrs-local.entrypoints: websecure
      traefik.http.routers.electrs-local.service: electrs
      traefik.http.routers.electrs-local.tls: true
      runtipi.managed: true
  electrs:
    container_name: electrs
    image: getumbrel/electrs:v0.10.6
    restart: unless-stopped
    stop_grace_period: 15m
    user: 0:0
    volumes:
    - ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
    - ${APP_DATA_DIR}/data:/data
    ports:
    - 50001:50001
    environment:
    - ELECTRS_COOKIE_FILE=/data/.bitcoin/.cookie
    - ELECTRS_DB_DIR=/data/db
    - ELECTRS_ELECTRUM_RPC_ADDR=0.0.0.0:50001
    - ELECTRS_LOG_FILTERS=INFO
    - ELECTRS_DAEMON_RPC_ADDR=${BITCOIND_HOST:-bitcoind}:8332
    - ELECTRS_DAEMON_P2P_ADDR=${BITCOIND_HOST:-bitcoind}:8333
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
 
```
