# Checklist
## Dynamic compose for mastodon
This is a mastodon update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://mastodon.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/mastodon-config:/config
- [ ] ${APP_DATA_DIR}/data/postgres:/var/lib/postgresql/data
- [ ] ${APP_DATA_DIR}/data/redis:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on
- [ ] 🩺 Healthcheck
- [ ] 🧠 Shared memory size (256mb)
- [ ] ⌨ Command

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "mastodon",
      "image": "lscr.io/linuxserver/mastodon:4.3.6",
      "isMain": true,
      "internalPort": 443,
      "addPorts": [
        {
          "hostPort": 8209,
          "containerPort": 80
        }
      ],
      "environment": {
        "PUID": "1000",
        "PGID": "1000",
        "TZ": "${TZ}",
        "LOCAL_DOMAIN": "${MASTODON_LOCAL_DOMAIN}",
        "WEB_DOMAIN": "${APP_DOMAIN}",
        "VAPID_PUBLIC_KEY": "${VAPID_PUBLIC_KEY}",
        "VAPID_PRIVATE_KEY": "${VAPID_PRIVATE_KEY}",
        "REDIS_HOST": "mastodon-redis",
        "REDIS_PASSWORD": "${MASTODON_REDIS_PASSWORD}",
        "REDIS_PORT": "6379",
        "DB_HOST": "mastodon-db",
        "DB_USER": "tipi",
        "DB_NAME": "mastodon",
        "DB_PASS": "${MASTODON_POSTGRES_PASSWORD}",
        "DB_PORT": "5432",
        "ES_ENABLED": "false",
        "SECRET_KEY_BASE": "${MASTODON_SECRET_KEY_BASE}",
        "OTP_SECRET": "${MASTODON_OTP_SECRET}",
        "SMTP_SERVER": "${MASTODON_SMTP_SERVER}",
        "SMTP_PORT": "${MASTODON_SMTP_PORT}",
        "SMTP_LOGIN": "${MASTODON_SMTP_LOGIN}",
        "SMTP_PASSWORD": "${MASTODON_SMTP_PASSWORD}",
        "SMTP_FROM_ADDRESS": "${MASTODON_SMTP_FROM_ADDRESS}",
        "S3_ENABLED": "false",
        "SIDEKIQ_ONLY": "false",
        "SIDEKIQ_DEFAULT": "false",
        "SIDEKIQ_THREADS": "5",
        "ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY": "${MASTODON_ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY}",
        "ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT": "${MASTODON_ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT}",
        "ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY": "${MASTODON_ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY}"
      },
      "dependsOn": {
        "mastodon-db": {
          "condition": "service_healthy"
        },
        "mastodon-redis": {
          "condition": "service_healthy"
        }
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/mastodon-config",
          "containerPath": "/config"
        }
      ]
    },
    {
      "name": "mastodon-db",
      "image": "postgres:14-alpine",
      "environment": {
        "POSTGRES_PASSWORD": "${MASTODON_POSTGRES_PASSWORD}",
        "POSTGRES_USER": "tipi",
        "POSTGRES_DB": "mastodon",
        "PG_DATA": "/var/lib/postgresql/data",
        "POSTGRES_HOST_AUTH_METHODL": "trust"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/postgres",
          "containerPath": "/var/lib/postgresql/data"
        }
      ],
      "shmSize": "256mb",
      "healthCheck": {
        "test": "pg_isready -U tipi"
      }
    },
    {
      "name": "mastodon-redis",
      "image": "redis:7-alpine",
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/redis",
          "containerPath": "/data"
        }
      ],
      "command": "redis-server --appendonly yes --replica-read-only no --requirepass \"${MASTODON_REDIS_PASSWORD}\"",
      "healthCheck": {
        "test": "redis-cli ping"
      }
    }
  ]
} 
```
# Original YAML
```yaml
version: '3'
services:
  mastodon:
    container_name: mastodon
    image: lscr.io/linuxserver/mastodon:4.3.6
    ports:
    - 8209:80
    - ${APP_PORT}:443
    volumes:
    - ${APP_DATA_DIR}/data/mastodon-config:/config
    environment:
    - PUID=1000
    - PGID=1000
    - TZ=${TZ}
    - LOCAL_DOMAIN=${MASTODON_LOCAL_DOMAIN}
    - WEB_DOMAIN=${APP_DOMAIN}
    - VAPID_PUBLIC_KEY=${VAPID_PUBLIC_KEY}
    - VAPID_PRIVATE_KEY=${VAPID_PRIVATE_KEY}
    - REDIS_HOST=mastodon-redis
    - REDIS_PASSWORD=${MASTODON_REDIS_PASSWORD}
    - REDIS_PORT=6379
    - DB_HOST=mastodon-db
    - DB_USER=tipi
    - DB_NAME=mastodon
    - DB_PASS=${MASTODON_POSTGRES_PASSWORD}
    - DB_PORT=5432
    - ES_ENABLED=false
    - SECRET_KEY_BASE=${MASTODON_SECRET_KEY_BASE}
    - OTP_SECRET=${MASTODON_OTP_SECRET}
    - SMTP_SERVER=${MASTODON_SMTP_SERVER}
    - SMTP_PORT=${MASTODON_SMTP_PORT}
    - SMTP_LOGIN=${MASTODON_SMTP_LOGIN}
    - SMTP_PASSWORD=${MASTODON_SMTP_PASSWORD}
    - SMTP_FROM_ADDRESS=${MASTODON_SMTP_FROM_ADDRESS}
    - S3_ENABLED=false
    - SIDEKIQ_ONLY=false
    - SIDEKIQ_DEFAULT=false
    - SIDEKIQ_THREADS=5
    - ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY=${MASTODON_ACTIVE_RECORD_ENCRYPTION_DETERMINISTIC_KEY}
    - ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT=${MASTODON_ACTIVE_RECORD_ENCRYPTION_KEY_DERIVATION_SALT}
    - ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY=${MASTODON_ACTIVE_RECORD_ENCRYPTION_PRIMARY_KEY}
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: ${APP_EXPOSED}
      traefik.http.routers.mastodon.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.mastodon.entrypoints: websecure
      traefik.http.routers.mastodon.service: mastodon
      traefik.http.routers.mastodon.tls.certresolver: myresolver
      traefik.http.services.mastodon.loadbalancer.server.port: 443
      traefik.http.services.mastodon.loadbalancer.serverstransport: insecuretransport@file
      traefik.http.services.mastodon.loadbalancer.server.scheme: https
      runtipi.managed: true
    depends_on:
      mastodon-db:
        condition: service_healthy
      mastodon-redis:
        condition: service_healthy
  mastodon-db:
    restart: always
    container_name: mastodon-db
    image: postgres:14-alpine
    shm_size: 256mb
    environment:
      POSTGRES_PASSWORD: ${MASTODON_POSTGRES_PASSWORD}
      POSTGRES_USER: tipi
      POSTGRES_DB: mastodon
      PG_DATA: /var/lib/postgresql/data
      POSTGRES_HOST_AUTH_METHODL: trust
    networks:
    - tipi_main_network
    healthcheck:
      test:
      - CMD
      - pg_isready
      - -U
      - tipi
    volumes:
    - ${APP_DATA_DIR}/data/postgres:/var/lib/postgresql/data
    labels:
      runtipi.managed: true
  mastodon-redis:
    restart: always
    image: redis:7-alpine
    command: redis-server --appendonly yes --replica-read-only no --requirepass "${MASTODON_REDIS_PASSWORD}"
    container_name: mastodon-redis
    networks:
    - tipi_main_network
    healthcheck:
      test:
      - CMD
      - redis-cli
      - ping
    volumes:
    - ${APP_DATA_DIR}/data/redis:/data
    labels:
      runtipi.managed: true
 
```
