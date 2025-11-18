# ⚠ Runtipi Migration Notice - 📅 November 2025

This version of Authentik won't be updated anymore due to a necessary database upgrade.
You can install the new version directly, (it's available in the official appstore) and follow the steps below for the data migration.
> Make sure to backup your data before proceding, you can make use of the integrated backups of Runtipi

#### From the Runtipi Web UI
1. Install the new Authentik 
2. Stop it
3. Click on the three dots and select `Reset app`
4. Add this to you `user-configuration` :
``` yaml
services:
  authentik-db:
    networks: !reset []
    network_mode: none
```
5. Save and keep it stopped until **step 9** 

#### From your Runtipi host terminal
6. Go to your Runtipi install folder `cd /path/to/runtipi`
7. Copy all the files to their new location :
``` bash
cp -r app-data/migrated/authentik/. app-data/migrated/authentik-1/
```
8. Remove the database directory in the new "app-data"
```
rm -rf app-data/migrated/authentik-1/data/postgres
```
9. Start both apps
``` bash
./runtipi-cli app start authentik:migrated
./runtipi-cli app start authentik-1:migrated
```
10. Backup the database :
``` bash
docker exec authentik_migrated-authentik-db-1 pg_dump -U authentik -d authentik -cC > authentik-backup.sql
```
11. Push the database dump into its new location :
``` bash
cat authentik-backup.sql | docker exec -i authentik-1_migrated-authentik-db-1 psql -U authentik
```
#### Back to the Runtipi Web UI
12. Remove the user-config in your new app, then restart it

> Once everything is fine you can uninstall your old version and remove the database dump *(authentik-backup.sql)*
