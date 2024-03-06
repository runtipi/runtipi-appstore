<h1 align="center">Windows<br />
<div align="center">
<a href="https://github.com/dockur/windows"><img src="https://github.com/dockur/windows/raw/master/.github/logo.png" title="Logo" style="max-width:100%;" width="128" /></a>
</div>
<div align="center">

</div></h1>

Windows in a Docker container.

## Features

 - ISO downloader
 - KVM acceleration
 - Web-based viewer

## FAQ

* ### How do I use it?

  Very simple! These are the steps:
  
  - Start the container and connect to [port 8006](http://localhost:8006) using your web browser.

  - Sit back and relax while the magic happens, the whole installation will be performed fully automatic.

  - Once you see the desktop, your Windows installation is ready for use.
  
  Enjoy your brand new machine, and don't forget to star this repo!

* ### How do I select the Windows version?

  By default, Windows 11 will be installed. But you can change that in settings, in order to specify an alternative Windows version to be downloaded:

  Select from the values below:
  
  | **Value**  | **Description**  | **Source**  | **Transfer**  | **Size**  |
  |---|---|---|---|---|
  | `win11`   | Windows 11 Pro         | Microsoft    | Fast    | 6.4 GB    |
  | `win10`   | Windows 10 Pro         | Microsoft    | Fast    | 5.8 GB    |
  | `ltsc10`  | Windows 10 LTSC        | Microsoft    | Fast    | 4.6 GB    |
  | `win81`   | Windows 8.1 Pro        | Microsoft    | Fast    | 4.2 GB    |
  | `win7`    | Windows 7 SP1          | Bob Pony     | Medium  | 3.0 GB    |
  | `vista`   | Windows Vista SP2      | Bob Pony     | Medium  | 3.6 GB    |
  | `winxp`   | Windows XP SP3         | Bob Pony     | Medium  | 0.6 GB    |
  ||||||
  | `2022`    | Windows Server 2022    | Microsoft    | Fast    | 4.7 GB    |
  | `2019`    | Windows Server 2019    | Microsoft    | Fast    | 5.3 GB    |
  | `2016`    | Windows Server 2016    | Microsoft    | Fast    | 6.5 GB    |
  | `2012`    | Windows Server 2012 R2 | Microsoft    | Fast    | 4.3 GB    |
  | `2008`    | Windows Server 2008 R2 | Microsoft    | Fast    | 3.0 GB    |
  ||||||
  | `core11`  | Tiny 11 Core           | Archive.org  | Slow    | 2.1 GB    |
  | `tiny11`  | Tiny 11                | Archive.org  | Slow    | 3.8 GB    |
  | `tiny10`  | Tiny 10                | Archive.org  | Slow    | 3.6 GB    |

* ### How do I connect using RDP?

  The web-viewer is mainly meant to be used during installation, as its picture quality is low, and it has no audio or clipboard for example.

  So for a better experience you can connect using any Microsoft Remote Desktop client to the IP of the container, using the username `docker` and by leaving the password empty.

  There is a good RDP client for [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx) available from the Play Store. One for [iOS](https://apps.apple.com/nl/app/microsoft-remote-desktop/id714464092?l=en-GB) is in the Apple Store. For Linux you can use [rdesktop](http://www.rdesktop.org/) and for Windows you don't need to install anything as it is already ships as part of the operating system.

* ### How do I verify if my system supports KVM?

  To verify if your system supports KVM, run the following commands:

  ```bash
  sudo apt install cpu-checker
  sudo kvm-ok
  ```

  If you receive an error from `kvm-ok` indicating that KVM acceleration can't be used, check the virtualization settings in the BIOS.

* ### Is this project legal?

  Yes, this project contains only open-source code and does not distribute any copyrighted material. Any product keys found in the code are just generic placeholders provided by Microsoft for trial purposes. So under all applicable laws, this project would be considered legal.

## Disclaimer

The product names, logos, brands, and other trademarks referred to within this project are the property of their respective trademark holders. This project is not affiliated, sponsored, or endorsed by Microsoft Corporation.