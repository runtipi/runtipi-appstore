Get Google search results, but without any ads, JavaScript, AMP links, cookies, or IP address tracking. Easily deployable in one click as a Docker app, and customizable with a single config file. Quick and simple to implement as a primary search engine replacement on both desktop and mobile.

## Features
- No ads or sponsored content
- No JavaScript\*
- No cookies\*\*
- No tracking/linking of your personal IP address\*\*\*
- No AMP links
- No URL tracking tags (i.e. utm=%s)
- No referrer header
- Tor and HTTP/SOCKS proxy support
- Autocomplete/search suggestions
- POST request search and suggestion queries (when possible)
- View images at full res without site redirect (currently mobile only)
- Light/Dark/System theme modes (with support for [custom CSS theming](https://github.com/benbusby/whoogle-search/wiki/User-Contributed-CSS-Themes))
- Randomly generated User Agent
- Easy to install/deploy
- DDG-style bang (i.e. `!<tag> <query>`) searches
- Optional location-based searching (i.e. results near \<city\>)
- Optional NoJS mode to view search results in a separate window with JavaScript blocked

*No third party JavaScript. Whoogle can be used with JavaScript disabled, but if enabled, uses JavaScript for things like presenting search suggestions.

**No third party cookies. Whoogle uses server side cookies (sessions) to store non-sensitive configuration settings such as theme, language, etc. Just like with JavaScript, cookies can be disabled and not affect Whoogle's search functionality.

***If deployed to a remote server, or configured to send requests through a VPN, Tor, proxy, etc.

