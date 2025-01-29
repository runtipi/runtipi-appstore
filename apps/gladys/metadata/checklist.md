## Dynamic compose for gladys
This is a gladys update for using dynamic compose.
##### Reaching the app :
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] /var/run/docker.sock:/var/run/docker.sock
- [ ] ${APP_DATA_DIR}/data/gladysassistant:/var/lib/gladysassistant
- [ ] /dev:/dev
- [ ] /run/udev:/run/udev:ro
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🌐 Network mode (host)
- [ ] 👑 Privileged
- [ ] 👼 Stop grace period
