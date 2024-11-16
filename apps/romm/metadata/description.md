# Overview

RomM (ROM Manager) allows you to scan, enrich, and browse your game collection with a clean and responsive interface. With support for multiple platforms, various naming schemes, and custom tags, RomM is a must-have for anyone who plays on emulators.

## Features

- Scans your existing games library and enhances it with metadata from IGDB and MobyGames
- Supports a large number of **platforms**
- Play games directly from the browser using EmulatorJS
- Share your library with friends while limiting access and permissions
- Supports MAME, Nintendo Switch, and Sony Playstation naming schemes
- Detects and groups **multifile games** (e.g. PS1 games with multiple CDs)
- Can parse tags in filenames (e.g. (E), (USA), (rev v1), etc.)
- View, upload, update, and delete games from any modern web browser

## Folder Structure

As mentioned in the installation section, RomM requires a specific folder structure. The two supported structures are as follows:

<table border="0">
 <tr>
    <th style="text-align: center"><b>Structure A (recommended)</b></tthd>
    <th style="text-align: center"><b>Structure B (fallback)</b></th>
 </tr>
 <tr>
  <td>
    <code>library/roms/gbc/rom_1.gbc</code>
  </td>
  <td>
    <code>library/gbc/roms/rom_1.gbc</code>
  </td>
 </tr>
 <tr>
    <td>
      <pre>
        library/
        ├─ roms/
        │  ├─ gbc/
        │  │  ├─ rom_1.gbc
        │  │  ├─ rom_2.gbc
        │  │
        │  ├─ gba/
        │  │  ├─ rom_1.gba
        │  │  ├─ rom_2.gba
        │  │
        │  ├─ ps/
        │     ├─ my_multifile_game/
        │     │   ├─ my_game_cd1.iso
        │     │   ├─ my_game_cd2.iso
        │     │
        │     ├─ rom_1.iso
        ├─ bios/
        │  ├─ gba/
        │  │  ├─ gba_bios.bin
        │  │
        │  ├─ ps/
        │     ├─ scph1001.bin
        |     ├─ scph5501.bin
        |     ├─ scph5502.bin
      </pre>
    </td>
    <td>
      <pre>
        library/
        ├─ gbc/
        │  ├─ roms/
        │     ├─ rom_1.gbc
        │     ├─ rom_2.gbc
        │
        ├─ gba/
        │  ├─ roms/
        │     ├─ rom_1.gba
        │     ├─ rom_2.gba
        |  ├─ bios/
        |     ├─ gba_bios.bin
        │
        ├─ ps/
        │  ├─ roms/
        │     ├─ my_multifile_game/
        │     │  ├─ my_game_cd1.iso
        │     │  ├─ my_game_cd2.iso
        │     │
        │     ├─ rom_1.iso
        |  ├─ bios/
        |     ├─ scph1001.bin
        |     ├─ scph5501.bin
        |     ├─ scph5502.bin
      </pre>
    </td>
 </tr>
</table>

> For folder naming conventions, review the Platform Supportplatform-support section. To override default system names in the folder structure (if your directories are named differently), see the Configuration File section.

## Configuration File

RomM's "understanding" of your library can be configured with a `config.yaml` file or through the `config` tab in the `Control Panel` under the `Settings` section. Refer to the example config.yml file for guidance on how to configure it and the example docker-compose.yml file on how to mount it into the container.

## Scheduler

The scheduler allows you to schedule async tasks that run in the Redis container at regular intervals. Jobs can be run at a specific time in the future, after a time delta, or at recurring internals using cron notation. The wiki page on the scheduler has more information on which tasks are available and how to enable them.

## Platform Support

If you adhere to the RomM folder structure, RomM supports all platforms listed on the Supported Platforms page. **The folder is case-sensitive and must be used exactly as it appears on the list.** When scanning your library, RomM will use the folder name to determine the platform and fetch the appropriate game information, metadata, and cover art.

Additionally, some of these platforms have custom icons available..
