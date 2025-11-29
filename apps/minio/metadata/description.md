# ⚠️ Long-term deprecation Notice

The team behind Minio decided to stop providing [Docker images](https://github.com/minio/minio/issues/21647#issuecomment-3439134621) for the Community Edition.
This follows a removing of the GUI a few version earlier.

In this regard we can't provide support.
This app will now use a [community build](https://github.com/golithus/minio-builds) with the `latest` tag.

In this state we can't recommand using Minio and we encourage you to look for an alternative.

# Minio - Open Source Object Storage

Host your own Amazon S3 compatible Object Storage!

## Installation Info

This MinIO setup requires two exposed URLS

- The console URL
- The S3 API URL

While the console URL is defined by the runtipi's default expose URL you need to define the S3 API URL in the settings when installing.

**Example:**

- API: Minio S3 API URL: s3.mydomain.com
- Console: Exposed URL: minio.mydomain.com

| Exposed Service     | Local Port | Exposed Domain     |
| ------------------- | ---------- | ------------------ |
| Minio API           | IP:8000    | s3.mydomain.com    |
| Minio Admin Console | IP:8001    | minio.mydomain.com |

## About

MinIO is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with Amazon S3 cloud storage service. Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads.

See https://github.com/minio/minio for more details
