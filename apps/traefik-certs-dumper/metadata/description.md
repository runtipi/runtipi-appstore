# Checklist
## Dynamic compose for traefik-certs-dumper
This is a traefik-certs-dumper update for using dynamic compose.
##### Reaching the app :
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${ROOT_FOLDER_HOST}/traefik/shared/acme.json:/traefik/acme.json:ro
- [ ] ${APP_DATA_DIR}/data/certs:/output:rw
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🩺 Healthcheck

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "traefik-certs-dumper",
      "image": "humenius/traefik-certs-dumper:1.6.1-alpine",
      "isMain": true,
      "environment": {
        "ACME_FILE_PATH": "/traefik/acme.json"
      },
      "volumes": [
        {
          "hostPath": "${ROOT_FOLDER_HOST}/traefik/shared/acme.json",
          "containerPath": "/traefik/acme.json",
          "readOnly": true
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/certs",
          "containerPath": "/output"
        }
      ],
      "healthCheck": {
        "interval": "30s",
        "timeout": "10s",
        "retries": 5,
        "test": "/usr/bin/healthcheck"
      }
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.8'
services:
  traefik-certs-dumper:
    container_name: traefik-certs-dumper
    image: humenius/traefik-certs-dumper:1.6.1-alpine
    restart: unless-stopped
    healthcheck:
      test:
      - CMD
      - /usr/bin/healthcheck
      interval: 30s
      timeout: 10s
      retries: 5
    volumes:
    - ${ROOT_FOLDER_HOST}/traefik/shared/acme.json:/traefik/acme.json:ro
    - ${APP_DATA_DIR}/data/certs:/output:rw
    environment:
    - ACME_FILE_PATH=/traefik/acme.json
    networks:
    - tipi_main_network
    labels:
      traefik.enable: false
      runtipi.managed: true
 
```
