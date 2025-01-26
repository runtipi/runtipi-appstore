# Authentik-FH

Authentik is an open-source Identity Provider that emphasizes flexibility and versatility, with support for a wide set of protocols.

Authentik is a versatile and secure open-source Identity Provider (IdP) and Single Sign-On (SSO) solution. Here are some of its key features:

- **Self-hosting**: You can host authentik anywhere, giving you full control over your data.
- **Multi-Factor Authentication (MFA)**: Adds an extra layer of security to your authentication processes.
- **Conditional Access**: Allows you to set specific conditions for access based on various factors.
- **Application Proxy**: Provides secure access to your applications.
- **Protocol Support**: Supports a wide range of protocols including SAML2, OAuth2, OIDC, SCIM, LDAP, and RADIUS.
- **Federation Support**: Enables integration with other identity providers using protocols like SAML2, OAuth2, and LDAP.
- **Customizable Workflows**: Use pre-built workflows or customize every step of authentication through configurable templates and comprehensive APIs.
- **User and Admin Interfaces**: Offers user-focused and task-oriented dashboards for managing users, groups, tokens, credentials, and application integrations.
- **Security**: Emphasizes security with open-source code continuously reviewed by experts.

You can find more details on their [official website](https://goauthentik.io/).

## Installation

The initial installation can take several minutes to complete.

Look at the log display in the `Logs` tab of the Authentik app.

***IMPORTANT: Wait until there are no new log entries created and wait at least 1 additional minute before proceeding ! If the WebUI of authentik is called before the installation routine completes, it will brake the setup!***

Now open the app and modify the browser url as follows:

- change `https` to `http`
- change anything after `/if/` and replace it with `flow/initial-setup/`

then press enter.

## Docs

Visit the [documentation](https://goauthentik.io/docs/) for more information
