# Install Information

# SMTP Server

For Email Verfication, you need some sort of SMTP Provider 

A few options are using GMAIl as a SMTP server, a SMTP Provider like SMTP2Go or MailGun, or if you host your own mailserver

Here are some Methods
- [Gmail SMTP Guide by Noted.lol](https://noted.lol/setup-gmail-smtp-sending-2023/)
- [SMTP2Go](https://get.smtp2go.com/cplmmj203pg7)

### SMTP From
Make Sure when setting the SMTP From Adress, it matches the `Revolt <noreply@example.com>` format. An example could be `Tipi Chat <no-reply@runtipi.io>`

## Invite Only Instance

Set Revolt Invite Only to `1`

If set, you can create invites by SSHing into your Tipi Server and running these commands

1. `docker exec -i revolt-database mongosh`

2.
```
use revolt
db.invites.insertOne({ _id: "enter_an_invite_code_here" })
```

### Voice Server Information
 Revolts self hosted setup currently does not have a working voice server. Thier Voice Server, [Vortex](https://github.com/revoltchat/vortex), [devlopemnt is paused.](https://github.com/revoltchat/self-hosted/pull/28#issuecomment-1522325342)

