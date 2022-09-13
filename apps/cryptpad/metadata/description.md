# CryptPad

CryptPad is a collaboration suite that is end-to-end-encrypted and open-source. It is built to enable collaboration, synchronizing changes to documents in real time. Because all data is encrypted, the service and its administrators have no way of seeing the content being edited and stored.

![CryptPad screenshot](https://github.com/xwiki-labs/cryptpad/blob/main/screenshot.png?raw=true "Private real-time collaboration on a Rich Text document.")

## Installation

***NOTE: In order to properly function, you must correct permissions on the app-data directory for Cryptpad by running the following command from the runtipi folder:***

`sudo chown -R 4001:4001 app-data/cryptpad`

After running the above command, restart the app.

## Current version

The most recent version and all past release notes can be found [here](https://github.com/xwiki-labs/cryptpad/releases/).

## Setup using Docker

See [CryptPad-Docker](https://github.com/xwiki-labs/cryptpad-docker) repository for details on how to get up-and-running with CryptPad in Docker. This repository is maintained by the community and not officially supported.
