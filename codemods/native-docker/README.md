# Native Docker Codemod

This Codemod package converts Runtipi `docker-compose.json` app definitions to `docker-compose.yml` files that use the new `x-runtipi` extension block described in `native-docker.md`.

Before writing a file, the codemod validates the generated compose document and aborts if it does not match the expected Runtipi YAML shape.

## Usage

Run from the app store root:

```bash
npx codemod@latest @runtipi/native-docker
```

That default run is a dry-run. To write files:

```bash
npx codemod@latest @runtipi/native-docker --param write=true
```

Convert a single app:

```bash
npx codemod@latest @runtipi/native-docker --param app=maintainerr --param write=true
```

Overwrite existing `docker-compose.yml` files:

```bash
npx codemod@latest @runtipi/native-docker --param write=true --param force=true
```

Delete `docker-compose.json` files after a successful write:

```bash
npx codemod@latest @runtipi/native-docker --param write=true --param force=true --param delete_json=true
```

If you are not running the command from the repo root, pass the app store path explicitly:

```bash
npx codemod@latest @runtipi/native-docker --param root=/absolute/path/to/appstore --param write=true
```
