## Cup 🥤

Cup is the easiest way to check for container image updates.

![Demo](https://github.com/sergi0g/cup/blob/main/screenshots/cup.gif?raw=true)

### Screenshots

![Cup web in light mode](https://github.com/sergi0g/cup/blob/main/screenshots/web_dark.png?raw=true)
![Cup web in dark mode](https://github.com/sergi0g/cup/blob/main/screenshots/web_light.png?raw=true)

### Features

- Extremely fast. Cup takes full advantage of your CPU and is hightly optimized, resulting in lightning fast speed. On my test machine, it took ~6 seconds for 70 images.
- Supports most registries, including Docker Hub, ghcr.io, Quay, lscr.io and even Gitea (or derivatives)
- Doesn't exhaust any rate limits. This is the original reason I created Cup. It was inspired by [What's up docker?](https://github.com/fmartinou/whats-up-docker) which would always use it up.
- Beautiful CLI and web interface for checking on your containers any time.
- The binary is tiny! At the time of writing it's just 4.7 MB. No more pulling 100+ MB docker images for a such a simple program.
- JSON output for both the CLI and web interface so you can connect Cup to integrations. It's easy to parse and makes webhooks and pretty dashboards simple to set up!
