# QDirStat

QDirStat is a graphical application to show where your disk space has gone and
to help you to clean it up.

This is a Qt-only port of the old Qt3/KDE3-based KDirStat, now based on the
latest Qt 5. It does not need any KDE libs or infrastructure. It runs on every
X11-based desktop on Linux, BSD and other Unix-like systems and of course in a
Docker container.

![Screenshot](https://github.com/shundhammer/qdirstat/raw/master/screenshots/QDirStat-main-win.png)

_Main window screenshot - notice the multi-selection in the tree and the treemap_

## Features

QDirStat has a number of new features compared to KDirStat. To name a few:

- Multi-selection in both the tree and the treemap.

- Unlimited number of user-defined cleanup actions.

- Properly show errors of cleanup actions (and their output, if desired).

- Configurable file categories (MIME types), treemap colors, exclude rules,
  tree columns.

- Package manager support:
  - Show what software package a system file belongs to.
  - **Packages View** showing disk usage of installed software
    packages and their individual files.
  - **Unpacked Files View** showing what files in system directories do not belong to any installed software package.

- New views:
  - Disk usage per file type (by filename extension).
  - File size histogram view.
  - File age view.
  - Free, used and reserved disk size for each mounted filesystem (like _df_)
  
  ---

  # Tipi Specific Note

  By default, qDirStat will analyze the /runtipi/ directory, *not the whole system that tipi is installed on!*