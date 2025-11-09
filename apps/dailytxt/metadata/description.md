## First start
Make sure to allow the registration on the first run to create the necessary accounts.Then you can disable registration and restart the app.

# DailyTxT

DailyTxT is an encrypted Diary/Journal WebApp with several [features](#features). It is written in [Svelte](https://svelte.dev/) and [Go](https://golang.org/) and meant to be run by [Docker](https://www.docker.com/) - supports AMD64 and ARM64.

![DailyTxT Sreenshot](https://github.com/PhiTux/DailyTxT/raw/refs/heads/main/readme/combined_readme.png)

## Features

- **Encryption**: Everything you write is encrypted before it's written to the server's storage. Even the admin can't read your private stuff!
- **File-Upload**: You can upload arbitrary files for each day (500 MB max each). They are stored encrypted on the server as well. Images are automatically recognized and added to the...
- **Image Viewer**: View all images of a day in a gallery view and in full screen.
- **Markdown**: You can write your entries in markdown and see a live preview.
- **Tags**: You can add tags to your entries for better organization.
- **Search**: You can search for any word, tag or filename in your entries.
- **Custom Templates**: You can create and use custom templates for your entries.
- **Read Mode**: A distraction-free mode for reading your entries of each month.
- **Multi-Language**: DailyTxT is currently available in **<ins>German and English</ins>**. New languages can be added easily, see [TRANSLATION.md](TRANSLATION.md) for instructions.
- **Export to HTML**: You can export your entries (including uploaded files) to HTML format.
- **Mobile**: Responsive design for easy use on mobile screen. Additionally: allows installation as a PWA (Progressive Web App) to your Homescreen.
- **Multi-User**: You can create multiple User Accounts. Each account uses its own encryption key.
- **Admin Panel**: You can (among other things) manage users and open registration for 5 minutes.
- **Statistics Panel**: Each user can see some statistics about his entries (among other things there is a GitHub-like statistic of your entry-distribution).
- **Update Notification**: You will be notified about new docker images.


## Usage Tips

- You can swipe left/right in the calendar to change months.
- You can swipe left/right in the date-area above the editor to switch between days.
- Use Alt + Left/Right (or Ctrl + Option + Left/Right on Mac) to switch between days.
- Drag'n'drop files into DailyTxT to upload them.
- The editor saves automatically. Green border means everything is saved, orange border means unsaved changes.
- You can change the order of files (and images!) by dragging them (at the left side) in the file list.
- A yellow dot in the calendar means, that there are uploaded files for this day.
- The orange button in the calendar can highlight the current day.


## About encryption and data storage

🔒 For encryption ChaCha20-Poly1305 is used.

When a user logs in, a key is derived from his password with Argon2id, it is called the *derived key*. The *derived key* is stored in a http-only cookie and send on every API-call. This key is used to decrypt the user's *encryption key* (which is randomly generated when the user is created). The *encryption key* is used to encrypt/decrypt all data of this user (entries and uploaded files) and never leaves the server. 

When a user changes his password, the *encryption key* is decrypted with the old *derived key* and re-encrypted with a new *derived key* (derived from the new password).

There is no E2E-encryption used on client-side, because the search-functionality would not work then. All data would have to be sent to client-side for searching.

There are also backup-keys available which can be used as a password-replacement. When they are created, they store the *derived key* encrypted with a random *backup key*. These *backup keys* are shown to the user only once and are to be stored safely by him. When a user loses his password, he can use this *backup key* to decrypt the *derived key* and from that the *encryption key*.

All data is stored in json-files. No database is used, because the main goal is to guarantee highest portability and longterm availability of the data.

> 🗣️🌍 You want to add new languages? See [TRANSLATION.md](https://github.com/PhiTux/DailyTxT/blob/TRANSLATION.md) for instructions.

> ⁉️ You have questions, new feature requests or want to report bugs? Please open a new [issue](https://github.com/PhiTux/DailyTxT/issues).