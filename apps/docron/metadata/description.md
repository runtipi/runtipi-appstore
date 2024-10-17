# Docron

Docron is a scheduling tool designed to automate the start, stop and restart of Docker containers based on user-defined schedules. With a simple interface, it streamlines container management.

## Reasoning

I created this application to provide an alternative for users who are not comfortable using `crontab` or those who prefer not to modify system files. Docron runs in its own container, with access only to its resources and other containers via the Docker API. I haven't found any existing solutions that offer this functionality, but I may have overlooked some.

## How to Use

### Docker Run

If you prefer a one-off command to start a container, use the following code:

```shell
docker run -d \
  --name docron \
  -p 8080:8080 \
  -e DOCKER_CONNECTION=unix:///var/run/docker.sock \
  -e DB='Data Source=/data/docron.db;' \
  -e KEY_PATH='/data/keys' \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v /<yourDBFolder>/:/data \
  ghcr.io/primez/docron:latest
```

### Docker Compose
Alternatively, a Docker Compose file might look like this:
```shell
services:
  docron:
    image: ghcr.io/primez/docron:latest
    container_name: docron
    ports:
      - 8080:8080
    environment:
      - DOCKER_CONNECTION=unix:///var/run/docker.sock
      - DB=Data Source=/data/docron.db;
      - KEY_PATH=/data/keys
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /<yourFolder>/:/data
```

### Parameters
`Docron` expects the following parameters to function properly:
- **ENV**: `DOCKER_CONNECTION` - This is the address that `Docron` will use to connect and gather information about containers for start/stop operations. If this parameter is not provided, it will default to a `Docker for Windows` environment.
- **ENV**: `DB` - `Docron` uses `SQLite` to store schedules. To store the database in a mounted volume, provide this parameter. Otherwise, the database will be created inside the container.
- **ENV**: `KEY_PATH` - `Docron` stores anti-forgery keys here. Any path within a container will work, but it is better to provide a path to a mounted volume.
- **VOL**: `<yourDBFolder>` - If you want to persist the database between container updates, specify a host folder path to be mounted.

### Screenshots
Here are a few screenshots of the UI:
![1](https://github.com/user-attachments/assets/4edb973a-2152-4386-8c98-c59564c2b862)
![2](https://github.com/user-attachments/assets/c739571b-a0ec-4da8-a819-15095f1db7dc)
![3](https://github.com/user-attachments/assets/860bd79b-0892-46fb-b658-8343cb47713b)