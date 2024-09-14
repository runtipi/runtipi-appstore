### A fully local and Dockerized quakejs server. Independent, unadulterated, and free from the middleman.

The goal of this project was to create a fully independent quakejs server in Docker that does not require content to be served from the internet.
Hence, once pulled, this does not need to connect to any external provider, ie. content.quakejs.com. Nor does this server need to be proxied/served/relayed from quakejs.com

## Host your own QuestJS Server

To host your own QuakeJS Server. You need to add "27960" port forwarding to your Router or VPS.

Then enter this URL. (Replace "{XXX.XXX.X.XXX}" with your Public IP Address)

http://www.quakejs.com/play?connect%20{XXX.XXX.X.XXX}:27960
