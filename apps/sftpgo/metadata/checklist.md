## Dynamic compose for sftpgo
This is a sftpgo update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://sftpgo.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/config:/var/lib/sftpgo
- [ ] ${APP_DATA_DIR}/data/files:/srv/sftpgo/data
- [ ] ${APP_DATA_DIR}/data/backups:/srv/sftpgo/backups
- [ ] ${APP_DATA_DIR}/db:/var/lib/postgresql/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🩺 Healthcheck
- [ ] 👤 User (root)
- [ ] 🔗 Depends on
