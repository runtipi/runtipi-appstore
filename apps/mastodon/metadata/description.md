## Installation Notice

- *Mastodon is a heavy app, and may take a bit longer to fully start up.*
- Must be on Tipi Version **1.4.0** for the expose app to work!

#### Local Domain Varibale 
- The local domain variable ca be the same as the exposed domain (Ex: social.example.com). But you could have the exposed domain as social.example.com and the username url as example.com.

## Initial User Setup
1. SSH into your Tipi Server
2. Fill in your credentials (some_username,someone@example.org, some_very_good_password), then run the command: 
    ``` 
    sudo docker exec -it -w /app/www mastodon bin/tootctl accounts create some_username --email someone@example.org --confirmed --role Owner 
    ```


---
Mastodon is a **free, open-source social network server** based on ActivityPub where users can follow friends and discover new ones. On Mastodon, users can publish anything they want: links, pictures, text, video. All Mastodon servers are interoperable as a federated network (users on one server can seamlessly communicate with users from another one, including non-Mastodon software that implements ActivityPub!)

Click below to **learn more** in a video:

 [![Screenshot](https://camo.githubusercontent.com/d34a13f7f5e15d1ae46d5920f85973f19e1238adae8cbba5989e71b273179f37/68747470733a2f2f626c6f672e6a6f696e6d6173746f646f6e2e6f72672f323031382f30362f7768792d61637469766974797075622d69732d7468652d6675747572652f657a6769662d322d363066316230303430332e676966)](https://www.youtube.com/watch?v=IPSbNdBmWKE) [![Screenshot](https://camo.githubusercontent.com/d34a13f7f5e15d1ae46d5920f85973f19e1238adae8cbba5989e71b273179f37/68747470733a2f2f626c6f672e6a6f696e6d6173746f646f6e2e6f72672f323031382f30362f7768792d61637469766974797075622d69732d7468652d6675747572652f657a6769662d322d363066316230303430332e676966)](https://www.youtube.com/watch?v=IPSbNdBmWKE)[](https://www.youtube.com/watch?v=IPSbNdBmWKE)

## Features

[![](https://github.com/mastodon/mastodon/raw/main/app/javascript/images/elephant_ui_working.svg?raw=true)](https://github.com/mastodon/mastodon/blob/main/app/javascript/images/elephant_ui_working.svg?raw=true)

### No vendor lock-in: Fully interoperable with any conforming platform

It doesn't have to be Mastodon; whatever implements ActivityPub is part of the social network! [Learn more](https://blog.joinmastodon.org/2018/06/why-activitypub-is-the-future/)

### Real-time, chronological timeline updates

Updates of people you're following appear in real-time in the UI via WebSockets. There's a firehose view as well!

### Media attachments like images and short videos

Upload and view images and WebM/MP4 videos attached to the updates. Videos with no audio track are treated like GIFs; normal videos loop continuously!

### Safety and moderation tools

Mastodon includes private posts, locked accounts, phrase filtering, muting, blocking and all sorts of other features, along with a reporting and moderation system. [Learn more](https://blog.joinmastodon.org/2018/07/cage-the-mastodon/)

### OAuth2 and a straightforward REST API

Mastodon acts as an OAuth2 provider, so 3rd party apps can use the REST and Streaming APIs. This results in a rich app ecosystem with a lot of choices!