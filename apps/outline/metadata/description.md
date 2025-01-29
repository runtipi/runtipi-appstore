# Checklist
## Dynamic compose for outline
This is a outline update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://outline.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/outline:/var/lib/outline/data
- [ ] ${APP_DATA_DIR}/data/db:/var/lib/postgresql/data
- [ ] ${APP_DATA_DIR}/data/oidc-config.json:/app/oidc-config.json:ro
- [ ] ${APP_DATA_DIR}/data/uc/db:/app/db:z
- [ ] ${APP_DATA_DIR}/data/uc/static_root:/app/static_root:z
- [ ] ${APP_DATA_DIR}/data/nginx/:/etc/nginx/conf.d/:ro
- [ ] ${APP_DATA_DIR}/data/uc/static_root:/uc/static_root:ro
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "outline",
      "image": "outlinewiki/outline:0.81.1",
      "isMain": true,
      "environment": {
        "DATABASE_URL": "postgres://outline:${OUTLINE_PG_PASSWORD}@outline-postgres:5432/outline",
        "REDIS_URL": "redis://outline-redis:6379",
        "SECRET_KEY": "${OUTLINE_SECRET_KEY}",
        "UTILS_SECRET": "${OUTLINE_UTILS_SECRET}",
        "URL": "https://${APP_DOMAIN}",
        "FORCE_HTTPS": "false",
        "FILE_STORAGE": "local",
        "FILE_STORAGE_UPLOAD_MAX_SIZE": "26214400",
        "PGSSLMODE": "disable",
        "OIDC_CLIENT_ID": "${OUTLINE_OIDC_CLID}",
        "OIDC_CLIENT_SECRET": "${OUTLINE_OIDC_CLKEY}",
        "OIDC_AUTH_URI": "https://${APP_DOMAIN}/uc/oauth/authorize/",
        "OIDC_TOKEN_URI": "http://outline-oidc:8000/oauth/token/",
        "OIDC_USERINFO_URI": "http://outline-oidc:8000/oauth/userinfo/",
        "OIDC_USERNAME_CLAIM": "preferred_username",
        "OIDC_DISPLAY_NAME": "OpenID",
        "OIDC_SCOPES": "openid profile email"
      },
      "dependsOn": [
        "outline-postgres",
        "outline-redis"
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/outline",
          "containerPath": "/var/lib/outline/data"
        }
      ]
    },
    {
      "name": "outline-postgres",
      "image": "postgres:16-alpine",
      "environment": {
        "POSTGRES_USER": "outline",
        "POSTGRES_PASSWORD": "${OUTLINE_PG_PASSWORD}",
        "POSTGRES_DB": "outline"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/db",
          "containerPath": "/var/lib/postgresql/data"
        }
      ]
    },
    {
      "name": "outline-redis",
      "image": "redis:7-alpine"
    },
    {
      "name": "outline-oidc",
      "image": "ghcr.io/sergi0g/oidc-provider:v0.2.0",
      "environment": {
        "LANGUAGE_CODE": "en-us",
        "TIME_ZONE": "UTC",
        "FORCE_SCRIPT_NAME": "/uc",
        "SECRET_KEY": "${OUTLINE_OIDC_SECRET}",
        "DJANGO_SUPERUSER_PASSWORD": "${OUTLINE_PASSWORD}",
        "DJANGO_SUPERUSER_USERNAME": "${OUTLINE_USER}",
        "DJANGO_SUPERUSER_EMAIL": "user@outline.localhost",
        "INITIAL_DATA": "oidc-config.json",
        "DOMAIN": "https://${APP_DOMAIN}"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/oidc-config.json",
          "containerPath": "/app/oidc-config.json",
          "readOnly": true
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/uc/db",
          "containerPath": "/app/db"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/uc/static_root",
          "containerPath": "/app/static_root"
        }
      ]
    },
    {
      "name": "outline-nginx",
      "image": "nginx:alpine",
      "internalPort": 80,
      "dependsOn": [
        "outline",
        "outline-oidc"
      ],
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/nginx/",
          "containerPath": "/etc/nginx/conf.d/",
          "readOnly": true
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/uc/static_root",
          "containerPath": "/uc/static_root",
          "readOnly": true
        }
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.8'
services:
  outline:
    container_name: outline
    image: outlinewiki/outline:0.81.1
    restart: unless-stopped
    environment:
    - DATABASE_URL=postgres://outline:${OUTLINE_PG_PASSWORD}@outline-postgres:5432/outline
    - REDIS_URL=redis://outline-redis:6379
    - SECRET_KEY=${OUTLINE_SECRET_KEY}
    - UTILS_SECRET=${OUTLINE_UTILS_SECRET}
    - URL=https://${APP_DOMAIN}
    - FORCE_HTTPS=false
    - FILE_STORAGE=local
    - FILE_STORAGE_UPLOAD_MAX_SIZE=26214400
    - PGSSLMODE=disable
    - OIDC_CLIENT_ID=${OUTLINE_OIDC_CLID}
    - OIDC_CLIENT_SECRET=${OUTLINE_OIDC_CLKEY}
    - OIDC_AUTH_URI=https://${APP_DOMAIN}/uc/oauth/authorize/
    - OIDC_TOKEN_URI=http://outline-oidc:8000/oauth/token/
    - OIDC_USERINFO_URI=http://outline-oidc:8000/oauth/userinfo/
    - OIDC_USERNAME_CLAIM=preferred_username
    - OIDC_DISPLAY_NAME=OpenID
    - OIDC_SCOPES=openid profile email
    volumes:
    - ${APP_DATA_DIR}/data/outline:/var/lib/outline/data
    depends_on:
    - outline-postgres
    - outline-redis
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  outline-postgres:
    container_name: outline-postgres
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
    - POSTGRES_USER=outline
    - POSTGRES_PASSWORD=${OUTLINE_PG_PASSWORD}
    - POSTGRES_DB=outline
    volumes:
    - ${APP_DATA_DIR}/data/db:/var/lib/postgresql/data
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  outline-redis:
    container_name: outline-redis
    image: redis:7-alpine
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  outline-oidc:
    container_name: outline-oidc
    image: ghcr.io/sergi0g/oidc-provider:v0.2.0
    restart: unless-stopped
    environment:
    - LANGUAGE_CODE=en-us
    - TIME_ZONE=UTC
    - FORCE_SCRIPT_NAME=/uc
    - SECRET_KEY=${OUTLINE_OIDC_SECRET}
    - DJANGO_SUPERUSER_PASSWORD=${OUTLINE_PASSWORD}
    - DJANGO_SUPERUSER_USERNAME=${OUTLINE_USER}
    - DJANGO_SUPERUSER_EMAIL=user@outline.localhost
    - INITIAL_DATA=oidc-config.json
    - DOMAIN=https://${APP_DOMAIN}
    volumes:
    - ${APP_DATA_DIR}/data/oidc-config.json:/app/oidc-config.json:ro
    - ${APP_DATA_DIR}/data/uc/db:/app/db:z
    - ${APP_DATA_DIR}/data/uc/static_root:/app/static_root:z
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
  outline-nginx:
    container_name: outline-reverse-proxy
    image: nginx:alpine
    restart: unless-stopped
    ports:
    - ${APP_PORT}:80
    volumes:
    - ${APP_DATA_DIR}/data/nginx/:/etc/nginx/conf.d/:ro
    - ${APP_DATA_DIR}/data/uc/static_root:/uc/static_root:ro
    depends_on:
    - outline
    - outline-oidc
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.middlewares.outline-web-redirect.redirectscheme.scheme: https
      traefik.http.services.outline.loadbalancer.server.port: 80
      traefik.http.routers.outline.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.outline.entrypoints: websecure
      traefik.http.routers.outline.service: outline
      traefik.http.routers.outline.tls.certresolver: myresolver
      runtipi.managed: true
 
```
