# Doozle

Dozzle is a small lightweight application with a web based interface to monitor Docker logs. It doesn’t store any log files. It is for live monitoring of your container logs only.

![Screenshot](https://github.com/amir20/dozzle/blob/master/docs/.vitepress/theme/media/poster.jpg?raw=true)

## Features

- Intelligent fuzzy search for container names 🤖
- Search logs using regex 🔦
- Start, stop and restart containers
- Small memory footprint 🏎
- Split screen for viewing multiple logs
- Download logs easy
- Live stats with memory and CPU usage
- Authentication with username and password 🚨

https://github.com/amir20/dozzle

## Credentials

If you choose `simple` as the `Auth provider` the default credentials for the app will be Username `admin` with Password `password`.

To change those credentials, stop the app and change the default settings in `runtipi/app-data/dozzle/data/users.yml`.

```bash
users:
  admin:
    name: admin
    password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
```

The password is created as follows:

### Windows

Open *Command Prompt*.

Paste this command and replace `your-password` with your password.

```bash
echo|set /p="your-password" > %TMP%/hash.txt | certutil -hashfile %TMP%/hash.txt SHA256 | findstr /v "hash"
```

### MacOS

Open *Terminal*.

Paste this command and replace `your-password` with your password.

```bash
echo -n 'your-password' | shasum -a 256
```

### Linux

Open your terminal.

Paste this command and replace `your-password` with your password.

```bash
echo -n 'your-password' | sha256sum
```