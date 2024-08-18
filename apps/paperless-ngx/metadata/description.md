# Paperless-ngx 
Paperless-ngx is a document management system that transforms your physical documents into a searchable online archive so you can keep, well, less paper.

## ! IMPORTANT - PLEASE READ !
- Please **be patient** during installation, it may take a few minutes to download and install all dependencies.

- Please wait a few seconds after Tipi says that the installation was finished, because Paperless-ngx needs some time to start.

- **Tika** is available in this App, however you need to decide if you want to use it or not. You may disable it because of performance reasons. 
  - Tika allows you to upload Office documents (MSOffice, LibreOffice, etc) and automatically creates PDF versions of these documents. 
  - If you disable Tika, you will not be able to upload these document types. 
  - See here for more Information about Tika: https://docs.paperless-ngx.com/configuration/#tika

![Dashboard](https://github.com/paperless-ngx/paperless-ngx/raw/main/resources/logo/web/png/Black%20logo%20-%20no%20background.png#gh-light-mode-only)

![Dashboard](https://raw.githubusercontent.com/paperless-ngx/paperless-ngx/main/docs/assets/screenshots/documents-smallcards.png#gh-light-mode-only)

- Organize and index your scanned documents with tags, correspondents, types, and more.
- Performs OCR on your documents, adds selectable text to image only documents and adds tags, correspondents and document types to your documents.
- Supports PDF documents, images, plain text files, and Office documents (Word, Excel, Powerpoint, and LibreOffice equivalents).
  - Office document support is optional and provided by Apache Tika (see [configuration](https://docs.paperless-ngx.com/configuration/#tika))
- Paperless stores your documents plain on disk. Filenames and folders are managed by paperless and their format can be configured freely.
- Single page application front end.
  - Includes a dashboard that shows basic statistics and has document upload.
  - Filtering by tags, correspondents, types, and more.
  - Customizable views can be saved and displayed on the dashboard.
- Full text search helps you find what you need.
  - Auto completion suggests relevant words from your documents.
  - Results are sorted by relevance to your search query.
  - Highlighting shows you which parts of the document matched the query.
  - Searching for similar documents ("More like this")
- Email processing: Paperless adds documents from your email accounts.
  - Configure multiple accounts and filters for each account.
  - When adding documents from mail, paperless can move these mail to a new folder, mark them as read, flag them as important or delete them.
- Machine learning powered document matching.
  - Paperless-ngx learns from your documents and will be able to automatically assign tags, correspondents and types to documents once you've stored a few documents in paperless.
- Optimized for multi core systems: Paperless-ngx consumes multiple documents in parallel.
- The integrated sanity checker makes sure that your document archive is in good health.
- [More screenshots are available in the documentation](https://docs.paperless-ngx.com/#screenshots).
