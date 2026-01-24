## ⛺ Runtipi Note - 2026
To learn more about update cycle, and tips for this app go to the end of this description.

## A safe home for all your data.

* 📁 **Access your Data** You can store your files, contacts, calendars and more on a server of your choosing.
* 🔄 **Sync your Data** You keep your files, contacts, calendars and more synchronized amongst your devices.
* 🙌 **Share your Data** …by giving others access to the stuff you want them to see or to collaborate with.
* 🚀 **Expandable with hundreds of Apps** ...like [Calendar](https://github.com/nextcloud/calendar), [Contacts](https://github.com/nextcloud/contacts), [Mail](https://github.com/nextcloud/mail), [Video Chat](https://github.com/nextcloud/spreed) and all those you can discover in our [App Store](https://apps.nextcloud.com)
* 🔒 **Security** with our encryption mechanisms, [HackerOne bounty program](https://hackerone.com/nextcloud) and two-factor authentication.

You want to learn more about how you can use Nextcloud to access, share and protect your files, calendars, contacts, communication & more at home and at your organization? [**Learn about all our Features**](https://nextcloud.com/athome/).

## Get your Nextcloud 🚚

- ☑️ [**Simply sign up**](https://nextcloud.com/signup/) at one of our providers either through our website or through the apps directly.
- 🖥 [**Install** a server by yourself](https://nextcloud.com/install/#instructions-server) on your own hardware or by using one of our ready to use **appliances**
- 📦 Buy one of the [awesome **devices** coming with a preinstalled Nextcloud](https://nextcloud.com/devices/)
- 🏢 Find a [service **provider**](https://nextcloud.com/providers/) who hosts Nextcloud for you or your company

Enterprise? Public Sector or Education user? You may want to have a look into [**Nextcloud Enterprise**](https://nextcloud.com/enterprise/) provided by Nextcloud GmbH.

## Get in touch 💬

* [📋 Forum](https://help.nextcloud.com)
* [👥 Facebook](https://www.facebook.com/nextclouders)
* [🐣 Twitter](https://twitter.com/Nextclouders)
* [🐘 Mastodon](https://mastodon.xyz/@nextcloud)

You can also [get support for Nextcloud](https://nextcloud.com/support)!

## Reset password
Nextcloud does not support password resets from environment variables. If you want to change your password run the following commands in your terminal:
    
```bash
sudo docker exec -u www-data -it nextcloud_migrated-nextcloud-1 /bin/bash
php occ user:resetpassword username
```

![](https://raw.githubusercontent.com/nextcloud/screenshots/master/files/Files%20Sharing.png)

# ⛺ Runtipi Note - 2026
The version of this app is currently not aligned with the latest avaible: 32.
Since Nextcloud requires to be upgraded step-by-step (you can  only update to the next major and can't skip iterations),  we will be rolling out a major update version every month until we catch up with the latest version.

## Tips
- Remember to backup your data !
- After an upgrade you should check the admin panel for warnings.
- You can **ignore** an update if you are not ready. *(but don't delay it too much)*
- If you missed an intermediate version you can use a "user-config" to catch up.

### User-Config example
here is an example to set nextcloud to version 30:
``` yaml
services:
 nextcloud:
   image: nextcloud:30-apache
```

### Useful command
In some cases (like restoring an old installation) you could meet an error mentionning files permissions.

1. Access your Runtipi host command line
2. Go to your Runtipi installation directory
```bash
cd runtipi
```
3. Fix the files ownership
```bash
chown -R www-data:www-data app-data/migrated/nextcloud/data/nextcloud/
```
