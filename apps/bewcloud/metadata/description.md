# bewCloud

This is the [bewCloud app](https://bewcloud.com) built using [Fresh](https://fresh.deno.dev) and deployed using [docker compose](https://docs.docker.com/compose/).

# FAQ

## Where's Contacts/Calendar (CardDav/CalDav)?! Wasn't this supposed to be a core Nextcloud replacement?

[Check this tag/release for more info and the code where/when that was being done](https://github.com/bewcloud/bewcloud/releases/tag/v0.0.1-self-made-carddav-caldav). Contacts/CardDav worked and Calendar/CalDav mostly worked as well at that point.

My focus was to get me to replace Nextcloud for me and my family ASAP, and it turns out it's not easy to do it all in a single, installable _thing_, so I focused on the Files UI, sync, and sharing, since [Radicale](https://radicale.org/v3.html) solved my other issues better than my own solution (and it's already _very_ efficient).

## How does file sharing work?

[Check this PR for advanced sharing with internal and external users, with read and write access that was being done and almost working](https://github.com/bewcloud/bewcloud/pull/4). I ditched all that complexity for simply using [symlinks](https://en.wikipedia.org/wiki/Symbolic_link), as it served my use case (I have multiple data backups and trust the people I provide accounts to, with the symlinks).

You can simply `ln -s /<absolute-path-to-data-files>/<owner-user-id>/<directory-to-share> /<absolute-path-to-data-files>/<user-id-to-share-with>/` to create a shared directory between two users, and the same directory can have different names, now. The symlink needs to point to the container's directory, usually starting with `/app` if you didn't change the `Dockerfile`, otherwise the container will fail to load the linked directory.

## How does it look?

[Check the website](https://bewcloud.com) for screenshots or [the YouTube channel](https://www.youtube.com/@bewCloud) for 1-minute demos.