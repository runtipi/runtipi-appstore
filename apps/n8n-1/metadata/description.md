# ⚠ Runtipi Migration Notice - 📅 2026

This version of n8n won't be updated anymore due to a necessary database upgrade.
You can install the new version directly, (it's available in the official appstore) and follow the steps below for the data migration.
> Make sure to backup your data before proceding, you can make use of the integrated backups of Runtipi

#### From the Runtipi Web UI
1. Install the new n8n v2
2. Stop it
3. Click on the three dots and select `Reset app`
4. Add this to your `user-configuration` :
``` yaml
services:
  n8n-2-db:
    networks: !reset []
    network_mode: none
```
5. Save and keep it stopped until **step 9** 

#### From your Runtipi host terminal
6. Go to your Runtipi install folder `cd /path/to/runtipi`
7. Copy all the files to their new location :
``` bash
cp -r app-data/migrated/n8n-1/. app-data/migrated/n8n-2/
```
8. Remove the database directory in the new "app-data"
```
rm -rf app-data/migrated/n8n-2/data/postgres
```
9. Start both apps
``` bash
./runtipi-cli app start n8n-1:migrated
./runtipi-cli app start n8n-2:migrated
```
10. Fix database user permissions on the old version :
``` bash
docker exec -it n8n-1_migrated-n8n-db-1 psql -U tipi -d n8n -c "GRANT CREATE ON SCHEMA public TO n8n"
```
11. Backup the database :
``` bash
docker exec n8n-1_migrated-n8n-db-1 pg_dump -U tipi -d n8n -cC > n8n-backup.sql
```
12. Push the database dump into its new location :
``` bash
cat n8n-backup.sql | docker exec -i n8n-2_migrated-n8n-2-db-1 psql -U tipi -d n8n
```
#### Back to the Runtipi Web UI
13. Remove the user-config in your new app, then restart it

> Once everything is fine you can uninstall your old version and remove the database dump *(n8n-backup.sql)*