# AdGuardHome sync

Synchronize [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) config to replica instances.

## FAQ & Deprecations

Please check the wiki
for [FAQ](https://github.com/bakito/adguardhome-sync/wiki/FAQ)
and [Deprecations](https://github.com/bakito/adguardhome-sync/wiki/Deprecations).

## Current sync features

- General Settings
- Filters
- Rewrites
- Services
- Clients
- DNS Config
- DHCP Config
- Theme

By default, all features are enabled. Single features can be disabled in the config.

## Configration Info

The configuration options you set in the app's settings **cannot** be changed. If you want to change the values you can either reset the app (no data loss) or edit the configuration file.

Configuration file path: `runtipi/app-data/adguardhome-sync/data/adguardhome-sync.yaml`

> Warning ⚠️: The default options in the form-fields are very basic, if you want to add more replica instances or add custom options please edit the configuration file.
