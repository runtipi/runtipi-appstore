# Fork Notice

This app uses a [community fork of MinIO](https://github.com/pgsty/silo) with the `latest` tag, as the original has been discontinued.

# SILO - Open Source Object Storage

Host your own Amazon S3 compatible Object Storage!

## Installation Info

This SILO setup requires two exposed URLS

- The console URL
- The S3 API URL

While the console URL is defined by the runtipi's default expose URL you need to define the S3 API URL in the settings when installing.

**Example:**

- API: SILO S3 API URL: s3.mydomain.com
- Console: Exposed URL: silo.mydomain.com

| Exposed Service     | Local Port | Exposed Domain     |
| ------------------- | ---------- | ------------------ |
| SILO API           | IP:8000    | s3.mydomain.com    |
| SILO Admin Console | IP:8001    | silo.mydomain.com |

## About

SILO is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with Amazon S3 cloud storage service. Use SILO to build high performance infrastructure for machine learning, analytics and application data workloads.

See https://github.com/pgsty/silo for more details
