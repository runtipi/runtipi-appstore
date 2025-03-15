## Dynamic compose for revolt
This is a revolt update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://revolt.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/db:/data/db
- [ ] ${APP_DATA_DIR}/data/minio:/data
- [ ] ${APP_DATA_DIR}/data/CaddyFiles:/etc/caddy/
- [ ] ${APP_DATA_DIR}/data/caddy-data:/data
- [ ] ${APP_DATA_DIR}/data/caddy-config:/config
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] ⌨ Command
- [ ] 🔗 Depends on
- [ ] 🚪 Entrypoint (/bin/sh -c " while ! curl -s --output /dev/null --connect-timeout 1 http://revolt-minio:9000; do echo 'Waiting minio...' && sleep 0.1; done; /usr/bin/mc alias set minio http://revolt-minio:9000 minioautumn ${REVOLT_MINIO_ROOT_PASSWORD}; /usr/bin/mc mb minio/attachments; /usr/bin/mc mb minio/avatars; /usr/bin/mc mb minio/backgrounds; /usr/bin/mc mb minio/icons; /usr/bin/mc mb minio/banners; /usr/bin/mc mb minio/emojis; exit 0; "
)
