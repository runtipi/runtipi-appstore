# traefik-certs-dumper

Dumps Let's Encrypt certificates of a specified domain to `.pem` and `.key` files which Traefik stores in `acme.json`.

This image uses:

- a bash script that derivates from [mailu/traefik-certdumper](https://hub.docker.com/r/mailu/traefik-certdumper)
- [ldez's traefik-certs-dumper](https://github.com/ldez/traefik-certs-dumper)

Special thanks to them!

## Help

If you need help using this image, have suggestions or want to report a problem, feel free to open an issue on GitHub!