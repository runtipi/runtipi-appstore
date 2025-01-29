## Dynamic compose for invoice-ninja
This is a invoice-ninja update for using dynamic compose.
##### Reaching the app :
- [ ] http://localip:port
- [ ] https://invoice-ninja.tipi.local
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/public:/var/www/app/public:rw,delegated
- [ ] ${APP_DATA_DIR}/data/storage:/var/www/app/storage:rw,delegated
- [ ] ${APP_DATA_DIR}/data/php/php.ini:/usr/local/etc/php/php.ini:ro
- [ ] ${APP_DATA_DIR}/data/php/php-cli.ini:/usr/local/etc/php/php-cli.ini:ro
- [ ] ${APP_DATA_DIR}/data/nginx/invoice-ninja.conf:/etc/nginx/conf.d/default.conf:ro
- [ ] ${APP_DATA_DIR}/data/public:/var/www/app/public:ro
- [ ] ${APP_DATA_DIR}/data/mysql:/var/lib/mysql:rw,delegated
- [ ] ${APP_DATA_DIR}/data:/tmp/data
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 👤 User (1500:1500)
- [ ] 🔗 Depends on
- [ ] ⌨ Command
