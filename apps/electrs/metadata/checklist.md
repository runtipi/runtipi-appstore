## Dynamic compose for electrs
This is a electrs update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://electrs.tipi.local
- [ ] 🌐 Additionnal Port(s)
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
- [ ] ${BITCOIND_DIR:-${APP_DATA_DIR}/../bitcoind/data}:/data/.bitcoin:ro
- [ ] ${APP_DATA_DIR}/data:/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 👤 User (0:0)
- [ ] 👼 Stop grace period
