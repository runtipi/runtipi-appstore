# SeedSync - Sync your seedbox. Fast.

SeedSync is a tool to sync the files on a remote Linux server (like your seedbox, for example). It uses LFTP to transfer files fast!

## Features

Built on top of LFTP, the fastest file transfer program ever
Web UI - track and control your transfers from anywhere
Automatically extract your files after sync
Auto-Queue - only sync the files you want based on pattern matching
Delete local and remote files easily
Fully open source!

## How it works

Install SeedSync on a local machine. SeedSync will connect to your remote server and sync files to the local machine as they become available.

You don't need to install anything on the remote server. All you need are the SSH credentials for the remote server.

## Folder Info

| Root Folder                           | Container Folder |
|---------------------------------------|------------------|
| /runtipi/app-data/seedsync/data/config| /config          |
| /runtipi/media/torrents/complete      | /downloads       |
