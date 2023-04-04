A ShareX/file upload server that is easy to use, packed with features, and with an easy setup!

## Default credentials

Username: administrator
Password: password

## Features

- Configurable
- Fast
- Built with Next.js & React
- Token protected uploading
- Image uploading
- Image compression
- Password Protected Uploads
- URL shortening
- Text uploading
- URL Formats (uuid, dates, random alphanumeric, original name, zws)
- Discord embeds (OG metadata)
- Gallery viewer, and multiple file format support
- Code highlighting
- Fully customizable Discord webhook notifications
- OAuth2 registration (Discord and GitHub)
- Two-Factor authentication with Google Authenticator, Authy, etc (totp services).
- User invites
- File Chunking (for large files)
- File deletion once it reaches a certain amount of views
- Easy setup instructions on [docs](https://zipl.vercel.app/) (One command install `docker-compose up -d`)

# ShareX (Windows)

This section requires [ShareX](https://www.getsharex.com/).

After navigating to Zipline, click on the top right corner where it says your username and click Manage Account. Scroll down to see "ShareX Config", select the one you would prefer using. After this you can import the .sxcu into sharex. [More information here](https://zipl.vercel.app/docs/guides/uploaders/sharex)

# [](https://github.com/diced/zipline/blob/trunk/README.md#flameshot-linux)Flameshot (Linux)

This section requires [Flameshot](https://www.flameshot.org/), [jq](https://stedolan.github.io/jq/), and [xsel](https://github.com/kfish/xsel).

Wayland instructions

If using wayland you will need to have [wl-clipboard](https://github.com/bugaevc/wl-clipboard) installed, for the `wl-copy` command.

If you are not using GNOME/KDE/Qtile/Sway, and are using something like a wlroots-based compositor (ex. [Hyprland](https://github.com/hyprwm/Hyprland/), [River](https://github.com/riverwm/river), etc), you will need to set the `XDG_CURRENT_DESKTOP` environment variable to `sway`, which will just override it for this script. Adding `export XDG_CURRENT_DESKTOP=sway` to the start of the script will work.

After this, replace the `xsel -ib` with `wl-copy` in the script.

You can either use the script below, or generate one directly from Zipline (just like how you can generate a ShareX config). To upload files using flameshot we will use a script. Replace $TOKEN and $HOST with your own values, you probably know how to do this if you use linux.

```shell
DATE=$(date '+%h_%Y_%d_%I_%m_%S.png');
flameshot gui -r > ~/Pictures/$DATE;

curl -H "Content-Type: multipart/form-data" -H "authorization: $TOKEN" -F file=@$1 $HOST/api/upload | jq -r 'files[0].url' | xsel -ib
```
