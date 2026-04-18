## Installation Guide
#### If you want to restrict WebUI access with a password (you should):
- Choose a password
- Use https://bcrypt-generator.com/ to hash your password
- Add an additional "dollar sign" (**$**) next to every existing one in your generated hash

Here is an example with `runtipi` as password :
| | |
| --- | --- |
| password | `runtipi` |
| hash _(bcrypt)_ | `$2a$12$MSBcCEGpDyGQJlZo0R/i2e7Fvu6PnxjIRoWGS7cfuKFtjiGzuUTBy` |
|"cleaned" hash | `$$2a$$12$$MSBcCEGpDyGQJlZo0R/i2e7Fvu6PnxjIRoWGS7cfuKFtjiGzuUTBy` |

## The easiest way to run WireGuard VPN + Web-based Admin UI.

You have found the easiest way to install & manage WireGuard on any Linux host!

* All-in-one: WireGuard + Web UI.
* Easy installation, simple to use.
* List, create, edit, delete, enable & disable clients.
* Show a client's QR code.
* Download a client's configuration file.
* Statistics for which clients are connected.
* Tx/Rx charts for each connected client.
* Gravatar support.

![Screenshot](https://raw.githubusercontent.com/WeeJeWel/wg-easy/master/assets/screenshot.png)