_Cloudflared-web is a docker image that packages both cloudflared cli and a no-frills Web UI for easy starting/stopping of cloudflare tunnel._

___

## Why use `Cloudflared-web`?

#### Pros

✅ Only need to run a docker command once. No need to run docker commands everytime you want to start or stop the container or when updating the token.

✅ Start and stop cloudflare tunnel anytime with a single click.

#### Cons

❌ Only supports Cloudflare Tunnel.

❌ Can only update hostname policies through the [ZeroTrust](https://one.dash.cloudflare.com/) dashboard.

___

The Web UI where you can setup the Cloudflared token can be accessed from port `14333`:

```
http://localhost:14333
```

## [Screenshots](https://github.com/WisdomSky/Cloudflared-web#screenshots)

[![Screenshot 1](https://raw.githubusercontent.com/WisdomSky/Cloudflared-web/main/screenshot-1.png)](https://raw.githubusercontent.com/WisdomSky/Cloudflared-web/main/screenshot-1.png)

[![Screenshot 2](https://raw.githubusercontent.com/WisdomSky/Cloudflared-web/main/screenshot-2.png)](https://raw.githubusercontent.com/WisdomSky/Cloudflared-web/main/screenshot-2.png)
