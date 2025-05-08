# Docker image for Headwind MDM

Headwind MDM is an open source mobile device management software for Android 
devices. It has been originally designed for Ubuntu Linux. This image helps
to run Headwind MDM on any Linux.

Headwind MDM project URL: https://h-mdm.com

## TL;DR

For a quick start, proceed directly to the ["Running with the most common options by Docker Compose"](#quickstart) section.

## Summary

The image is based on Ubuntu 22.04 and Tomcat 9.

It doesn't include PostgreSQL and certbot, so they need to be started in
separate containers or on the host machine.

As an alternative, you can use docker-compose to run Headwind MDM and all 
required packages (certbot, PostgreSQL) on a fresh virtual machine with the 
most common options (see below).

## Building the image from the source code

Before building the image, review the default variables (in particular the 
Headwind MDM URL) in the Dockerfile and change them if required.

The build command is:

    docker build -t headwindmdm/hmdm:0.1.5 .

## Prerequisites

1. Create the PostgreSQL database for Headwind MDM, and use the environment
variables SQL_HOST, SQL_BASE, SQL_USER, SQL_PASS to define the database access
credentials.

Default values are: SQL_HOST=localhost, SQL_BASE=hmdm, SQL_USER=hmdm,
SQL_PASS=topsecret

2. If you want to use HTTPS, install certbot and generate the certificate for
the domain where Headwind MDM should be installed.

    certbot certonly --standalone --force-renewal -d your-mdm-domain.com 

## Running the Docker container

**Works with the external PostgreSQL database only. Default database installation on localhost DOES NOT WORK!**

**Please set up your domain name when running Headwind MDM!**

To create the container, use the command:

    docker run -d -p 443:8443 -p 31000:31000 -e SQL_HOST=database.host -e SQL_BASE=hmdm -e SQL_USER=hmdm -e SQL_PASS=password -e BASE_DOMAIN=build.h-mdm.com -v /etc/letsencrypt:/etc/letsencrypt -v $(pwd)/volumes/work:/usr/local/tomcat/work --name="hmdm" headwindmdm/hmdm:0.1.5

If everything is fine, Headwind MDM will become available via the url 
`https://your-mdm-domain.com` in a few seconds. 

To view logs, use the command:

    docker logs hmdm

Stop and start the container:

    docker stop hmdm
    docker start hmdm

Connect to the container for debugging:

    docker exec -it hmdm /bin/bash

## Configuration of Headwind MDM

The container is configured by the environment variables.

The full list of variables can be found in the Dockerfile.

## First start and subsequent starts

At first start, Headwind MDM performs the initialization:

  - Creates the config files using the environment
  - Initializes the database
  - Converts the LetsEncrypt's (or your own) SSL certificates to a JKS keystore

Subsequent starts of the container skip this step, but you can force the
configuration renewal by setting the following environment variable:

FORCE_RECONFIGURE=true

When this variable is set to true, the configuration is always re-created by the
Headwind MDM entry point script. 

<a id="quickstart"></a>
## Running with the most common options by Docker Compose

Docker-Compose requires just two files to start Headwind MDM: 
    .env
    docker-compose.yaml

For a simple start of Headwind MDM on a fresh virtual machine, run the 
following commands.

    apt install -y docker-compose
    cd hmdm-docker
    cp .env.example .env
    vim .env              # Replace ADMIN_EMAIL and BASE_DOMAIN to your values
    docker-compose up

The command `docker-compose up` will start Headwind MDM in the interactive 
mode where you can easily trace and fix errors.

Once Headwind MDM start is successful, you can start it in the background
(detached) mode by using the command:

    docker-compose up -d

To view logs, use the command:

    docker-compose logs hmdm -f

To stop (but not remove) the service, use the command:

    docker-compose stop

## Using this Docker container with the Premium version

To run Premium version, you need to change the HMDM_VARIANT, DOWNLOAD_CREDENTIALS
and HMDM_URL variables in the .env file. To get the trial URLs, credentials and
license keys, please fill the form at

https://h-mdm.com/contact-us/

## Attaching to the container

You may need to attach to the container to change the Headwind MDM configuration
in order to adjust some advanced settings.

To find the container ID, use the command

    docker ps

Find the container ID of the image headwindmdm/hmdm:0.1.5, then run the command

    docker exec -it containerid /bin/bash

For example:

    docker exec -it e81d47acec21 /bin/bash

Notice: the container needs to be started before attaching to it.

## Resetting the container

If something goes wrong, you may wish to reset the container and reinstall it 
from scratch. The command 

    docker-compose down
    
may not be enough, as it doesn't clear the downloaded files and initialized 
database.

To wipe all data, remove all entries in the `volumes` subdirectory:

    rm -rf volumes/db volumes/work
    
(we recommend to keep the `volumes/letsencrypt` subdirectory to avoid problems
with exceeding the LetsEncrypt certificate generation threshold).

There is also an interactive script removing the data:

    ./remove-all.sh

As an alternative, you can set the parameter in the .env file:

    FORCE_RECONFIGURE=true
    
Important: this parameter should be unset after the initial setup, otherwise
you may lose the application settings.

## Configuring Headwind MDM

The Headwind MDM config file is mapped to `volumes/hmdm-config/ROOT.xml`. 

Restarting the container applies the changes. To avoid loss of changes, make sure 
the `FORCE_RECONFIGURE` flag is not set in the `.env` file (this flag forces 
the container to reset the XML config file to its default state).

## Using custom SSL certificates in Docker Compose

To use custom SSL certificates

- Comment out the whole certbot: section in docker-compose.yaml
- Create the subdirectory ./volumes/letsencrypt/live/your-domain.com/
- Copy the private key, certificate, and full certificate chain
- in the PEM (base64) format to that subdirectory. Use the following names:
- cert.pem, fullchain.pem, privkey.pem

To use plain HTTP, edit the contents of the docker-compose.yaml:

- Comment out the certbot: section
- Uncomment the port 80 forwarding
- Set the environment variable in the .env file: PROTOCOL=http
