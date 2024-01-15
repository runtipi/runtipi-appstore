# CyberChef

#### *The Cyber Swiss Army Knife*

CyberChef is a simple, intuitive web app for carrying out all manner of "cyber" operations within a web browser. These operations include simple encoding like XOR and Base64, more complex encryption like AES, DES and Blowfish, creating binary and hexdumps, compression and decompression of data, calculating hashes and checksums, IPv6 and X.509 parsing, changing character encodings, and much more.

The tool is designed to enable both technical and non-technical analysts to manipulate data in complex ways without having to deal with complex tools or algorithms. It was conceived, designed, built and incrementally improved by an analyst in their 10% innovation time over several years.

## Live demo

CyberChef is still under active development. As a result, it shouldn't be considered a finished product. There is still testing and bug fixing to do, new features to be added and additional documentation to write. Please contribute!

Cryptographic operations in CyberChef should not be relied upon to provide security in any situation. No guarantee is offered for their correctness.

[A live demo can be found here][1] - have fun!

### Containerized by github.com/mpepping

Cyberchef does all its work in the client so doesn't require a server aside from to serve the HTTP requests - it can be served from an S3 bucket or something like [Glitch](https://thecyberchef.glitch.me). This is another easy way to self-host.

> GCHQ CyberChef in a container. CyberChef is the Cyber Swiss Army Knife web app for encryption, encoding, compression and data analysis.

(from the README at https://github.com/mpepping/docker-cyberchef)