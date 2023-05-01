# Inital User Account & Admin

To Create your user 
1. SSH Into your Tipi Server
2. Fill in your Creditnals (some_username,someone@example.org, some_very_good_password), then run the command! `docker exec -it gotosocial /gotosocial/gotosocial admin account create --username some_username --email someone@example.org --password 'some_very_good_password' `

To Promote the Intial User or any user to admin

1. SSH Into your Tipi Server
2. Fill in your Creditnals (some_username), then run the command! `docker exec -it gotosocial /gotosocial/gotosocial admin account promote --username some_username`
3. Go Back To your WebUI, Stop and Start your instance.
4. go to yourdomain.com/settings and you will be able to see personal and instance settings!


---

# GoToSocial

GoToSocial is an [ActivityPub](https://activitypub.rocks/) social network server, written in Golang.

With GoToSocial, you can keep in touch with your friends, post, read, and share images and articles. All without being tracked or advertised to!

[![](https://github.com/superseriousbusiness/gotosocial/raw/main/docs/assets/sloth.png)](https://github.com/superseriousbusiness/gotosocial/blob/main/docs/assets/sloth.png)

**GoToSocial is still [ALPHA SOFTWARE](https://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha)**. It is already deployable and useable, and it federates cleanly with many other Fediverse servers (not yet all). However, many things are not yet implemented, and there are plenty of bugs! We foresee entering beta somewhere in 2023.

Documentation is at [docs.gotosocial.org](https://docs.gotosocial.org). You can skip straight to the API documentation [here](https://docs.gotosocial.org/en/latest/api/swagger/). To build from source, check the [CONTRIBUTING.md](https://github.com/superseriousbusiness/gotosocial/blob/main/CONTRIBUTING.md) file.

Here's a screenshot of the instance landing page!

[![Screenshot of the landing page for the GoToSocial instance goblin.technology. It shows basic information about the instance; number of users and posts etc.](https://github.com/superseriousbusiness/gotosocial/raw/main/docs/assets/instancesplash.png)](https://github.com/superseriousbusiness/gotosocial/blob/main/docs/assets/instancesplash.png)

## [Read More!](https://github.com/superseriousbusiness/gotosocial#table-of-contents-)