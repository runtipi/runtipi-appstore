# Overview

Inspired by [Jellyfin](https://jellyfin.org/) and after found that the awesome [Gameyfin](https://github.com/grimsi/gameyfin) project is not supported for arm64 architectures and it is a general game library manager, I decided to develop my own game library solution, focused on retro gaming.

For now, it is only available as a docker [image](https://hub.docker.com/r/zurdi15/romm) (amd64/arm64)

## [](https://github.com/zurdi15/romm#-features)⚡ Features

-   Scans your game library (all at once or by platform) and enriches it with IGDB metadata
-   Access your library via your web-browser
-   Possibility to select one of the matching IGDB results if the scan doesn't get the right one
-   EmuDeck folder structure compatibility
-   Download games directly from your web-browser
-   Edit your game files directly from your web-browser
-   Region, revision/version and extra tags support
-   Works with SQLite or MaridDB (SQLite by default)
-   Responsive design
-   Light and dark theme

## [](https://github.com/zurdi15/romm#-roadmap)🛠 Roadmap

-   Upload games directly from your web-browser - [issue #54](https://github.com/zurdi15/romm/issues/54)
-   Manage save files directly from your web-browser - [issue #55](https://github.com/zurdi15/romm/issues/55)
-   Set a custom cover for each game - [issue #53](https://github.com/zurdi15/romm/issues/53)
-   Multiple files games support - [issue #40](https://github.com/zurdi15/romm/issues/40)

# [](https://github.com/zurdi15/romm#prerequisites)Prerequisites

## [](https://github.com/zurdi15/romm#️-folder-structure)⚠️ Folder structure

RomM accepts two different folder structure by priority.

RomM will try to find the structure 1 and if it doesn't exists, RomM will try to find structure 2.

-   Structure 1 (priority high) - roms folder at root of library folder:

```
library/
├─ roms/
   ├─ gbc/
   │  ├─ rom_1.gbc
   │  ├─ rom_2.gbc
   │
   ├─ gba/
   │  ├─ rom_1.gba
   │  ├─ rom_2.gba
   │ 
   ├─ gb/
      ├─ rom_1.gb
      ├─ rom_1.gb
```

-   Structure 2 (priority low) - roms folder inside each platform folder

```
library/
├─ gbc/
│  ├─ roms/
│     ├─ rom_1.gbc
│     ├─ rom_2.gbc
|
├─ gba/
│  ├─ roms/
│     ├─ rom_1.gba
│     ├─ rom_2.gba
|
├─ gb/
│  ├─ roms/
│     ├─ rom_1.gb
│     ├─ rom_1.gb
```

# [](https://github.com/zurdi15/romm#configuration)Configuration

## [](https://github.com/zurdi15/romm#️-config-yml-file)⚙️ Config yml file

RomM can be configured through a yml file. This is used to exclude folders and files with a certain extension to be scanned. For a configuration change to take effect, RomM must be restarted.

Config file example:

```
exclude:
  folders:
    - 'folder_1_to_exclude'
    - 'folder_2_to_exclude'
  files:
    - 'txt'
    - 'file_extension_to_exclude'
```

# [](https://github.com/zurdi15/romm#naming-convention)Naming convention

## [](https://github.com/zurdi15/romm#-platforms-support)🎮 Platforms support

If the RomM [folder structure](https://github.com/zurdi15/romm#%E2%9A%A0%EF%B8%8F-folder-structure) is followed, any kind of platform/folder-name is supported for the core features. For having extra metadata as well as cover images and platforms icons, the following table shows how to name your platforms folders. This will change over the time, adding games metadata for more platforms. Make sure that the platforms folder names are lowercase.

| slug | name | games metadata |
| --- | --- | :-: |
| 3ds | Nintendo 3DS | ✅ |
| amiga | Amiga | ✅ |
| arcade | Arcade | ✅ |
| atari | atari | ❌ |
| coleco | coleco | ❌ |
| c64 | Commodore C64/128/MAX | ✅ |
| cpc | cpc | ❌ |
| cps1 | cps1 | ❌ |
| cps2 | cps2 | ❌ |
| cps3 | cps3 | ❌ |
| daphne | daphne | ❌ |
| dc | Dreamcast | ✅ |
| dos | DOS | ✅ |
| fairchild | fairchild | ❌ |
| fba2012 | fba2012 | ❌ |
| fbneo | fbneo | ❌ |
| fds | Family Computer Disk System | ✅ |
| gb | Game Boy | ✅ |
| gba | Game Boy Advance | ✅ |
| gbc | Game Boy Color | ✅ |
| gg | gg | ❌ |
| gw | gw | ❌ |
| intellivision | Intellivision | ✅ |
| jaguar | Atari Jaguar | ✅ |
| lynx | Atari Lynx | ✅ |
| md | md | ❌ |
| megaduck | megaduck | ❌ |
| ms | ms | ❌ |
| msx | MSX | ✅ |
| n64 | Nintendo 64 | ✅ |
| nds | Nintendo DS | ✅ |
| neocd | neocd | ❌ |
| neogeo | neogeo | ❌ |
| nes | Nintendo Entertainment System | ✅ |
| ngc | Nintendo GameCube | ✅ |
| ngp | ngp | ❌ |
| odyssey | odyssey | ❌ |
| pce | pce | ❌ |
| pcecd | pcecd | ❌ |
| pico | pico | ❌ |
| poke | poke | ❌ |
| ps | PlayStation | ✅ |
| ps2 | PlayStation 2 | ✅ |
| ps3 | PlayStation 3 | ✅ |
| ps4 | ps4 | ❌ |
| psp | PlayStation Portable | ✅ |
| psvita | PlayStation Vita | ✅ |
| scummvm | scummvm | ❌ |
| segacd | Sega CD | ✅ |
| segasgone | segasgone | ❌ |
| sgb | sgb | ❌ |
| sgfx | sgfx | ❌ |
| snes | Super Nintendo Entertainment System | ✅ |
| supervision | supervision | ❌ |
| switch | Nintendo Switch | ✅ |
| wii | Wii | ✅ |
| win | PC (Microsoft Windows) | ✅ |
| wiiu | Wii U | ✅ |
| xbox | Xbox | ✅ |
| xbox360 | Xbox 360 | ✅ |
| xboxone | Xbox One | ✅ |

## [](https://github.com/zurdi15/romm#-tags-support)📑 Tags support

Games can be tagged with region, revision or other tags using parenthesis in the file name. Region and revision tags must be built with the following reserved words:

-   Region tags must be prefixed with **"reg-"**: (reg-EUR) / (reg-USA) / (reg-Japan) / (reg-whatever)
-   Revision tags must be prefixed with **"rev-"**: (rev-1) / (rev-v2) / (rev-whatever)
-   Any other tag can have any structure
-   Example: **my\_game (reg-EUR)(rev-1)(aditional\_tag\_1)(aditional\_tag\_2).gba**

Tags can be used with the search bar to help to filter your library.
