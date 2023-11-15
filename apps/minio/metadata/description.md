# Minio - Open Source Object Storage
Host your own Amazon S3 compatible Object Storage!


## !! Installation Info !!

This MinIO setup requires two exposed URLS
- The console URL
- The S3 API URL

While the console URL is defined by the tipi's default expose URL you need to define the S§ API URL in the settings while install.

**Example:**

- API: Minio S3 API URL: s3.mydomain.com
- Console: Exposed URL: minio.mydomain.com

| Exposed Service      | Local Port | Exposed Domain      |
|----------------------|------------|---------------------|
| Minio API | IP:8000    | s3.mydomain.com         |
| Minio Admin Console  | IP:8001  | minio.mydomain.com |


## About

![screenshot](https://raw.githubusercontent.com/minio/minio/master/.github/logo.svg?sanitize=true)

MinIO is a High Performance Object Storage released under GNU Affero General Public License v3.0. It is API compatible with Amazon S3 cloud storage service. Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads.


See https://github.com/minio/minio for more details
