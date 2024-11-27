# Speedtest Tracker

Speedtest Tracker is a self-hosted internet performance tracking application that runs speedtest checks against Ookla's Speedtest service.

## About

![v0.20.6 Speedtest Tracker Dashboard](https://F3367574858-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fvtb3s6TB12XY9iIx8YyJ%4Fuploads%2Fgit-blob-2896fa80b8d3f90cc8c4c495b8b9793af5f62244%2Fimage%20(2).png?alt=media&width=768&dpr=4&quality=100&sign=d549885e&sv=1)

A self-hosted app to check your internet speed using Ookla's Speedtest service and track its history. Built using Laravel and the Speedtest CLI.

The main use case for Speedtest Tracker is to build a history of your internet's performance so that you can be informed when you're not receiving your ISP's advertised rates.

_...also some of us just like a lot of data._

These docs are up-to-date for version: `v0.21.2`

## Configuration

### Authentication

Speedtest Tracker uses Filament for the admin panel. During the install process an admin account is created for you.

Default User Account
| Username | Password |
| --- | --- |
| `admin@example.com`| `password` |

---

### SPEEDTEST_TRACKER_DB_PASSWORD

This is the password for the PostgreSQL database used by Speedtest Tracker. It's automatically generated and should be a secure, random string of at least 32 characters.

### SPEEDTEST_APP_KEY

This is the application key used by Laravel for encryption and other security features. You can retrieve one at the [Speedtest Tracker](https://speedtest-tracker.dev) site.

### SPEEDTEST_SCHEDULE (cron format)

This field allows you to set the schedule for running speed tests. It uses cron syntax. The default value is `30 * * * *`, which runs a test every 30 minutes. You can adjust this to your preferred frequency. [Crontab Guru](https://crontab.guru) is a good resource.

### SPEEDTEST_SERVERS (comma-separated IDs)

Specify Speedtest servers to use for your tests. Enter one or more server IDs, separated by commas. To find server IDs, you can use the following method:

1. Open your web browser and navigate to [Speedtest.net's Servers page](https://www.speedtest.net/speedtest-servers.php)
2. This page will display a list of Speedtest servers along with their IDs, names, sponsors, and locations.
3. Find the server(s) you want to use and note down their IDs.
4. Enter these IDs in the Speedtest Servers field, separated by commas (e.g., "1234,5678,9012").

