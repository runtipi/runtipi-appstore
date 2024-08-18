# SFTPGo

Fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support.
Several storage backends are supported: local filesystem, encrypted local filesystem, S3 (compatible) Object Storage, Google Cloud Storage, Azure Blob Storage, SFTP.

## Support policy

SFTPGo is an Open Source project and you can of course use it for free but please don't ask for free support as well.

We will check the reported issues to see if you are experiencing a bug and if so, it may or may not be fixed, we only provide support to project [sponsors/donors](#sponsors).

If you report an invalid issue or ask for step-by-step support, your issue will remain open with no answer or will be closed as invalid without further explanation. Thanks for understanding.

## Features

- Support for serving local filesystem, encrypted local filesystem, S3 Compatible Object Storage, Google Cloud Storage, Azure Blob Storage or other SFTP accounts over SFTP/SCP/FTP/WebDAV.
- Virtual folders are supported: a virtual folder can use any of the supported storage backends. So you can have, for example, a user with the S3 backend mapping a GCS bucket (or part of it) on a specified path and an encrypted local filesystem on another one. Virtual folders can be private or shared among multiple users, for shared virtual folders you can define different quota limits for each user.
- Configurable [custom commands and/or HTTP hooks](https://github.com/drakkan/sftpgo/tree/main/docs/custom-actions.md) on upload, pre-upload, download, pre-download, delete, pre-delete, rename, mkdir, rmdir on SSH commands and on user add, update and delete.
- Virtual accounts stored within a "data provider".
- SQLite, MySQL, PostgreSQL, CockroachDB, Bolt (key/value store in pure Go) and in-memory data providers are supported.
- Chroot isolation for local accounts. Cloud-based accounts can be restricted to a certain base path.
- Per-user and per-directory virtual permissions, for each path you can allow or deny: directory listing, upload, overwrite, download, delete, rename, create directories, create symlinks, change owner/group/file mode and modification time.
- [REST API](https://github.com/drakkan/sftpgo/tree/main/docs/rest-api.md) for users and folders management, data retention, backup, restore and real time reports of the active connections with possibility of forcibly closing a connection.
- The [Event Manager](https://github.com/drakkan/sftpgo/tree/main/docs/eventmanager.md) allows to define custom workflows based on server events or schedules.
- [Web based administration interface](https://github.com/drakkan/sftpgo/tree/main/docs/web-admin.md) to easily manage users, folders and connections.
- [Web client interface](https://github.com/drakkan/sftpgo/tree/main/docs/web-client.md) so that end users can change their credentials, manage and share their files in the browser.
- Public key and password authentication. Multiple public keys per-user are supported.
- SSH user [certificate authentication](https://cvsweb.openbsd.org/src/usr.bin/ssh/PROTOCOL.certkeys?rev=1.8).
- Keyboard interactive authentication. You can easily setup a customizable multi-factor authentication.
- Partial authentication. You can configure multi-step authentication requiring, for example, the user password after successful public key authentication.
- Per-user authentication methods.
- [Two-factor authentication](https://github.com/drakkan/sftpgo/tree/main/docs/howto/two-factor-authentication.md) based on time-based one time passwords (RFC 6238) which works with Authy, Google Authenticator, Microsoft Authenticator and other compatible apps.
- LDAP/Active Directory authentication using a [plugin](https://github.com/sftpgo/sftpgo-plugin-auth).
- Simplified user administrations using [groups](https://github.com/drakkan/sftpgo/tree/main/docs/groups.md).
- [Roles](https://github.com/drakkan/sftpgo/tree/main/docs/roles.md) allow to create limited administrators who can only create and manage users with their role.
- Custom authentication via [external programs/HTTP API](https://github.com/drakkan/sftpgo/tree/main/docs/external-auth.md).
- Web Client and Web Admin user interfaces support [OpenID Connect](https://openid.net/connect/) authentication and so they can be integrated with identity providers such as [Keycloak](https://www.keycloak.org/). You can find more details [here](https://github.com/drakkan/sftpgo/tree/main/docs/oidc.md).
- [Data At Rest Encryption](https://github.com/drakkan/sftpgo/tree/main/docs/dare.md).
- Dynamic user modification before login via [external programs/HTTP API](https://github.com/drakkan/sftpgo/tree/main/docs/dynamic-user-mod.md).
- Quota support: accounts can have individual disk quota expressed as max total size and/or max number of files.
- Bandwidth throttling, with separate settings for upload and download and overrides based on the client's IP address.
- Data transfer bandwidth limits, with total limit or separate settings for uploads and downloads and overrides based on the client's IP address. Limits can be reset using the REST API.
- Per-protocol [rate limiting](https://github.com/drakkan/sftpgo/tree/main/docs/rate-limiting.md) is supported and can be optionally connected to the built-in defender to automatically block hosts that repeatedly exceed the configured limit.
- Per-user maximum concurrent sessions.
- Per-user and global IP filters: login can be restricted to specific ranges of IP addresses or to a specific IP address.
- Per-user and per-directory shell like patterns filters: files can be allowed, denied and optionally hidden based on shell like patterns.
- Automatically terminating idle connections.
- Automatic blocklist management using the built-in [defender](https://github.com/drakkan/sftpgo/tree/main/docs/defender.md).
- Geo-IP filtering using a [plugin](https://github.com/sftpgo/sftpgo-plugin-geoipfilter).
- Atomic uploads are configurable.
- Per-user files/folders ownership mapping: you can map all the users to the system account that runs SFTPGo (all platforms are supported) or you can run SFTPGo as root user and map each user or group of users to a different system account (\*NIX only).
- Support for Git repositories over SSH.
- SCP and rsync are supported.
- FTP/S is supported. You can configure the FTP service to require TLS for both control and data connections.
- [WebDAV](https://github.com/drakkan/sftpgo/tree/main/docs/webdav.md) is supported.
- ACME protocol is supported. SFTPGo can obtain and automatically renew TLS certificates for HTTPS, WebDAV and FTPS from `Let's Encrypt` or other ACME compliant certificate authorities, using the `HTTP-01` or `TLS-ALPN-01` [challenge types](https://letsencrypt.org/docs/challenge-types/).
- Two-Way TLS authentication, aka TLS with client certificate authentication, is supported for REST API/Web Admin, FTPS and WebDAV over HTTPS.
- Per-user protocols restrictions. You can configure the allowed protocols (SSH/HTTP/FTP/WebDAV) for each user.
- [Prometheus metrics](https://github.com/drakkan/sftpgo/tree/main/docs/metrics.md) are supported.
- Support for HAProxy PROXY protocol: you can proxy and/or load balance the SFTP/SCP/FTP service without losing the information about the client's address.
- Easy [migration](https://github.com/drakkan/sftpgo/tree/main/examples/convertusers) from Linux system user accounts.
- [Portable mode](https://github.com/drakkan/sftpgo/tree/main/docs/portable-mode.md): a convenient way to share a single directory on demand.
- [SFTP subsystem mode](https://github.com/drakkan/sftpgo/tree/main/docs/sftp-subsystem.md): you can use SFTPGo as OpenSSH's SFTP subsystem.
- Performance analysis using built-in [profiler](https://github.com/drakkan/sftpgo/tree/main/docs/profiling.md).
- Configuration format is at your choice: JSON, TOML, YAML, HCL, envfile are supported.
- Log files are accurate and they are saved in the easily parsable JSON format ([more information](https://github.com/drakkan/sftpgo/tree/main/docs/logs.md)).
- SFTPGo supports a [plugin system](https://github.com/drakkan/sftpgo/tree/main/docs/plugins.md) and therefore can be extended using external plugins.
- Infrastructure as Code (IaC) support using the [Terraform provider](https://registry.terraform.io/providers/drakkan/sftpgo/latest).