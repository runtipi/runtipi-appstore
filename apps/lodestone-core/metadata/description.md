A free, open source server hosting tool for Minecraft and other multiplayers

# Important Connection and Setup Information

- **Important Connection**: Connect to your remote hosted lodestone instance at the [Lodestone Web Gui](https://www.lodestone.cc/login/core/new?address=localhost&port=16662&protocol=http&apiVersion=v1) or with the [Desktop Apps Here](https://github.com/Lodestone-Team/lodestone#download)

- **First User Setup**: After connecting to the panel, it will ask you to setup your inital user. To find the secret key, you can find it in your logs with `docker logs lodestone-core`


# Ports 
- Ports 25565-25575 are open for Minecraft Servers

---

[![Lodestone Screen Shot](https://github.com/Lodestone-Team/lodestone/raw/main/public/assets/readmeRender.png)](https://www.lodestone.cc/)

# [](https://github.com/Lodestone-Team/lodestone#lodestone)Lodestone

A free, open source server hosting tool for Minecraft and other multiplayers

🔗 Get Started: [https://www.lodestone.cc/](https://www.lodestone.cc/)

## [](https://github.com/Lodestone-Team/lodestone#features-and-roadmap)Features and roadmap

-   [x]  Clean and intuitive UI
-   [x]  One-click installation and setup
-   [x]  Collaborative remote server and resource management
-   [x]  Priority on safety and security
-   [ ]  User permission management 🚧
-   [ ]  Automated macros and tasks 🚧
-   [ ]  Connecting without port forward 🚧

[![Lodestone Spring 2023 Roadmap](https://github.com/Lodestone-Team/lodestone/raw/main/public/assets/springRoadmap.png)](https://github.com/Lodestone-Team/lodestone/blob/main/public/assets/springRoadmap.png)

## [](https://github.com/Lodestone-Team/lodestone#download)[Download](https://github.com/Lodestone-Team/dashboard/releases/latest)

You can download the Lodestone client from our [release page](https://github.com/Lodestone-Team/dashboard/releases/latest).

We also have a [webapp](https://www.lodestone.cc/) in early access for remote management.

For any troubleshooting, see our [wiki](https://github.com/Lodestone-Team/lodestone/wiki/Known-Issues).

For installing Lodestone Core, check out [here](https://github.com/Lodestone-Team/lodestone_core).

## [](https://github.com/Lodestone-Team/lodestone#safety--security)Safety & Security

Lodestone Core is written entirely in safe Rust, and uses`#![forbid(unsafe_code)]`. However **we can't guarantee the safety of the crates and binaries we link to**, as those may use unsafe rust.

Lodestone is created with security as a top priority. While most of the safety critical code such as login and permissions management have been tested thoroughly, **no formal security audit has been done for any part of Lodestone.**

## [](https://github.com/Lodestone-Team/lodestone#contributing)
