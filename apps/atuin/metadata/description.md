# Atuin Server

## Making your shell magical

Sync, search and backup shell history with Atuin

[Atuin](https://atuin.sh) is an open-source Terminal User Interface (TUI) for your shell history.

![Atuin TUI screenshot](https://atuin.sh/_astro/cargo-prefix.322ce063_Z3NFdB.avif)

## Features

2. End-to-end Encryption 
    - All data is encrypted, and can only be read by you
3. Efficient Search
    - Search decades of shell history, and recall it in an instant. Atuin offers configurable full text or fuzzy search, filterable by host, directory, etc.
4. Data Import
    - Bring your existing history with you - Atuin supports importing from a wide variety of formats
5. Store Extra Context
    - Atuin stores extra context with your commands - working directory, exit code, and more!

## Self-hosted sync server

Atuin.sh offers a free, fully-encrypted option for storing your synced shell history as well as an option to self-host a sync server of your own. This is an easy-to-use package for the Atuin sync server component; the user interface is the TUI, which can be installed using many typical package-management tools, e.g.

- `brew install atuin`
- `apt install atuin`

or via `bash <(curl --proto '=https' --tlsv1.2 -sSf https://setup.atuin.sh)`.