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
