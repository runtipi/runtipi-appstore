<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Donkie/Spoolman/assets/2332094/4e6e80ac-c7be-4ad2-9a33-dedc1b5ba30e">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/Donkie/Spoolman/assets/2332094/3c120b3a-1422-42f6-a16b-8d5a07c33000">
  <img alt="Icon of a filament spool" src="https://github.com/Donkie/Spoolman/assets/2332094/3c120b3a-1422-42f6-a16b-8d5a07c33000">
</picture>

<br/><br/>

_Keep track of your inventory of 3D-printer filament spools._

Spoolman is a web service that helps you keep track of your filament spools and how they are being used.

It acts as a database, where other printer software such as Octoprint and Moonraker can interact with to have a centralized place for spool information.
For example, if used together with Moonraker, your spool weight will automatically be reduced as your print is progressing.

It exposes a HTTP API which services can interact with. See the [OpenAPI description](https://donkie.github.io/Spoolman/) for more information.

## Client
Spoolman includes a web-client that lets you directly manipulate all the data. It also has a few additional nice features such as label printing.

![image](https://github.com/Donkie/Spoolman/assets/2332094/33928d5e-440f-4445-aca9-456c4370ad0d)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://hosted.weblate.org/widget/spoolman/287x66-black.png">
  <source media="(prefers-color-scheme: light)" srcset="https://hosted.weblate.org/widget/spoolman/287x66-white.png">
  <img alt="Icon of a filament spool" src="https://hosted.weblate.org/widget/spoolman/287x66-white.png">
</picture>

_The web client is translated by the community using [Weblate](https://hosted.weblate.org/projects/spoolman/)._

## Integration status
Spoolman doesn't depend on any specific printer software, but to make the most out of it, you should use it together with a frontend that supports it.
It is currently only supported in the Klipper ecosystem, with official support for the major frontends. Support for other ecosystems like Octoprint is ongoing.

* ✔️ Moonraker - See the [Moonraker Documentation](https://moonraker.readthedocs.io/en/latest/configuration/#spoolman)
  * ✔️ Fluidd
  * ✔️ KlipperScreen
  * ✔️ Mainsail
* ✖️ Octoprint - A plugin is in progress: [OctoPrint-Spoolman](https://github.com/mkevenaar/OctoPrint-Spoolman)
* ✔️ Home Assistant integration (https://github.com/Disane87/spoolman-homeassistant)