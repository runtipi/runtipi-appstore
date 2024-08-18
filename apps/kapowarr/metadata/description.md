

## Install Notice 

 *Additonal Docs are Below!*

 Set Root folder too `/media/data/comics`

---
Kapowarr is a software to build and manage a comic book library, fitting in the \*arr suite of software.

## Workings

Kapowarr allows you to build a digital library of comics. You can add volumes, map them to a folder and start managing! Download issues of the volume (or TPB's), rename them and move them. The whole process is automised and is all customisable in the settings.

Each day, each volume is checked to see if a new issue has come out and if so, it will immediately be downloaded and added to your library.

## Features

-   Import your current library right into Kapowarr
-   Get loads of metadata about the volumes and issues in your library
-   Run a "Search Monitored" to download whole volumes with one click
-   Or use "Manual Search" to decide yourself what to download
-   Support for downloading directly from servers, via MediaFire and Mega
-   Downloaded files automatically get moved wherever you want and renamed in the format you desire
-   Zip files can be extracted and it's contents renamed after downloading or with a single click
-   The recognisable UI from the \*arr suite of software

## Installation, support and documentation

-   For instructions on how to install Kapowarr, see the [installation documentation](https://casvt.github.io/Kapowarr/installation/).
-   For support, a [discord server](https://discord.gg/nMNdgG7vsE) is available or [make an issue](https://github.com/Casvt/Kapowarr/issues).
-   For all documentation, see the [documentation hub](https://casvt.github.io/Kapowarr/).

## Screenshots

[![](https://user-images.githubusercontent.com/88994465/240648878-797a7f2d-b279-4e21-8b99-c03e99065949.png)](https://user-images.githubusercontent.com/88994465/240648878-797a7f2d-b279-4e21-8b99-c03e99065949.png) [![](https://user-images.githubusercontent.com/88994465/240649307-71465b08-03eb-477e-a511-f5bc5d953447.png)](https://user-images.githubusercontent.com/88994465/240649307-71465b08-03eb-477e-a511-f5bc5d953447.png) [![](https://user-images.githubusercontent.com/88994465/240649604-b21ae416-1ae4-46f1-8f63-cca21cc4ee7e.png)](https://user-images.githubusercontent.com/88994465/240649604-b21ae416-1ae4-46f1-8f63-cca21cc4ee7e.png) [![](https://user-images.githubusercontent.com/88994465/240650289-902b3c3a-4ffb-42c4-9184-a7197cecd965.png)](https://user-images.githubusercontent.com/88994465/240650289-902b3c3a-4ffb-42c4-9184-a7197cecd965.png)

---

## Folder Info

| Root Folder                   | Container Folder |
|-------------------------------|------------------|
| /runtipi/app-data/kapowarr/data/kapowarr-db | /app/db          |
| /runtipi/media/downloads/kapowarr | /app/temp_downloads        |
| /runtipi/media                | /media           |

---

# Docs

## Authentication

You might want to set a password to restrain access to the web-ui (and API). Setting a password is optional. A password can be set at Settings -> General -> Security -> Login Password. Don't forget to save. From then on, it is required to enter a password in order to gain access to the web-ui (and the API). If you want to disable the password, set an empty value for the setting and save.

## ComicVine API key

Kapowarr uses ComicVine as it's metadata source. To fetch the metadata from ComicVine, Kapowarr needs access to the API, which requires an API key.

1.  Go to [the API page of ComicVine](https://comicvine.gamespot.com/api/).
2.  If you don't have a free account at ComicVine already, sign up and once logged in, revisit the linked page.
3.  You'll see your ComicVine API key, which is 40 characters long and contains the letters a-f and numbers 0-9 (e.g. `da39a3ee5e6b4b0d3255bfef95601890afd80709`).
4.  Copy that API key and enter it as the value of Settings -> General -> Comic Vine API -> Comic Vine API Key in the web-ui. Don't forget to save.

On the documentation page about rate limiting, information can be found about the handling of the ComicVine API rate limit.

## Root Folders

Root folders are the base folders that Kapowarr works in. All content is put in these folders. When adding a volume (or when editing one), you choose in which root folder all content for that volume is put. Kapowarr will never touch any files outside the root folders (except in the download folder). You might have multiple root folders because you store your comics on multiple drives or want different access rights to certain volumes, to name a few reasons.

Root folders can be added at Settings -> Media Management -> Root Folders. Note: If you use docker to run Kapowarr and have followed the example given in the installation instructions), this is where you would enter `/media/data/comics`

## Downloading

One of Kapowarr's biggest features is being able to download comics. The Settings -> Download section has all settings regarding the downloading.

### Download folder[¶](https://casvt.github.io/Kapowarr/setup_after_installation/#port#download-folder "Permanent link")

The download folder (Settings -> Download -> Download Location -> Direct Download Temporary Folder) is where all downloads are downloaded to, before they get moved to their final destination. If you run Kapowarr using Docker, leave this setting to it's default value of `/app/temp_downloads` and instead change the value of `/path/to/download_folder` in the Docker command . If you have a manual install, you can change this value to whatever you want. It is allowed to be outside your root folders.

### Service preference

Kapowarr has the ability to download directly from servers, but also to download from services like MediaFire and Mega. Websites like getcomics.org offer the same download via multiple services (multiple download links to download the same file, via different services). This settings determines what preference you have for each service. If multiple services are offered for the same download, Kapowarr will use this preference list to determine what service to pick (if the link of the top service doesn't work, Kapowarr falls back to the other options, in order). If you have an account for one of these services (see  setting), you might want to put that one at the top, to make Kapowarr take advantage of the extra features that the account offers (extra bandwidth, higher rate limit, etc.).

### Credentials

Kapowarr has the ability to download from services like MediaFire and Mega. These services apply limits to how much you can download per day, or a download speed limit. An (paid) account for one of these services often offers higher limits. Kapowarr can take advantage of these extra features that these accounts offer. Under the credentials section, you can add credentials of accounts, which Kapowarr will use when downloading, taking advantage of the extra features.

## Building up a library

Now you're ready to build a library. At Volumes -> Add Volume, you can search for volumes and add them to your library. Once you add one, a folder is automatically created for the volume in the root folder selected (see Settings -> Media Management -> File Naming -> Volume Folder Naming). Then you can start downloading content for the volume, and all files will be put in this volume folder. The naming of the files follows the format set in the settings (see Settings -> Media Management -> File Naming).

#### Unzipping

Kapowarr has unzipping built-in. This means that it can extract zip files, filter the content to find the files that are actually desired, delete the other files, move the files to the correct location and name them correctly, delete the zip folder and delete the zip file. This can be done automatically for all downloaded zip files by enabling Settings -> Media Management -> Unzipping -> Unzip downloads. Unzipping can also be done for all zip files of a volume by pressing the "Unzip" button when viewing a volume.

Importing an already existing library into Kapowarr is currently not very fluid (the "Library Import" feature found in Radarr/Sonarr is not yet implemented in Kapowarr). The advised way to get Kapowarr working with your current library:

1.  Add a volume in Kapowarr.
2.  Move the content for the volume from the current folder to the volume folder generated and created by Kapowarr.
3.  Go to the volume in Kapowarr and click the "Refresh & Scan" button. Kapowarr will scan the volume folder and import all files.
4.  Refresh the web-ui.
5.  (Optional) Click "Preview Rename" and Kapowarr will immediately propose new naming for the files, following the file naming format set in the settings.
6.  Repeat for all volumes that you have in your current library.

There are plans to add support for custom volume folders and to add the "Library Import" feature, to make the process of importing an existing library easier.