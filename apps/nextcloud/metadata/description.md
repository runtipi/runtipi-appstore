# Checklist
## Dynamic compose for nextcloud
This is a nextcloud update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://nextcloud.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/nextcloud:/var/www/html
- [ ] ${APP_DATA_DIR}/data/db:/var/lib/postgresql/data
- [ ] ${APP_DATA_DIR}/data/redis:/data
- [ ] ${APP_DATA_DIR}/data/nextcloud:/var/www/html
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on
- [ ] 👤 User (1000:1000)
- [ ] 🚪 Entrypoint (/cron.sh)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "nextcloud",
      "image": "nextcloud:26.0.13-apache",
      "isMain": true,
      "internalPort": 80,
      "environment": {
        "POSTGRES_HOST": "db-nextcloud",
        "REDIS_HOST": "redis-nextcloud",
        "POSTGRES_PASSWORD": "tipi",
        "POSTGRES_USER": "tipi",
        "POSTGRES_DB": "nextcloud",
        "NEXTCLOUD_ADMIN_USER": "${NEXTCLOUD_ADMIN_USER}",
        "NEXTCLOUD_ADMIN_PASSWORD": "${NEXTCLOUD_ADMIN_PASSWORD}",
        "NEXTCLOUD_TRUSTED_DOMAINS": "${APP_DOMAIN}",
        "TRUSTED_PROXIES": "172.16.0.0/12",
        "OVERWRITEPROTOCOL": "${APP_PROTOCOL:-http}"
      },
      "dependsOn": [
        "db-nextcloud",
        "redis-nextcloud"
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/nextcloud",
          "containerPath": "/var/www/html"
        }
      ]
    },
    {
      "name": "db-nextcloud",
      "image": "postgres:14.2",
      "environment": {
        "POSTGRES_PASSWORD": "tipi",
        "POSTGRES_USER": "tipi",
        "POSTGRES_DB": "nextcloud"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/db",
          "containerPath": "/var/lib/postgresql/data"
        }
      ]
    },
    {
      "name": "redis-nextcloud",
      "image": "redis:6.2.6",
      "user": "1000:1000",
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/redis",
          "containerPath": "/data"
        }
      ]
    },
    {
      "name": "cron",
      "image": "nextcloud:25.0.13-apache",
      "dependsOn": [
        "db-nextcloud",
        "redis-nextcloud"
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/nextcloud",
          "containerPath": "/var/www/html"
        }
      ],
      "entrypoint": "/cron.sh"
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  nextcloud:
    container_name: nextcloud
    image: nextcloud:26.0.13-apache
    restart: unless-stopped
    ports:
    - ${APP_PORT}:80
    volumes:
    - ${APP_DATA_DIR}/data/nextcloud:/var/www/html
    environment:
    - POSTGRES_HOST=db-nextcloud
    - REDIS_HOST=redis-nextcloud
    - POSTGRES_PASSWORD=tipi
    - POSTGRES_USER=tipi
    - POSTGRES_DB=nextcloud
    - NEXTCLOUD_ADMIN_USER=${NEXTCLOUD_ADMIN_USER}
    - NEXTCLOUD_ADMIN_PASSWORD=${NEXTCLOUD_ADMIN_PASSWORD}
    - NEXTCLOUD_TRUSTED_DOMAINS=${APP_DOMAIN}
    - TRUSTED_PROXIES=172.16.0.0/12
    - OVERWRITEPROTOCOL=${APP_PROTOCOL:-http}
    depends_on:
    - db-nextcloud
    - redis-nextcloud
    networks:
    - tipi_main_network
    labels:
      traefik.enable: ${APP_EXPOSED}
      traefik.http.routers.nextcloud.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.nextcloud.entrypoints: websecure
      traefik.http.routers.nextcloud.service: nextcloud
      traefik.http.routers.nextcloud.tls.certresolver: myresolver
      traefik.http.services.nextcloud.loadbalancer.server.port: 80
      traefik.http.middlewares.nextcloud.headers.browserXSSFilter: true
      traefik.http.middlewares.nextcloud.headers.contentTypeNosniff: true
      traefik.http.middlewares.nextcloud.headers.stsIncludeSubdomains: true
      traefik.http.middlewares.nextcloud.headers.stsPreload: true
      traefik.http.middlewares.nextcloud.headers.stsSeconds: 155520011
      traefik.http.middlewares.nextcloud_redirect.redirectregex.permanent: true
      traefik.http.middlewares.nextcloud_redirect.redirectregex.regex: https://(.*)/.well-known/(card|cal)dav
      traefik.http.middlewares.nextcloud_redirect.redirectregex.replacement: https://$${1}/remote.php/dav/
      traefik.http.routers.nextcloud.middlewares: nextcloud,nextcloud_redirect,nextcloud-https
      traefik.http.middlewares.nextcloud.headers.customRequestHeaders.X-Forwarded-Proto: https
      traefik.http.middlewares.nextcloud-https.redirectscheme.scheme: https
      traefik.http.routers.nextcloud-http.middlewares: nextcloud-https@docker
      runtipi.managed: true
  db-nextcloud:
    container_name: db-nextcloud
    image: postgres:14.2
    restart: on-failure
    volumes:
    - ${APP_DATA_DIR}/data/db:/var/lib/postgresql/data
    environment:
    - POSTGRES_PASSWORD=tipi
    - POSTGRES_USER=tipi
    - POSTGRES_DB=nextcloud
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  redis-nextcloud:
    container_name: redis-nextcloud
    user: 1000:1000
    image: redis:6.2.6
    restart: on-failure
    volumes:
    - ${APP_DATA_DIR}/data/redis:/data
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  cron:
    image: nextcloud:25.0.13-apache
    restart: on-failure
    volumes:
    - ${APP_DATA_DIR}/data/nextcloud:/var/www/html
    entrypoint: /cron.sh
    depends_on:
    - db-nextcloud
    - redis-nextcloud
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
 
```
