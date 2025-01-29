## Dynamic compose for n8n-1
This is a n8n-1 update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://n8n-1.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/n8n:/home/node/.n8n
- [ ] ${APP_DATA_DIR}/data/postgres:/var/lib/postgresql/data
- [ ] ${APP_DATA_DIR}/data/init-data.sh:/docker-entrypoint-initdb.d/init-data.sh
- [ ] ${APP_DATA_DIR}/data/n8n:/home/node/.n8n
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on
- [ ] 🩺 Healthcheck
- [ ] ⌨ Command
