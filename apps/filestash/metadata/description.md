## Configure the Dropbox connector

Configuring Dropbox must be done by:

1.  requesting access to the Dropbox API. Without this, Filestash can’t access anything stored on the Dropbox servers. To do that, go [there](https://www.dropbox.com/developers/apps/), then:
    -   click: “Create App”
    -   select: “dropbox api”
    -   select: “Full Dropbox” or “App folder”
    -   type: “whatever name you want”
    -   in the ‘redirect URI’ field, insert https://example.com/login
2.  store the `client_id` configuration given by Dropbox (also known as the `App key`) in the admin console or by setting the `DROPBOX_CLIENT_ID` environment variable

## Configure the Google Drive connector

Configuring Google drive can be done by:

1.  Requesting access to the Google Drive API. Without this, Filestash cannot store anything on Google’s servers. To do that, you need to [go there](https://console.developers.google.com/apis/api/drive.googleapis.com/overview) and enable the Drive API. Then, go [there](https://console.developers.google.com/apis/credentials/oauthclient) and create credentials that Filestash will be using to communicate with Google
2.  Publish the configuration provided by Google (`client_id` and `client_secret`) in your Filestash admin console or by setting the `GDRIVE_CLIENT_ID` and `GDRIVE_CLIENT_SECRET` environment variables

--- 

[![screenshot](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo.jpg)](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo.jpg)

 [![](https://camo.githubusercontent.com/189498ada91da90bbdb4744c08cc65e8967890ff749389ddec490402333890e8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6e7472696275746f72732f6d69636b61656c2d6b65726a65616e2f66696c657374617368)](https://github.com/mickael-kerjean/contributors)[![](https://camo.githubusercontent.com/437c9de456499e8dda9d0ec3a4477b6b75655dc94d19986e17810fe0098781bc/68747470733a2f2f696d672e736869656c64732e696f2f6f70656e636f6c6c6563746976652f6261636b6572732f66696c657374617368) ](https://opencollective.com/filestash)[![](https://camo.githubusercontent.com/e8018d8ef35a1fd24b3740ca55507ac58f58b20be2a676f59f44ac08cb7ed780/68747470733a2f2f696d672e736869656c64732e696f2f6f70656e636f6c6c6563746976652f73706f6e736f72732f66696c657374617368) ](https://opencollective.com/filestash)[![](https://camo.githubusercontent.com/53f6b0e53320b9f7669819bc0bb281ea1a3d4a648c3611a7a669dbd1b58da7aa/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f70756c6c732f6d616368696e65732f66696c657374617368)](https://hub.docker.com/r/machines/filestash)  
 [![](https://github.com/mickael-kerjean/filestash/actions/workflows/ci.yml/badge.svg)](https://github.com/mickael-kerjean/filestash#)[![](https://camo.githubusercontent.com/bc51a239b32cd20f21e82567ceb3d68a589ba2a61c38d1138ee9ad3eb160950a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4952432d25323366696c6573746173682d627269676874677265656e2e737667)](https://kiwiirc.com/nextclient/#irc://irc.libera.chat/#filestash?nick=guest??)

A Dropbox-like file manager that let you manage your data anywhere it is located:  
[FTP](https://www.filestash.app/ftp-client.html) • FTPS • [SFTP](https://www.filestash.app/ssh-file-transfer.html) • [WebDAV](https://www.filestash.app/webdav-client.html) • Git • [S3](https://www.filestash.app/s3-browser.html) • NFS • Samba • Artifactory • [LDAP](https://www.filestash.app/ldap-browser.html) • Mysql  
Storj • CardDAV • CalDAV • Backblaze B2 • [Minio](https://www.filestash.app/s3-browser.html)  
Dropbox • Google Drive

# [](https://github.com/mickael-kerjean/filestash#features)Features

-   Manage your files from a browser
-   Authentication middleware to connect to various source of user
-   Flexible Share mechanism
-   Chromecast support for images, music, and videos
-   Video player
-   Video transcoding (mov, mkv, avi, mpeg, and more)
-   Image viewer
-   Image transcoding (raw images from Nikon, Canon, and more)
-   Photo management
-   Audio player
-   Shared links are full fledge network drive
-   Office documents (docx, xlsx and more)
-   Full org mode client ([documentation](https://www.filestash.app/2018/05/31/release-note-v0.1/))
-   User friendly
-   Mobile friendly
-   Customisable
-   Plugins
-   Super fast
-   Upload files and folders
-   Download as zip
-   Multiple cloud providers and protocols, easily extensible
-   Nyan cat loader
-   Quick access: frequently access folders are pin to the homepage
-   Emacs, VIM or Sublime keybindings `;)`
-   Search
-   .. and many more

# Documentation

-   [Getting started](https://www.filestash.app/docs/)
-   [Installation](https://www.filestash.app/docs/install-and-upgrade/)
-   [FAQ](https://www.filestash.app/docs/faq/)

# Screenshots

 [![user experience on navigation](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/navigation.gif)](https://demo.filestash.app)[![user experience on navigation](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/navigation.gif)

](https://demo.filestash.app/)[](https://demo.filestash.app/)

 [![user experience on medias](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo_management.gif)](http://demo.filestash.app)[![user experience on medias](https://raw.githubusercontent.com/mickael-kerjean/filestash_images/master/.assets/photo_management.gif)

](http://demo.filestash.app/)[](http://demo.filestash.app/)
\