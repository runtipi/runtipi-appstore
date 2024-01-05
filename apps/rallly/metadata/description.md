<div align="center">
  
<img src="https://raw.githubusercontent.com/lukevella/rallly/d36c363f60ffdbc7679bf0ae5c6cd74a48a79b47/assets/images/logo-color.svg" width="200px" alt="Rallly" />

</div>
<br />

<img src="https://raw.githubusercontent.com/lukevella/rallly/main/assets/images/splash.png" alt="Rallly" />

## Description
Schedule group meetings with friends, colleagues and teams. Create meeting polls to find the best date and time to organize an event based on your participants' availability. Save time and avoid back-and-forth emails.

Built with [Next.js](https://github.com/vercel/next.js/), [Prisma](https://github.com/prisma/prisma), [tRPC](https://github.com/trpc/trpc) & [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

## Runtipi configuration variables

| Label           | Tipi ENV name           | Type     | Description                                                                                                                                      | Required |
|-----------------|-------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| NoReply Email   | RALLLY_NOREPLY_EMAIL    | email    | The email address that will be used to send emails. If not set, SUPPORT_EMAIL will be used instead.                                              | NO       |
| Support Email   | RALLLY_SUPPORT_EMAIL    | email    | The email of whoever is managing this instance in case a user needs support.                                                                     | YES      |
| Allowed Emails  | RALLLY_ALLOWED_EMAILS   | text     | Comma separated list of email addresses that are allowed to register and login. You can use wildcard syntax to match a range of email addresses. | NO       |
| SMTP Host       | RALLLY_SMTP_HOST        | text     | The host address of your SMTP server                                                                                                             | YES      |
| SMTP Port       | RALLLY_SMTP_PORT        | number   | The port of your SMTP server                                                                                                                     | YES      |
| SMTP Secure     | RALLLY_SMTP_SECURE      | boolean  | Set to "true" if SSL is enabled for your SMTP connection                                                                                         | NO        |
| SMTP Enable TLS | RALLLY_SMTP_TLS_ENABLED | boolean  | Enable TLS for your SMTP connection                                                                                                              | NO        |
| SMTP User       | RALLLY_SMTP_USER        | text     | The username (if auth is enabled on your SMTP server)                                                                                            | NO       |
| SMTP Password   | RALLLY_SMTP_PWD         | password | The password (if auth is enabled on your SMTP server)                                                                                            | NO       |

