# Tinyauth

Tinyauth is a simple authentication middleware that adds simple username/password login or OAuth with Github, Google and any generic OAuth provider to all of your docker apps.

> **Note 📝:** Tinyauth is intended for homelab use and it is not made for production use cases. If you are looking for something production ready please use [authentik](https://goauthentik.io).

## Getting Started

Using tinyauth we runtipi is extremely easy. We firstly need to create our password, to create it we can use [IT-Tools](https://it-tools.tech/bcrypt), just fill in your password and click copy hash. Then just connect your password and your username with a colon (:) so our final user will look like this:

```
user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u
```

Make sure to replace all dollar signs (\$) with double dollar signs ($$) else tinyauth will not start up. You can repeat this step for as many user you want and connect them all separated by a comma (,).

After you are done creating your users fill them in under the users section in the install form and also fill in your app url, the app url is where tinyauth will redirect for you to login so make sure it matches either the local domain of your app or the expose domain.

Lastly in the settings page of runtipi you need to to enable advanced settings and set the forward auth url to `http://tinyauth:3000/api/auth/traefik`. That's it! When you flip the enable authentication switch in any of your apps you should see the login screen of tinyauth when you try to access them.

## Documentation

For more in depth guides you can check the documentation which is available [here](https://tinyauth.app/).

## Support

If you face any issues with setting up tinyauth feel free to either join the [Discord](https://discord.gg/eHzVaCzRRd) server or open an [issue](https://github.com/steveiliop56/tinyauth/issues).
