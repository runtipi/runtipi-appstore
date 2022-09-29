# Selfhosted notification service

We wanted a simple server for sending and receiving messages (in real time per WebSocket). For this, not many open source projects existed and most of the existing ones were abandoned. Also, a requirement was that it can be self-hosted. We know there are many free and commercial push services out there.

At the heart of this project. (gotify/server)[https://hub.docker.com/r/gotify/server] features a WebUI and functionality for:

-   sending messages via a REST-API
-   subscribing/receiving messages via a web socket connection
-   managing users, clients and applications

