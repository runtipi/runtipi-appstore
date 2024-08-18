# TRaSH Guide Updater

Automatically mirror TRaSH guides to your Sonarr/Radarr instance.

## Sonarr Features

### Release Profiles

- "Preferred", "Must Not Contain", and "Must Contain" terms from guides are reflected in
  corresponding release profile fields in Sonarr.
- "Include Preferred when Renaming" is properly checked/unchecked depending on explicit mention of
  this in the guides.
- Profiles get created if they do not exist, or updated if they already exist. Profiles get a unique
  name based on the guide and this name is used to find them in subsequent runs.
- Tags can be added to any updated or created profiles.
- Ability to convert preferred with negative scores to "Must not contain" terms.
- Terms mentioned as "optional" in the guide are not synced to Sonarr release profiles by default
  (can be enabled via config).

### Quality Definitions

- Anime and Series (Non-Anime) quality definitions from the guide.
- "Hybrid" type supported that is a mixture of both.

## Radarr Features

### Quality Definitions

- Movie quality definition from the guide

### Custom Formats

- A user-specified list of custom formats are synchronized to Radarr from the TRaSH guides.
- Scores from the guides can be synchronized to quality profiles of your choosing.
- User can specify their own scores for custom formats (instead of using the guide score).
- Option to enable automatic deletion custom formats in Radarr when they are removed from config or
  the guide.

---

*Important Notices!*

- > **Note**: For Sonarr updates to work, you must be running version `3.0.4.1098` or greater.

- > **Note**: Do not run Notifiarr's Trash Guides Integration in conjunction with Trash Updater's
  > Custom Format synchronization. In general, you should not have two different tools updating the
  > same data in Radarr.