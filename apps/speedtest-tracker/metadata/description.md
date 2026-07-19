# Speedtest Tracker

Speedtest Tracker is a self-hosted internet performance monitoring application that runs regular tests against Ookla's Speedtest service and stores the results over time. It helps you build a history of your connection quality so you can detect slowdowns, outages, or periods where your ISP is not delivering the expected speeds.

## About

![Speedtest Tracker Dashboard](https://F3367574858-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fvtb3s6TB12XY9iIx8YyJ%2Fuploads%2Fgit-blob-2896fa80b8d3f90cc8c4c495b8b9793af5f62244%2Fimage%20(2).png?alt=media&width=768&dpr=4&quality=100&sign=d549885e&sv=1)

A self-hosted app to check your internet speed using Ookla's Speedtest service and track its history. Built using Laravel and the Speedtest CLI.


Official documentation is available here: [https://docs.speedtest-tracker.dev/](https://docs.speedtest-tracker.dev/)

## Configuration

### Authentication

During the first start of the application, a default admin account is created.

| Username | Password |
| --- | --- |
| `admin@example.com` | `password` |

These default credentials should be changed after the first login.

***

### SPEEDTEST_APP_KEY

This is the Laravel application key used by Speedtest Tracker to encrypt and decrypt sensitive data such as sessions and other internal application data. It is required for the application to start correctly. If the key is missing, malformed, or has the wrong length, the app may fail with a `500` error such as `Unsupported cipher or incorrect key length`.

**Important:** this value must be a valid Base64 application key prefixed with `base64:`. Do not use a custom string, do not shorten it, and do not force a fixed character count.

Generate it with one of these commands:

```bash
echo "base64:$(openssl rand -base64 32 2>/dev/null)"
```

Example:

```text
base64:5gExIXkD//VXbU/8wZ8xcF2uTHnvrDd6QTrTDZPWDdQ=
```

***

### SPEEDTEST_TRACKER_DB_PASSWORD

If you use PostgreSQL for Speedtest Tracker, this is the password for the database user. It should be a strong random value.

If you use SQLite instead, this variable is not required. SQLite is supported by Speedtest Tracker as one of its database drivers.

***

### SPEEDTEST_SCHEDULE

This field defines how often Speedtest Tracker runs tests. It uses standard cron syntax. The default value `30 * * * *` runs a test once every hour at minute 30.

Examples:
- `*/30 * * * *` = every 30 minutes
- `0 * * * *` = every hour
- `0 */6 * * *` = every 6 hours

A helpful reference is [Crontab Guru](https://crontab.guru).

***

### SPEEDTEST_SERVERS

This optional field allows you to force one or more specific Speedtest server IDs, separated by commas. If left empty, Speedtest Tracker will automatically select a server.

To find server IDs, you can use either of these official/public endpoints:

1. Open [https://www.speedtest.net/api/js/servers](https://www.speedtest.net/api/js/servers) to browse the server list referenced in the Speedtest Tracker documentation.
2. Or open [https://www.speedtest.net/speedtest-servers-static.php](https://www.speedtest.net/speedtest-servers-static.php), which exposes a public XML list of servers and their attributes including `id`.
3. Search for a server near your location or preferred provider.
4. Copy the server `id` value.
5. Enter one or more IDs separated by commas, for example: `1234,5678,9012`.
