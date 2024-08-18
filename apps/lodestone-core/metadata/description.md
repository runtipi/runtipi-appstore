## Lodestone Core

A free, open source server hosting tool for Minecraft and other multiplayers

### Important Connection and Setup Information

- **Important Connection**: Connect to your remote hosted lodestone instance at the [Lodestone Web Gui](https://www.lodestone.cc) or with the [Desktop Apps Here](https://github.com/Lodestone-Team/dashboard/releases/latest)

- **First User Setup**: After connecting to the panel, it will ask you to setup your inital user. To find the secret key, you can find it in your logs with `docker logs lodestone-core`

### Ports

- Ports 25565-25575 are open for Minecraft Servers

- Port 16662 used by the [Lodestone Dashboard](https://lodestone.cc)

### Features and roadmap

- [x] Clean and intuitive UI
- [x] One-click installation and setup
- [x] Collaborative remote server and resource management
- [x] Priority on safety and security
- [ ] User permission management 🚧
- [ ] Automated macros and tasks 🚧
- [ ] Connecting without port forward 🚧

For any troubleshooting, see our [wiki](https://github.com/Lodestone-Team/lodestone/wiki/Known-Issues).

### Safety & Security

Lodestone Core is written entirely in safe Rust, and uses`#![forbid(unsafe_code)]`. However **we can't guarantee the safety of the crates and binaries we link to**, as those may use unsafe rust.

Lodestone is created with security as a top priority. While most of the safety critical code such as login and permissions management have been tested thoroughly, **no formal security audit has been done for any part of Lodestone.**
