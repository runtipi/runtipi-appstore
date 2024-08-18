## Introduction

Introduction

RSSHub is an open source, easy to use, and extensible RSS feed generator. It's capable of generating RSS feeds from pretty much everything.

RSSHub delivers millions of contents aggregated from all kinds of sources, our vibrant open source community is ensuring the deliver of RSSHub's new routes, new features and bug fixes.

RSSHub can be used with browser extension [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) and mobile auxiliary app [RSSBud (iOS)](https://github.com/Cay-Zhang/RSSBud) and [RSSAid (Android)](https://github.com/LeetaoGoooo/RSSAid)

[English docs](https://docs.rsshub.app/) | [Telegram Group](https://t.me/rsshub) | [Telegram Channel](https://t.me/awesomeRSSHub) | [Twitter](https://twitter.com/intent/follow?screen_name=_RSSHub) | [中文文档](https://docs.rsshub.app/zh/)

## Usage

In order to generate a feed, a valid URL with parameters has to be appended to the main domain for your RSSHub instance, varying with each different app. More on the how-to's for each supported service or app can be found on [https://docs.rsshub.app/guide/](https://docs.rsshub.app/guide/), and on [https://docs.rsshub.app/guide/parameters](https://docs.rsshub.app/guide/parameters) for filtering/sorting/limiting your feed in a given URL.

## RSSHub Configuration / Adding Accounts

Configuration for your own instance must be done via environment variables, either through uncommenting an envvar in the already made .env file at `{$APP_DATA_DIR}/app-data/data/app.env` or directly modifying the docker-compose.yml file, as detailed in https://runtipi.io/docs/guides/customize-app-config.

More info related to available configuration envvars for RSSHub can be found on [https://docs.rsshub.app/deploy/config](https://docs.rsshub.app/deploy/config), however please note that the documentation only contains **some** envvars for configuring a specific app or feature, while a minority of them are poorly-documented or not behaving as according to the official documentation (such as `UA`). In order to get the complete gist of everything, browsing the code at [https://github.com/DIYgod/RSSHub/blob/master/lib/config.ts](https://github.com/DIYgod/RSSHub/blob/master/lib/config.ts) is necessary besides reading the official docs. The given `app.env` file for this app already lists all available variables considering both sources of information and contains the default values specified there, but the **exact** working of any envvar can only be understood by reading the source-code directly after going through the basics at the docs.

## Access Control

RSSHub provides an access control feature for restricting which user generates a feed within your instance. This can be enabled with the envvar `ACCESS_KEY`, which can be configured either at the installation step through Runtipi's App Store or via the envvars at `docker-compose.yml` or `app.env` for the RSSHub app. Default value is empty (`""`), which means no extra key is required in order to access a feed through the URLs.

Note that `ACCESS_KEY` is enabled **globally**, but access can be controlled granularly on an app-by-app basis by only giving the specific app _access code_ to a user, as explained through the diagram found on [https://docs.rsshub.app/deploy/config#access-control-configurations](https://docs.rsshub.app/deploy/config#access-control-configurations).

```
+ -----------------------------------------------------------------------------------------------------------------+
| Access key     | Route             | Generating access code                   | Access code                      |
|------------------------------------------------------------------------------------------------------------------|
| ILoveRSSHub	 | /qdaily/column/59 | md5('/qdaily/column/59' + 'ILoveRSSHub')	| 0f820530128805ffc10351f22b5fd121 |
+ -----------------------------------------------------------------------------------------------------------------+

* Routes are accessible via code, eg: https://rsshub.app/qdaily/column/59?code=0f820530128805ffc10351f22b5fd121
* Or using key directly, eg: https://rsshub.app/qdaily/column/59?key=ILoveRSSHub
```

## Why self-hosting instead of using a public instance?

As mentioned before, this app generates a feed for a specific site either using a headless browser or sometimes directly accessing through an API. Some social networks or features, like OpenAI's GPT access requires a valid subscription access token for summarizing posts or other AI-enabled tasks. For social media / content apps that enable some sort of paywall, like X (Twitter), Instagram or Medium, a valid account is necessary in order to generate a feed from "things" happening there.

## Related Projects

- [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar): A browser extension that can help you quickly discover and subscribe to the RSS and RSSHub of current websites.
- [RSSBud](https://github.com/Cay-Zhang/RSSBud): RSSHub Radar for iOS platform, designed specifically for mobile ecosystem optimization.
- [RSSAid](https://github.com/LeetaoGoooo/RSSAid): RSSHub Radar for Android platform built with Flutter.
- [DocSearch](https://github.com/Fatpandac/DocSearch): Link RSSHub DocSearch into Raycast
