

## Initial Setup Notice
### Setting Up an Exposed Instance with SSL Certs
As Owncast uses the RTMP protocol for ingesting incoming streams, the typical Cloudflare Zero Access configuration will not work as it does not have RTMP as an option for routing. 

You can optionally follow [this guide](https://gist.github.com/oscoDOTblog/6e8102d7d82ffaeaae16f41bef98b739) for setting up an exposed Owncast server with your RunTipi instance. 

### Admin Dashboard Access

To access the admin dashboard, simply visit `/admin` in your browser.
The login username is set to `admin`.
The password to login is initially set to the stream key, which is `abc123` by default.

### Security Recommendations

For security reasons, we highly encourage you to change both the stream key and your admin password immediately after installation. You can do this by visiting `/admin/config/server/` and following the provided instructions.


### Additional Configuration

For more detailed configuration options, please refer to the documentation available at https://owncast.online/docs/configuration/.


## About The Project

Owncast is an open source, self-hosted, decentralized, single user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. It offers complete ownership over your content, interface, moderation and audience. 
[Visit the demo](https://watch.owncast.online) for an example.

## Use with your existing broadcasting software

In general, Owncast is compatible with any software that uses `RTMP` to broadcast to a remote server. `RTMP` is what all the major live streaming services use, so if you’re currently using one of those it’s likely that you can point your existing software at your Owncast instance instead.

OBS, Streamlabs, Restream and many others have been used with Owncast. [Read more about compatibility with existing software](https://owncast.online/docs/broadcasting/).

## Contributing

Owncast is a growing open source project that is giving freedom, flexibility and fun to live streamers.
And while we have a small team of kind, talented and thoughtful volunteers, we have gaps in our skillset that we’d love to fill so we can get even better at building tools that make a difference for people.

We abide by our [Code of Conduct](https://owncast.online/contribute/) and feel strongly about open, appreciative, and empathetic people joining us.
We’ve been very lucky to have this so far, so maybe you can help us with your skills and passion, too!

There is a larger, more detailed, and more up-to-date [guide for helping contribute to Owncast on our website](https://owncast.online/help/).

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Supported by

- This project is tested with [BrowserStack](https://browserstack.com).

## Contact

Project chat: [Join us on Rocket.Chat](https://owncast.rocket.chat/home) if you want to contribute, follow along, or if you have questions.

Gabe Kangas - [@gabek@social.gabekangas.com](https://social.gabekangas.com/gabek) - email [gabek@real-ity.com](mailto:gabek@real-ity.com)

Project Link: [https://github.com/owncast/owncast](https://github.com/owncast/owncast)
