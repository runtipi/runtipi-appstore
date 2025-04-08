# Default configuration

By default, The template has a few folders mounted

- /backups/runtipi-folder - Tipi Root Folder
- /source - Home Directory

It also have a default password : `changeme`

# Duplicati

Store securely encrypted backups on cloud storage services!

Duplicati is a free, open source, backup client that securely stores encrypted, incremental, compressed backups on cloud storage services and remote file servers. It works with:

_Amazon S3, [IDrive e2](https://www.idrive.com/e2/duplicati 'Using Duplicati with IDrive e2'), [Backblaze (B2)](https://www.backblaze.com/blog/duplicati-backups-cloud-storage/ 'Duplicati with Backblaze B2 Cloud Storage'), Box, Dropbox, FTP, Google Cloud and Drive, HubiC, MEGA, Microsoft Azure and OneDrive, Rackspace Cloud Files, OpenStack Storage (Swift), Sia, Storj DCS, SSH (SFTP), WebDAV, Tencent Cloud Object Storage (COS), [and more!](https://duplicati.readthedocs.io/en/latest/01-introduction/#supported-backends)_

Duplicati is licensed under LGPL and available for Windows, OSX and Linux (.NET 4.7.1+ or Mono 5.10.0+ required).

# [](https://github.com/duplicati/duplicati#support)Support

Duplicati is supported by an [active community and you can reach them via our forum](https://forum.duplicati.com).

We have a great [Duplicati manual](https://docs.duplicati.com) that you can also [contribute to](https://github.com/kees-z/DuplicatiDocs).

# [](https://github.com/duplicati/duplicati#features)Features

- Duplicati uses AES-256 encryption (or GNU Privacy Guard) to secure all data before it is uploaded.
- Duplicati uploads a full backup initially and stores smaller, incremental updates afterwards to save bandwidth and storage space.
- A scheduler keeps backups up-to-date automatically.
- Integrated updater notifies you when a new release is out
- Encrypted backup files are transferred to targets like FTP, Cloudfiles, WebDAV, SSH (SFTP), Amazon S3 and others.
- Duplicati allows backups of folders, document types like e.g. documents or images, or custom filter rules.
- Duplicati is available as application with an easy-to-use user interface and as command line tool.
- Duplicati can make proper backups of opened or locked files using the Volume Snapshot Service (VSS) under Windows or the Logical Volume Manager (LVM) under Linux. This allows Duplicati to back up the Microsoft Outlook PST file while Outlook is running.
- Filters, deletion rules, transfer and bandwidth options, etc

# [](https://github.com/duplicati/duplicati#why-use-duplicati)Why use Duplicati?

Keep your data safe, store it far away, update your backup regularly! This is a simple rule but many backup solutions do not achieve that today. But Duplicati does!

Keep your data safe! Bad guys on the Internet seem to look for interesting data everywhere. But people do not want to see any of their private data revealed anywhere. Duplicati provides strong encryption to make sure that your data looks like garbage to others. With a well chosen password your backup files will be more safe on a public webserver than your unencrypted files at home.

Store your backup far away! The best backup is useless when it is destroyed together with its original data. Just assume that a fire destroys your office - would your backup survive? Duplicati stores backups on various remote file servers and it supports incremental backups so that only changed parts need to be transferred. This makes it easy to use a destination far away from the original data.

Backup regularly! The worst case is that your backup is outdated simply because someone forgot to make a backup at the right time. Duplicati has a built-in scheduler, so that it's easy to have a regular, up-to-date backup. Furthermore, Duplicati uses file compression and is able to store incremental backups to save storage space and bandwidth.

# [](https://github.com/duplicati/duplicati#contributing)
