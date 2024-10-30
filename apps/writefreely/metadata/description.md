&nbsp;
<p align="center">
	<a href="https://writefreely.org"><img src="https://writefreely.org/img/writefreely.svg" width="350px" alt="WriteFreely" /></a>
</p>
<hr />
&nbsp;

WriteFreely is a clean, minimalist publishing platform made for writers. Start a blog, share knowledge within your organization, or build a community around the shared act of writing.

![](https://i.snap.as/cQZxXoz.png)

[Try the writing experience](https://write.as/new)

---

## Admin Creation

You will likely want to create an admin account after installation. You can do
that by using the container's terminal to run the following command:

```bash
writefreely -c /mnt/config/etc/writefreely.ini --create-admin [username]:[password]
```

This will create your initial admin user account.

---

## Features

### Made for writing

Built on a plain, auto-saving editor, WriteFreely gives you a distraction-free writing environment. Once published, your words are front and center, and easy to read.

### A connected community

Start writing together, publicly or privately. Connect with other communities, whether running WriteFreely, [Plume](https://joinplu.me/), or other ActivityPub-powered software. And bring members on board from your existing platforms, thanks to our OAuth 2.0 support.

### Intuitive organization

Categorize articles [with hashtags](https://writefreely.org/docs/latest/writer/hashtags), and create static pages from normal posts by [_pinning_ them](https://writefreely.org/docs/latest/writer/static) to your blog. Create draft posts and publish to multiple blogs from one account.

### International

Blog elements are localized in 20+ languages, and WriteFreely includes first-class support for non-Latin and right-to-left (RTL) script languages.

### Private by default

WriteFreely collects minimal data, and never publicizes more than a writer consents to. Writers can seamlessly create multiple blogs from a single account for different pen names or purposes without publicly revealing their association.
<hr />


### Server Configuration

There are some important configuration files you need to be aware of and potentially customize.


| Path                         |
|-------------------------------------|
| /runtipi/app-data/write-freely/config/etc/writefreely.ini |
| /runtipi/app-data/write-freely/config/www/writefreely/*      |



Modifications to these files will require a service restart to pull in the changes made.
