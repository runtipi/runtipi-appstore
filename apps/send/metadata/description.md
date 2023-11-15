A fork of Mozilla's [Firefox Send][mozilla-send].
Mozilla discontinued Send, this fork is a community effort to keep the project
up-to-date and alive.

- Forked [at][fork-commit] Mozilla's last publicly hosted version
- _Mozilla_ & _Firefox_ branding [is][remove-branding-pr] removed so you can legally self-host
- Kept compatible with [`ffsend`][ffsend] (CLI for Send)
- Dependencies have been updated
- Mozilla's [changes][mozilla-patches] since the fork have been selectively [merged][mozilla-patches-pr]
- Mozilla's experimental report feature, download tokens, trust warnings and FxA changes are not included

Find an up-to-date Docker image here: [docs/docker.md](docs/docker.md)

The original project by Mozilla can be found [here][mozilla-send].
Please consider to [donate][donate] to allow me to keep working on this.

Thanks [Mozilla][mozilla] for building this amazing tool!

[branch-mozilla-master]: https://gitlab.com/timvisee/send/-/tree/mozilla-master
[branch-send-v3]: https://gitlab.com/timvisee/send/-/tree/send-v3
[branch-send-v4]: https://gitlab.com/timvisee/send/-/tree/send-v4
[donate]: https://timvisee.com/donate
[ffsend]: https://github.com/timvisee/ffsend
[fork-commit]: https://gitlab.com/timvisee/send/-/commit/3e9be676413a6e1baaf6a354c180e91899d10bec
[mozilla-patches-pr]: https://gitlab.com/timvisee/send/-/merge_requests/3
[mozilla-patches]: https://gitlab.com/timvisee/send/-/compare/3e9be676413a6e1baaf6a354c180e91899d10bec...mozilla-master
[mozilla-send]: https://github.com/mozilla/send
[mozilla]: https://mozilla.org/
[remove-branding-pr]: https://gitlab.com/timvisee/send/-/merge_requests/2
