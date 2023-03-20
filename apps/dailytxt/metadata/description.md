# You probably want to allow the registration on the first run, generate the necessary accounts, and then restart the container with disallowed registration!

# DailyTxT

DailyTxT is an encrypted Diary Web-App to write down your stories of the day and to find them again easily. It is written in [Python Flask](https://flask.palletsprojects.com/) (Backend) and [Vue.JS](https://vuejs.org/) (Frontend) and meant to be run by **[Docker](https://hub.docker.com/r/phitux/dailytxt/)**.

You should definitely take a quick look at [How to Use](#features) to see all the hidden features.

## [](#features)Features

-   **Encryption:** Everything you write is encrypted before it's written to the server's storage. Even the admin can't read your private stuff!
-   **File-Upload:** You can upload arbitrary files for each day (128 MB max each). They are **stored encrypted** on the server as well.
-   **Search:** Support your memory by easily scanning your notes for any keyword and rediscovering details you may have almost forgotten.
-   **Multi-Language-Support:** The Web-App is currently available in **German**, **English** and **Spanish** translation. The language gets detected and selected automatically based on your browser's settings. More languages are easy to add - [iff](https://en.wikipedia.org/wiki/If_and_only_if) **you** provide me with the language-files! See `client/src/lang/translations`
-   **Mobile:** Responsive design for easy use on mobile screen. Additionally: allows installation "A2HS" (Add 2 Home Screen)
-   **Multi-User-Spport:** You can create multiple User Accounts. Each account uses its own encryption key - so there is no risk for a data breach.
-   **Backup & Restore:** You can export all data (decrypted) for backup-reasons in a zip-file and reimport the data later by uploading the zip.
-   **Templates:** Create templates, which you can reuse every day.
-   If you came from [journey.cloud](https://journey.cloud), you could try [this script](https://github.com/PhiTux/DailyTxT/issues/13#issue-1327951670) to **import** your text to DailyTxT.

## [](https://github.com/PhiTux/DailyTxT#how-to-use)How to Use

There are two cool Shortcuts you should know:

-   Move back/forth one day: Alt + ← / Alt + →
-   Select the search field: Ctrl + F

[![DailyTxT Description](https://github.com/PhiTux/DailyTxT/raw/master/readme/DailyTxT_Description.jpg)](https://github.com/PhiTux/DailyTxT/blob/master/readme/DailyTxT_Description.jpg)

### [](https://github.com/PhiTux/DailyTxT#note-on-backup--restore)Note on backup & restore:

You can only reimport/restore **all** data at once, that was exported before, it's not selective! The restored data is then the most recent data for each day and any previous data for that day was moved to the day's history.