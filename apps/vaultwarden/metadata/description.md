## All your passwords in your control!

Alternative implementation of the Bitwarden server API written in Rust and compatible with [upstream Bitwarden clients](https://bitwarden.com/download/), perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

Basically full implementation of Bitwarden API is provided including:

 * Organizations support
 * Attachments
 * Vault API support
 * Serving the static files for Vault interface
 * Website icons API
 * Authenticator and U2F support
 * YubiKey and Duo support

 ## Admin Panel 
 You can access the [admin panel](https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page) of your Vaultwarden instance through:
 `https://your-url/admin`

 You will then need to enter your defined Admin Key.

 ### Creating an Admin Key

To avoid saving your Admin Key as plain text, we recommend generating an argon2 hash.
You should generate it using the following command: *(replace 'YourPassword' with your desired password)*

```
echo -n 'YourPassword' | argon2 "$(openssl rand -base64 32)" -e -id -k 65540 -t 3 -p 4 | sed 's/\$/$$/g'
```
You can directly paste the output directly in the app install form, it should look like this :
*`$$argon2id$$v=19$$m=65540,t=3,p=4$$SFFWaW8rMnVlNzd6YkdkdE5IeFZBcnhjcXI4VktLNHg1WTEvQ2xCNUIrST0$$qHSsyXRO4s6gBIJMpd7xfdWFwA9QV4Ng3ebcgt437TQ`*
