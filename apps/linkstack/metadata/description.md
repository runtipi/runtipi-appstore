# Checklist
## Dynamic compose for linkstack
This is a linkstack update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://linkstack.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/linkstack:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🖥 Hostname
- [ ] ⌨ Command
- [ ] 🚪 Entrypoint (/bin/sh)

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "linkstack",
      "image": "linkstackorg/linkstack:latest",
      "isMain": true,
      "internalPort": 443,
      "addPorts": [
        {
          "hostPort": 8184,
          "containerPort": 80
        }
      ],
      "hostname": "linkstack",
      "environment": {
        "TZ": "${TZ}",
        "SERVER_ADMIN": "${LINKSTACK_CUSTOM_EMAIL}",
        "HTTP_SERVER_NAME": "${APP_DOMAIN}",
        "HTTPS_SERVER_NAME": "${APP_DOMAIN}",
        "LOG_LEVEL": "info",
        "PHP_MEMORY_LIMIT": "256M",
        "UPLOAD_MAX_FILESIZE": "8M",
        "DB_CONNECTION": "sqlite",
        "FORCE_HTTPS": "true"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/linkstack",
          "containerPath": "/data"
        }
      ],
      "entrypoint": "/bin/sh",
      "command": [
        "-c",
        "cp -n -r /htdocs/database/ /data/database\ncp -n /htdocs/.env /data/.env\ncp -n -r /htdocs/littlelink/images /data/images\ncp -n -r /htdocs/themes /data/themes\ncp -n -r /htdocs/img /data/img\nchown -R apache:apache /data\nrm -rf /htdocs/database/\nrm /htdocs/.env\nrm -rf /htdocs/littlelink/images\nrm -rf /htdocs/themes\nrm -rf /htdocs/img\n\nsed -i 's/FORCE_HTTPS=false/FORCE_HTTPS=true/g' /data/.env\n\n# uncomment this after first start\n# to prevent the installing dialog coming up\n# if the container is recreated\n# rm /htdocs/INSTALLING\nln -s /data/database /htdocs/database\nln -s /data/.env /htdocs/.env\nln -s /data/images /htdocs/littlelink/images\nln -s /data/themes /htdocs/themes\nln -s /data/img/ /htdocs/img\ncd /htdocs\nphp artisan migrate --force\nexec /usr/local/bin/docker-entrypoint.sh server\n"
      ]
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  linkstack:
    container_name: linkstack
    hostname: linkstack
    entrypoint: /bin/sh
    command:
    - -c
    - 'cp -n -r /htdocs/database/ /data/database

      cp -n /htdocs/.env /data/.env

      cp -n -r /htdocs/littlelink/images /data/images

      cp -n -r /htdocs/themes /data/themes

      cp -n -r /htdocs/img /data/img

      chown -R apache:apache /data

      rm -rf /htdocs/database/

      rm /htdocs/.env

      rm -rf /htdocs/littlelink/images

      rm -rf /htdocs/themes

      rm -rf /htdocs/img


      sed -i ''s/FORCE_HTTPS=false/FORCE_HTTPS=true/g'' /data/.env


      # uncomment this after first start

      # to prevent the installing dialog coming up

      # if the container is recreated

      # rm /htdocs/INSTALLING

      ln -s /data/database /htdocs/database

      ln -s /data/.env /htdocs/.env

      ln -s /data/images /htdocs/littlelink/images

      ln -s /data/themes /htdocs/themes

      ln -s /data/img/ /htdocs/img

      cd /htdocs

      php artisan migrate --force

      exec /usr/local/bin/docker-entrypoint.sh server

      '
    image: linkstackorg/linkstack:latest
    environment:
    - TZ=${TZ}
    - SERVER_ADMIN=${LINKSTACK_CUSTOM_EMAIL}
    - HTTP_SERVER_NAME=${APP_DOMAIN}
    - HTTPS_SERVER_NAME=${APP_DOMAIN}
    - LOG_LEVEL=info
    - PHP_MEMORY_LIMIT=256M
    - UPLOAD_MAX_FILESIZE=8M
    - DB_CONNECTION=sqlite
    - FORCE_HTTPS=true
    volumes:
    - ${APP_DATA_DIR}/data/linkstack:/data
    ports:
    - 8184:80
    - ${APP_PORT}:443
    restart: unless-stopped
    networks:
    - tipi_main_network
    labels:
      traefik.enable: true
      traefik.http.services.linkstack.loadbalancer.server.port: 80
      traefik.http.middlewares.linkstack-web-redirect.redirectscheme.scheme: https
      traefik.http.middlewares.linkstack-security-headers.headers.contentSecurityPolicy: upgrade-insecure-requests
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.X-Real-IP: $remote_addr
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.X-Forwarded-For: $proxy_add_x_forwarded_for
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.X-Forwarded-Proto: https
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.X-VerifiedViaNginx: 'yes'
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.Upgrade: $http_upgrade
      traefik.http.middlewares.linkstack-forwarded-headers.headers.customrequestheaders.Connection: upgrade
      traefik.http.routers.linkstack-insecure.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.linkstack-insecure.entrypoints: web
      traefik.http.routers.linkstack-insecure.service: linkstack
      traefik.http.routers.linkstack-insecure.middlewares: linkstack-web-redirect
      traefik.http.routers.linkstack.rule: Host(`${APP_DOMAIN}`)
      traefik.http.routers.linkstack.entrypoints: websecure
      traefik.http.routers.linkstack.service: linkstack
      traefik.http.routers.linkstack.middlewares: linkstack-security-headers,linkstack-forwarded-headers
      traefik.http.routers.linkstack.tls.certresolver: myresolver
      traefik.http.routers.linkstack-local-insecure.rule: Host(`linkstack.${LOCAL_DOMAIN}`)
      traefik.http.routers.linkstack-local-insecure.entrypoints: web
      traefik.http.routers.linkstack-local-insecure.service: linkstack
      traefik.http.routers.linkstack-local-insecure.middlewares: linkstack-web-redirect
      traefik.http.routers.linkstack-local.rule: Host(`linkstack.${LOCAL_DOMAIN}`)
      traefik.http.routers.linkstack-local.entrypoints: websecure
      traefik.http.routers.linkstack-local.service: linkstack
      traefik.http.routers.linkstack-local.middlewares: linkstack-security-headers,linkstack-forwarded-headers
      traefik.http.routers.linkstack-local.tls: true
      runtipi.managed: true
 
```
