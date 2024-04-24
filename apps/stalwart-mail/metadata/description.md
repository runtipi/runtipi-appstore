## Stalwart Mail server

Stalwart is a scalable, secure and robust open-source mail server software designed for the 21st century.

### Admin Password

See [Log in to the web interface](https://stalw.art/docs/install/docker#log-in-to-the-web-interface) to know how to get the admin password.

### Screenshots

<img src="https://github.com/stalwartlabs/mail-server/blob/main/img/screencast-setup.gif?raw=true" alt="Stalwart Mail Server setup screencast"><br>

### Features

**Stalwart Mail Server** is an open-source mail server solution with JMAP, IMAP4, and SMTP support and a wide range of modern features. It is written in Rust and designed to be secure, fast, robust and scalable.

Key features:

- **JMAP** server:
  - JMAP Core ([RFC 8620](https://datatracker.ietf.org/doc/html/rfc8620))
  - JMAP Mail ([RFC 8621](https://datatracker.ietf.org/doc/html/rfc8621))
  - JMAP for Sieve Scripts ([DRAFT-SIEVE-19](https://www.ietf.org/archive/id/draft-ietf-jmap-sieve-19.html))
  - JMAP over WebSocket ([RFC 8887](https://datatracker.ietf.org/doc/html/rfc8887)), JMAP Blob Management ([RFC 9404](https://www.rfc-editor.org/rfc/rfc9404.html)) and JMAP for Quotas ([RFC 9425](https://www.rfc-editor.org/rfc/rfc9425.html)) extensions.
- **IMAP4** server:
  - IMAP4rev2 ([RFC 9051](https://datatracker.ietf.org/doc/html/rfc9051)) full compliance.
  - IMAP4rev1 ([RFC 3501](https://datatracker.ietf.org/doc/html/rfc3501)) backwards compatible.
  - ManageSieve ([RFC 5804](https://datatracker.ietf.org/doc/html/rfc5804)) server.
  - Numerous [extensions](https://stalw.art/docs/development/rfcs#imap4-and-extensions) supported.
- **SMTP** server:
  - Built-in [DMARC](https://datatracker.ietf.org/doc/html/rfc7489), [DKIM](https://datatracker.ietf.org/doc/html/rfc6376), [SPF](https://datatracker.ietf.org/doc/html/rfc7208) and [ARC](https://datatracker.ietf.org/doc/html/rfc8617) support for message authentication.
  - Strong transport security through [DANE](https://datatracker.ietf.org/doc/html/rfc6698), [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461) and [SMTP TLS](https://datatracker.ietf.org/doc/html/rfc8460) reporting.
  - Inbound throttling and filtering with granular configuration rules, sieve scripting and milter integration.
  - Distributed virtual queues with delayed delivery, priority delivery, quotas, routing rules and throttling support.
  - Envelope rewriting and message modification.
- **Spam and Phishing** filter:
  - Comprehensive set of filtering **rules** on par with popular solutions.
  - Statistical **spam classifier** with automatic training capabilities.
  - DNS Blocklists (**DNSBLs**) checking of IP addresses, domains, and hashes.
  - Collaborative digest-based spam filtering with **Pyzor**.
  - **Phishing** protection against homographic URL attacks, sender spoofing and other techniques.
  - Trusted **reply** tracking to recognize and prioritize genuine e-mail replies.
  - Sender **reputation** monitoring by IP address, ASN, domain and email address.
  - **Greylisting** to temporarily defer unknown senders.
  - **Spam traps** to set up decoy email addresses that catch and analyze spam.
- **Flexible and scalable**:
  - Pluggable storage backends with **RocksDB**, **FoundationDB**, **PostgreSQL**, **mySQL**, **SQLite**, **S3-Compatible**, **Redis** and **ElasticSearch** support.
  - Built-in, **LDAP** or **SQL** authentication backend support.
  - Full-text search available in 17 languages.
  - Disk quotas.
  - Sieve scripting language with support for all [registered extensions](https://www.iana.org/assignments/sieve-extensions/sieve-extensions.xhtml).
  - Email aliases, mailing lists, subaddressing and catch-all addresses support.
  - Integration with **OpenTelemetry** to enable monitoring, tracing, and performance analysis.
- **Web-based administration**:
  - Account, domain, group and mailing list management.
  - SMTP queue management for messages and outbound DMARC and TLS reports.
  - Report visualization interface for received DMARC, TLS-RPT and Failure (ARF) reports.
  - Configuration of every aspect of the mail server.
  - Log viewer with search and filtering capabilities.
  - Self-service portal for password reset and encryption-at-rest key management.
- **Secure and robust**:
  - Encryption at rest with **S/MIME** or **OpenPGP**.
  - Automatic TLS certificate provisioning with [ACME](https://datatracker.ietf.org/doc/html/rfc8555).
  - OAuth 2.0 [authorization code](https://www.rfc-editor.org/rfc/rfc8628) and [device authorization](https://www.rfc-editor.org/rfc/rfc8628) flows.
  - Automated blocking of hosts that cause multiple authentication errors (aka **fail2ban**).
  - Access Control Lists (ACLs).
  - Rate limiting.
  - Security audited (read the [report](https://stalw.art/blog/security-audit)).
  - Memory safe (thanks to Rust).
