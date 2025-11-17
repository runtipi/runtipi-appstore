# Migration Notice

November 2025

This version of Authentik won't be updated anymore due to a necessary database upgrade.
You can find the new version from the appstore and follow the steps below for the data migration.
> Make sure to backup your data before proceding, you can make use of the integrated backups of Runtipi

####From the Runtipi Web UI
1. Install the new Authentik app but don't start it yet
2. Stop it
3. Click on the three dots and select `Reset app`
4. Go Back to your old app
5. Add this to you `user-configuration` :
```
services:
  authentik-new-db:
    image: postgres:18-alpine
  volumes:
    - ${APP_DATA_DIR}/../authentik-1/data/postgres:/var/lib/postgresql/data
```
6. Save and Restart the app

#### From your Runtipi host terminal
7. Go to your Runtipi install folder `cd /path/to/runtipi`
8. Backup the database :
``` bash
docker exec authentik_migrated-authentik-db-1 pg_dumpall -U postgres > authentik-backup.sql
```
8. Push the database dump into its new location :
``` bash
cat authentik-backup.sql | docker exec -i authentik_migrated-authentik-new-db-1 psql -U postgres
```
9. Copy the rest of the files to their new location :
``` bash
cp -r app-data/migrated/authentik/data/authentik-certs app-data/migrated/authentik-1/data/
cp -r app-data/migrated/authentik/data/authentik-custom-templates/ app-data/migrated/authentik-1/data/
cp -r app-data/migrated/authentik/data/authentik-media/ app-data/migrated/authentik-1/data/
```
10. You can start your new app.

11. Once everything is fine you can uninstall your old version and remove the database dump *(authentik-backup.sql)*


## Install Information

*Initial Install May take a bit to start up!*

To start the initial setup, navigate to https://<your server's IP or hostname>:9443/if/flow/initial-setup/.

There you are prompted to set a password for the akadmin user (the default user).

## What is authentik?

authentik is an open-source Identity Provider that emphasizes flexibility and versatility. It can be seamlessly integrated into existing environments to support new protocols. authentik is also a great solution for implementing sign-up, recovery, and other similar features in your application, saving you the hassle of dealing with them.

## Docs

Visit the [documentation](https://goauthentik.io/docs/) for more information

## Screenshots

| Light | Dark |
| --- | --- |
| [![](https://camo.githubusercontent.com/49bdfe06ba218e307e6eb171bf5c88e96b1302be81cdb9f9e33a39ba1e269479/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f617070735f6c696768742e6a7067)](https://camo.githubusercontent.com/49bdfe06ba218e307e6eb171bf5c88e96b1302be81cdb9f9e33a39ba1e269479/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f617070735f6c696768742e6a7067) | [![](https://camo.githubusercontent.com/32ed9376350e9bb727396ec149de406b2d7b150ea6770343d5ecb405aa0b51fe/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f617070735f6461726b2e6a7067)](https://camo.githubusercontent.com/32ed9376350e9bb727396ec149de406b2d7b150ea6770343d5ecb405aa0b51fe/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f617070735f6461726b2e6a7067) |
| [![](https://camo.githubusercontent.com/52bf3c54e399ecffcdde04089f1939c23c21acf4f53beeb1fa3893573359fbae/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f61646d696e5f6c696768742e6a7067)](https://camo.githubusercontent.com/52bf3c54e399ecffcdde04089f1939c23c21acf4f53beeb1fa3893573359fbae/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f61646d696e5f6c696768742e6a7067) | [![](https://camo.githubusercontent.com/09a804e359f3950b2b8e2fcf59374de6669cad1aeb39efc064dfec880327024f/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f61646d696e5f6461726b2e6a7067)](https://camo.githubusercontent.com/09a804e359f3950b2b8e2fcf59374de6669cad1aeb39efc064dfec880327024f/68747470733a2f2f676f61757468656e74696b2e696f2f696d672f73637265656e5f61646d696e5f6461726b2e6a7067) |
