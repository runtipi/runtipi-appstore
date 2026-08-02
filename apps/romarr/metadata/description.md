# ROMarr

**The \*arr for games.** Request a title and ROMarr searches your indexers
through Prowlarr, hands the winner to your download client, and files the ROM
into your game library where it can actually be played.

If you run Radarr for films and Sonarr for TV, this is the missing one.

## Not tied to one library

RomM, Gaseous and Retrom are all supported, chosen with a single setting:

```
LIBRARY_KIND=romm      # or gaseous, or retrom, or folder
```

There is also a **folder** mode that writes a plain directory tree laid out by
platform — no URL, no account. That is exactly what Batocera, RetroPie,
EmulationStation, ES-DE, EmuDeck, Pegasus, Lakka, muOS, ArkOS, LaunchBox,
Playnite and Steam ROM Manager all read, so ROMarr works with them without any
of them needing to know it exists.

## Releases are scored, and it shows its work

Every candidate is ranked with the reasoning recorded per adjustment — wrong
region, wrong platform, a compilation where you wanted the single cartridge.
Interactive search lists every release with its score and a Grab button, so a
wrong pick is a click to correct rather than a bug report.

## What you need

- A running **Prowlarr**
- At least one download client: **qBittorrent**, **SABnzbd** or **NZBGet**
- Somewhere to put the ROMs — RomM, Gaseous, Retrom, or just a folder

The download client is genuinely required, not merely recommended: a release
found with no client that speaks its protocol is ranked and then refused.

## Notes

ROMarr reads its environment variables **once**, on first start, and copies
them into its own settings. After that the stored settings win, so later
changes belong on ROMarr's Settings page rather than in the app configuration
here.

---

Unofficial. Not affiliated with RomM, Gaseous or Retrom. MIT licensed. A
project of the [Move Weight Foundation](https://foundation.moveweight.com), an
Oklahoma non-profit corporation with 501(c)(3) status pending.
