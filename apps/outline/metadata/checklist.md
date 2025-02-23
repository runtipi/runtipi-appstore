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
