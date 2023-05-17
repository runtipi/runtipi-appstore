## Initial Setup

To get the SMP Server Address 

1. SSH into your Tipi Server
2. Run `sudo docker logs simplex-smp 2>&1 | grep "Server address:" ` to find out the SMP Server Address.

---

📢 SimpleXMQ v1 is released - with many security, privacy and efficiency improvements, new functionality - see [release notes](https://github.com/simplex-chat/simplexmq/releases/tag/v1.0.0).

**Please note**: v1 is not backwards compatible, but it has the version negotiation built into all protocol layers for forwards compatibility of this version and backwards compatibility of the future versions, that will be backwards compatible for at least two versions back.

If you have a server deployed please deploy a new server to a new host and retire the previous version once it is no longer used.

## [](https://github.com/simplex-chat/simplexmq#message-broker-for-unidirectional-simplex-queues)Message broker for unidirectional (simplex) queues

SimpleXMQ is a message broker for managing message queues and sending messages over public network. It consists of SMP server, SMP client library and SMP agent that implement [SMP protocol](https://github.com/simplex-chat/simplexmq/blob/stable/protocol/simplex-messaging.md) for client-server communication and [SMP agent protocol](https://github.com/simplex-chat/simplexmq/blob/stable/protocol/agent-protocol.md) to manage duplex connections via simplex queues on multiple SMP servers.

SMP protocol is inspired by [Redis serialization protocol](https://redis.io/topics/protocol), but it is much simpler - it currently has only 10 client commands and 8 server responses.

SimpleXMQ is implemented in Haskell - it benefits from robust software transactional memory (STM) and concurrency primitives that Haskell provides.

## [](https://github.com/simplex-chat/simplexmq#simplexmq-roadmap)SimpleXMQ roadmap

-   SimpleX service protocol and application template - to enable users building services and chat bots that work over SimpleX protocol stack. The first such service will be a notification service for a mobile app.
-   SMP queue redundancy and rotation in SMP agent connections.
-   SMP agents synchronization to share connections and messages between multiple agents (it would allow using multiple devices for [simplex-chat](https://github.com/simplex-chat/simplex-chat)).