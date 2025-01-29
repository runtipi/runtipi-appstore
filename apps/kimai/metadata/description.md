# Checklist
## Dynamic compose for kimai
This is a kimai update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://kimai.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/public:/opt/kimai/public:ro
- [ ] ${APP_DATA_DIR}/data/public:/opt/kimai/public
- [ ] ${APP_DATA_DIR}/data/var:/opt/kimai/var
- [ ] ${APP_DATA_DIR}/data/mysql:/var/lib/mysql
##### Specific instructions :
- [ ] 🩺 Healthcheck
- [ ] 🔗 Depends on
- [ ] 🌳 Environment
- [ ] ⌨ Command

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "nginx",
      "image": "tobybatch/nginx-fpm-reverse-proxy:latest",
      "internalPort": 80,
      "dependsOn": [
        "kimai"
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/public",
          "containerPath": "/opt/kimai/public",
          "readOnly": true
        }
      ],
      "healthCheck": {
        "interval": "20s",
        "timeout": "10s",
        "retries": 3,
        "startPeriod": "10s",
        "test": "wget --spider http://kimai-proxy/health || exit 1"
      }
    },
    {
      "name": "kimai",
      "image": "kimai/kimai2:fpm-2.1.0-prod",
      "isMain": true,
      "environment": {
        "ADMINMAIL": "${KIMAI_ADMINMAIL}",
        "ADMINPASS": "${KIMAI_ADMINPASS}",
        "DATABASE_URL": "mysql://kimai:${KIMAI_DATABASE_PASSWORD}@kimai-sqldb/kimai?charset",
        "TRUSTED_HOSTS": "kimai-proxy,localhost,127.0.0.1"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/public",
          "containerPath": "/opt/kimai/public"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/var",
          "containerPath": "/opt/kimai/var"
        }
      ]
    },
    {
      "name": "sqldb",
      "image": "mysql:5.7",
      "environment": {
        "MYSQL_DATABASE": "kimai",
        "MYSQL_USER": "kimai",
        "MYSQL_PASSWORD": "${KIMAI_DATABASE_PASSWORD}",
        "MYSQL_ROOT_PASSWORD": "${KIMAI_DATABASE_ROOT_PASSWORD}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/mysql",
          "containerPath": "/var/lib/mysql"
        }
      ],
      "command": "--default-storage-engine innodb",
      "healthCheck": {
        "interval": "20s",
        "timeout": "10s",
        "retries": 3,
        "startPeriod": "10s",
        "test": "mysqladmin -p$$MYSQL_ROOT_PASSWORD ping -h localhost"
      }
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.5'
services:
  nginx:
    container_name: kimai-proxy
    image: tobybatch/nginx-fpm-reverse-proxy:latest
    ports:
    - ${APP_PORT}:80
    volumes:
    - ${APP_DATA_DIR}/data/public:/opt/kimai/public:ro
    restart: unless-stopped
    depends_on:
    - kimai
    healthcheck:
      test: wget --spider http://kimai-proxy/health || exit 1
      interval: 20s
      start_period: 10s
      timeout: 10s
      retries: 3
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.kimai-proxy-web-redirect.redirectscheme.scheme: https
      traefik.http.services.kimai-proxy.loadbalancer.server.port: 80
      traefik.http.routers.kimai-proxy-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.kimai-proxy-insecure.entrypoints: web
      traefik.http.routers.kimai-proxy-insecure.service: kimai-proxy
      traefik.http.routers.kimai-proxy-insecure.middlewares: kimai-proxy-web-redirect
      traefik.http.routers.kimai-proxy.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.kimai-proxy.entrypoints: websecure
      traefik.http.routers.kimai-proxy.service: kimai-proxy
      traefik.http.routers.kimai-proxy.tls.certresolver: myresolver
      traefik.http.routers.kimai-proxy-local-insecure.rule: Host(`kimai.${LOCAL_DOMAIN}`)
      traefik.http.routers.kimai-proxy-local-insecure.entrypoints: web
      traefik.http.routers.kimai-proxy-local-insecure.service: kimai-proxy
      traefik.http.routers.kimai-proxy-local-insecure.middlewares: kimai-proxy-web-redirect
      traefik.http.routers.kimai-proxy-local.rule: Host(`kimai-proxy.${LOCAL_DOMAIN}`)
      traefik.http.routers.kimai-proxy-local.entrypoints: websecure
      traefik.http.routers.kimai-proxy-local.service: kimai-proxy
      traefik.http.routers.kimai-proxy-local.tls: true
      runtipi.managed: true
  kimai:
    container_name: kimai
    image: kimai/kimai2:fpm-2.1.0-prod
    environment:
    - ADMINMAIL=${KIMAI_ADMINMAIL}
    - ADMINPASS=${KIMAI_ADMINPASS}
    - DATABASE_URL=mysql://kimai:${KIMAI_DATABASE_PASSWORD}@kimai-sqldb/kimai?charset=utf8&serverVersion=5.7
    - TRUSTED_HOSTS=kimai-proxy,localhost,127.0.0.1
    volumes:
    - ${APP_DATA_DIR}/data/public:/opt/kimai/public
    - ${APP_DATA_DIR}/data/var:/opt/kimai/var
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  sqldb:
    container_name: kimai-sqldb
    image: mysql:5.7
    environment:
    - MYSQL_DATABASE=kimai
    - MYSQL_USER=kimai
    - MYSQL_PASSWORD=${KIMAI_DATABASE_PASSWORD}
    - MYSQL_ROOT_PASSWORD=${KIMAI_DATABASE_ROOT_PASSWORD}
    volumes:
    - ${APP_DATA_DIR}/data/mysql:/var/lib/mysql
    command: --default-storage-engine innodb
    restart: unless-stopped
    healthcheck:
      test: mysqladmin -p$$MYSQL_ROOT_PASSWORD ping -h localhost
      interval: 20s
      start_period: 10s
      timeout: 10s
      retries: 3
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
 
```
