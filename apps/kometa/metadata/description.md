# Checklist
## Dynamic compose for kometa
This is a kometa update for using dynamic compose.
##### Reaching the app :
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/:/config
##### Specific instructions :
- [ ] 🌳 Environment

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "kometa",
      "image": "ghcr.io/linuxserver/kometa:2.1.0",
      "isMain": true,
      "environment": {
        "PUID": "1000",
        "PGID": "1000",
        "TZ": "${TZ}",
        "KOMETA_CONFIG": "/config/config.yml",
        "KOMETA_TIME": "${CONF_KOMETA_TIME-02:00}",
        "KOMETA_RUN": "${CONF_KOMETA_RUN-false}",
        "KOMETA_TEST": "${CONF_KOMETA_TEST-false}",
        "KOMETA_NO_MISSING": "false",
        "KOMETA_DEBUG": "${CONF_KOMETA_DEBUG-false}",
        "KOMETA_TRACE": "${CONF_KOMETA_TRACE-false}",
        "KOMETA_LOG_REQUESTS": "${CONF_KOMETA_LOG_REQUESTS-false}",
        "KOMETA_TIMEOUT": "${CONF_KOMETA_TIMEOUT-180}",
        "KOMETA_NO_VERIFY_SSL": "${CONF_KOMETA_NO_VERIFY_SSL-false}",
        "KOMETA_COLLECTIONS_ONLY": "false",
        "KOMETA_METADATA_ONLY": "false",
        "KOMETA_PLAYLISTS_ONLY": "false",
        "KOMETA_OPERATIONS_ONLY": "false",
        "KOMETA_OVERLAYS_ONLY": "false",
        "KOMETA_IGNORE_SCHEDULES": "false",
        "KOMETA_IGNORE_GHOST": "false",
        "KOMETA_DELETE_COLLECTIONS": "false",
        "KOMETA_DELETE_LABELS": "false",
        "KOMETA_NO_REPORT": "false"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/",
          "containerPath": "/config"
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
services:
  kometa:
    image: ghcr.io/linuxserver/kometa:2.1.0
    container_name: kometa
    restart: unless-stopped
    environment:
    - PUID=1000
    - PGID=1000
    - TZ=${TZ}
    - KOMETA_CONFIG=/config/config.yml
    - KOMETA_TIME=${CONF_KOMETA_TIME-02:00}
    - KOMETA_RUN=${CONF_KOMETA_RUN-false}
    - KOMETA_TEST=${CONF_KOMETA_TEST-false}
    - KOMETA_NO_MISSING=${CONF_KOMETA_NO_MISSING-false}
    - KOMETA_DEBUG=${CONF_KOMETA_DEBUG-false}
    - KOMETA_TRACE=${CONF_KOMETA_TRACE-false}
    - KOMETA_LOG_REQUESTS=${CONF_KOMETA_LOG_REQUESTS-false}
    - KOMETA_TIMEOUT=${CONF_KOMETA_TIMEOUT-180}
    - KOMETA_NO_VERIFY_SSL=${CONF_KOMETA_NO_VERIFY_SSL-false}
    - KOMETA_COLLECTIONS_ONLY=false
    - KOMETA_METADATA_ONLY=false
    - KOMETA_PLAYLISTS_ONLY=false
    - KOMETA_OPERATIONS_ONLY=false
    - KOMETA_OVERLAYS_ONLY=false
    - KOMETA_IGNORE_SCHEDULES=false
    - KOMETA_IGNORE_GHOST=false
    - KOMETA_DELETE_COLLECTIONS=false
    - KOMETA_DELETE_LABELS=false
    - KOMETA_NO_MISSING=false
    - KOMETA_NO_REPORT=false
    volumes:
    - ${APP_DATA_DIR}/data/:/config
    networks:
    - tipi_main_network
    labels:
      traefik.enable: false
      runtipi.managed: true
 
```
