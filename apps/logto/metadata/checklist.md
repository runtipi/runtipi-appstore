## Dynamic compose for logto
This is a logto update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://logto.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/postgres:/var/lib/postgresql/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔗 Depends on
- [ ] 🚪 Entrypoint (['sh', '-c', 'npm run cli db seed -- --swe && npm start'])
- [ ] 🩺 Healthcheck
