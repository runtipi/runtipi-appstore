## Nextcloud Server ☁

**A safe home for all your data.**

![](https://raw.githubusercontent.com/nextcloud/screenshots/master/nextcloud-hub-files-25-preview.png)

### Why is this so awesome? 🤩

- 📁 **Access your Data** You can store your files, contacts, calendars, and more on a server of your choosing.
- 🔄 **Sync your Data** You keep your files, contacts, calendars, and more synchronized amongst your devices.
- 🙌 **Share your Data** …by giving others access to the stuff you want them to see or to collaborate with.
- 🚀 **Expandable with hundreds of Apps** ...like [Calendar](https://github.com/nextcloud/calendar), [Contacts](https://github.com/nextcloud/contacts), [Mail](https://github.com/nextcloud/mail), [Video Chat](https://github.com/nextcloud/spreed) and all those you can discover in our [App Store](https://apps.nextcloud.com)
- 🔒 **Security** with our encryption mechanisms, [HackerOne bounty program](https://hackerone.com/nextcloud) and two-factor authentication.

Do you want to learn more about how you can use Nextcloud to access, share, and protect your files, calendars, contacts, communication & more at home and in your organization? [**Learn about all our Features**](https://nextcloud.com/athome/).

> Warning ⚠️: This is a simple nextcloud instance running only the nextcloud server and a postgres database. If you want features like cron and redis, please use the nextcloud app in the appstore.

## ⛺ Runtipi Note - 2026
The version of this app is currently not aligned with the latest avaible: 33.
Since Nextcloud requires to be upgraded step-by-step (you can  only update to the next major and can't skip iterations),  we will be rolling out a major update version every month until we catch up with the latest version.

### Tips
- Remember to backup your data !
- After an upgrade you should check the admin panel for warnings.
- You can **ignore** an update if you are not ready. *(but don't delay it too much)*
- If you missed an intermediate version you can use a "user-config" to catch up.

### User-Config example
here is an example to set nextcloud to version 30:
``` yaml
services:
 nextcloud-mini:
   image: nextcloud:30-apache
```

### Useful command
!!! **Make sure to know what you are doing and backup your data.** !!!

1. Access your Runtipi host command line
2. Go to your Runtipi installation directory
```bash
cd runtipi
```

#### Fix the files ownership
```bash
chown -R www-data:www-data app-data/migrated/nextcloud-mini/data/nextcloud/
```

#### Edit your configuration (be careful)
This can be necessary in some use case *(maintenance mode, add a new domain...)*

```bash
nano app-data/migrated/nextcloud-mini/data/nextcloud/config/config.php
```

#### Manual update
```bash
docker exec -it  nextcloud-mini_migrated-nextcloud-mini-1 php occ upgrade
```

#### Interact with database (advanced users)

```bash
docker exec -it nextcloud-mini_migrated-nextcloud-mini-db-1 psql -d nextcloud -U nextcloud
```