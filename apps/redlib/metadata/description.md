# Redlib

> An alternative private front-end to Reddit, with its origins in [Libreddit](https://github.com/libreddit/libreddit).

![screenshot](https://i.ibb.co/QYbqTQt/libreddit-rust.png)

---

**10-second pitch:** Redlib is a private front-end like [Invidious](https://github.com/iv-org/invidious) but for Reddit. Browse the coldest takes of [r/unpopularopinion](https://redlib.matthew.science/r/unpopularopinion) without being [tracked](#reddit).

- 🚀 Fast: written in Rust for blazing-fast speeds and memory safety
- ☁️ Light: no JavaScript, no ads, no tracking, no bloat
- 🕵 Private: all requests are proxied through the server, including media
- 🔒 Secure: strong [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) prevents browser requests to Reddit

---

## Table of Contents

1. [Redlib](#redlib)
2. [Instances](#instances)
3. [About](#about)
   - [Built with](#built-with)
   - [How is it different from other Reddit front ends?](#how-is-it-different-from-other-reddit-front-ends)
     - [Teddit](#teddit)
     - [Libreddit](#libreddit)
4. [Comparison](#comparison)
   - [Speed](#speed)
   - [Privacy](#privacy)
     - [Reddit](#reddit)
     - [Redlib](#redlib-1)
       - [Server](#server)
       - [Official instance (redlib.matthew.science)](#official-instance-redlibmatthewscience)

---

# Instances

> 🔗 **Want to automatically redirect Reddit links to Redlib? Use [LibRedirect](https://github.com/libredirect/libredirect) or [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect)!**

An up-to-date table of instances is available in [Markdown](https://github.com/redlib-org/redlib-instances/blob/main/instances.md) and [machine-readable JSON](https://github.com/redlib-org/redlib-instances/blob/main/instances.json).

Both files are part of the [redlib-instances](https://github.com/redlib-org/redlib-instances) repository. To contribute your [self-hosted instance](#deployment) to the list, see the [redlib-instances README](https://github.com/redlib-org/redlib-instances/blob/main/README.md).

For information on instance uptime, see the [Uptime Robot status page](https://stats.uptimerobot.com/mpmqAs1G2Q).

---

# About

> Find Redlib on 💬 [Matrix](https://matrix.to/#/#redlib:matrix.org), 🐋 [Quay.io](https://quay.io/repository/redlib/redlib), :octocat: [GitHub](https://github.com/redlib-org/redlib), and 🦊 [GitLab](https://gitlab.com/redlib/redlib).

Redlib hopes to provide an easier way to browse Reddit, without the ads, trackers, and bloat. Redlib was inspired by other alternative front-ends to popular services such as [Invidious](https://github.com/iv-org/invidious) for YouTube, [Nitter](https://github.com/zedeus/nitter) for Twitter, and [Bibliogram](https://sr.ht/~cadence/bibliogram/) for Instagram.

Redlib currently implements most of Reddit's (signed-out) functionalities but still lacks [a few features](https://github.com/redlib-org/redlib/issues).

## Built with

- [Rust](https://www.rust-lang.org/) - Programming language
- [Hyper](https://github.com/hyperium/hyper) - HTTP server and client
- [Askama](https://github.com/djc/askama) - Templating engine
- [Rustls](https://github.com/rustls/rustls) - TLS library

## How is it different from other Reddit front ends?

### Teddit

Teddit is another awesome open source project designed to provide an alternative frontend to Reddit. There is no connection between the two, and you're welcome to use whichever one you favor. Competition fosters innovation and Teddit's release has motivated me to build Redlib into an even more polished product.

If you are looking to compare, the biggest differences I have noticed are:

- Redlib is themed around Reddit's redesign whereas Teddit appears to stick much closer to Reddit's old design. This may suit some users better as design is always subjective.
- Redlib is written in [Rust](https://www.rust-lang.org) for speed and memory safety. It uses [Hyper](https://hyper.rs), a speedy and lightweight HTTP server/client implementation.

### Libreddit

While originating as a fork of Libreddit, the name "Redlib" was adopted to avoid legal issues, as Reddit only allows the use of their name if structured as "XYZ For Reddit".

Several technical improvements have also been made, including:

- **OAuth token spoofing**: To circumvent rate limits imposed by Reddit, OAuth token spoofing is used to mimick the most common iOS and Android clients. While spoofing both iOS and Android clients was explored, only the Android client was chosen due to content restrictions when using an anonymous iOS client.
- **Token refreshing**: The authentication token is refreshed every 24 hours, emulating the behavior of the official Android app.
- **HTTP header mimicking**: Efforts are made to send along as many of the official app's headers as possible to reduce the likelihood of Reddit's crackdown on Redlib's requests.

---

# Comparison

This section outlines how Redlib compares to Reddit in terms of speed and privacy.

## Speed

Last tested on January 12, 2024.

Results from Google PageSpeed Insights ([Redlib Report](https://pagespeed.web.dev/report?url=https%3A%2F%2Fredlib.matthew.science%2F), [Reddit Report](https://pagespeed.web.dev/report?url=https://www.reddit.com)).

| Performance metric  | Redlib   | Reddit    |
| ------------------- | -------- | --------- |
| Speed Index         | 0.6s     | 1.9s      |
| Performance Score   | 100%     | 64%       |
| Time to Interactive | **2.8s** | **12.4s** |

## Privacy

### Reddit

**Logging:** According to Reddit's [privacy policy](https://www.redditinc.com/policies/privacy-policy), they "may [automatically] log information" including:

- IP address
- User-agent string
- Browser type
- Operating system
- Referral URLs
- Device information (e.g., device IDs)
- Device settings
- Pages visited
- Links clicked
- The requested URL
- Search terms

**Location:** The same privacy policy goes on to describe that location data may be collected through the use of:

- GPS (consensual)
- Bluetooth (consensual)
- Content associated with a location (consensual)
- Your IP Address

**Cookies:** Reddit's [cookie notice](https://www.redditinc.com/policies/cookies) documents the array of cookies used by Reddit including/regarding:

- Authentication
- Functionality
- Analytics and Performance
- Advertising
- Third-Party Cookies
- Third-Party Site

### Redlib

For transparency, I hope to describe all the ways Redlib handles user privacy.

#### Server

- **Logging:** In production (when running the binary, hosting with docker, or using the official instances), Redlib logs nothing. When debugging (running from source without `--release`), Redlib logs post IDs fetched to aid with troubleshooting.

- **Cookies:** Redlib uses optional cookies to store any configured settings in [the settings menu](https://redlib.matthew.science/settings). These are not cross-site cookies and the cookies hold no personal data.

#### Official instance (redlib.matthew.science)

The official instance is hosted at https://redlib.matthew.science.

- **Server:** The official instance runs a production binary, and thus logs nothing.

- **DNS:** The domain for the official instance uses Cloudflare as the DNS resolver. However, this site is not proxied through Cloudflare, and thus Cloudflare doesn't have access to user traffic.

- **Hosting:** The official instance is hosted on [Replit](https://replit.com/), which monitors usage to prevent abuse. I can understand if this invalidates certain users' threat models, and therefore, self-hosting, using unofficial instances, and browsing through Tor are welcomed.