# Email OAuth 2.0 Proxy<a id="email-oauth-20-proxy"></a>
Transparently add OAuth 2.0 support to IMAP/POP/SMTP client applications, scripts or any other email use-cases that don't support this authentication method.


## Motivation and capabilities<a id="motivation-and-capabilities"></a>
Email services that support IMAP, POP and/or SMTP access are increasingly requiring the use of OAuth 2.0 to authenticate connections, but not all clients support this method.
This tool creates a simple local proxy that intercepts the traditional IMAP/POP/SMTP authentication commands and transparently replaces them with the appropriate SASL (X)OAuth 2.0 commands and credentials.
Your email client can continue to use the `login` or `auth`/`authenticate` options, with no need to make it aware of OAuth's existence.
The proxy works in the background with a menu bar/taskbar helper or as a headless system service, and is compatible with macOS, Windows and Linux.

### Example use-cases<a id="example-use-cases"></a>
- You need to use an Office 365 email account, but don't get on with Outlook.
The email client you like doesn't support OAuth 2.0, which became mandatory [in January 2023](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-deprecation-in-exchange-online-september/ba-p/3609437).
- You used to use Gmail via IMAP/POP/SMTP with your raw account credentials (i.e., your real password), but cannot do this now that Google has disabled this method, and don't want to use an [App Password](https://support.google.com/accounts/answer/185833) (or cannot enable this option).
- You have an account already set up in an email client, and you need to switch it to OAuth 2.0 authentication.
You can edit the server details, but the client forces you to delete and re-add the account to enable OAuth 2.0, and you don't want to do this.
- You have made your own script or application that sends or receives email, but it doesn't support OAuth 2.0, and you don't want to have to modify it to implement this.
- You work with multiple services or applications that use IMAP/POP/SMTP, and you don't want to have to set up OAuth 2.0 independently for each one.

In all of these cases and more, this proxy can help.
Follow the instructions here to get started, and please [open an issue](https://github.com/simonrob/email-oauth2-proxy/issues) with any problems or suggestions.
For commercial support or feature requests, please also consider [sponsoring this project](https://github.com/sponsors/simonrob?frequency=one-time).