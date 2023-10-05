# mongo-express

A web-based MongoDB admin interface written with Node.js, Express, and Bootstrap3

## Features
- Connect to multiple databases
- View/add/delete databases
- View/add/rename/delete collections
- View/add/update/delete documents
- Preview audio/video/image assets inline in the collection view
- Nested and/or large objects are collapsible for easy overview
- Async on-demand loading of big document properties (>100KB default) to keep collection view fast
- GridFS support - add/get/delete incredibly large files
- Use BSON data types in documents
- Mobile / Responsive - Bootstrap 3 works passably on small screens when you're in a bind
- Connect and authenticate to individual databases
- Authenticate as admin to view all databases
- Database blacklist/whitelist
- Custom CA and CA validation disabling
- Supports replica sets

## Screenshots

|Home Page|Database View|Collection View|Editing A Document|
|---|---|---|---|
|[![](https://camo.githubusercontent.com/bf9f84dbe8904f11cf1feee1257c384fc370f74b91aec78a27109466938c5676/687474703a2f2f692e696d6775722e636f6d2f58695968626c412e706e67 "Home Page showing databases")](https://camo.githubusercontent.com/bf9f84dbe8904f11cf1feee1257c384fc370f74b91aec78a27109466938c5676/687474703a2f2f692e696d6775722e636f6d2f58695968626c412e706e67)|[![](https://camo.githubusercontent.com/6933157b5afc955b83ed44edb82c87f9ce88e358515adc23d133cf7034dff0a1/687474703a2f2f692e696d6775722e636f6d2f585763496759312e706e67 "Viewing collections & buckets in a database")](https://camo.githubusercontent.com/6933157b5afc955b83ed44edb82c87f9ce88e358515adc23d133cf7034dff0a1/687474703a2f2f692e696d6775722e636f6d2f585763496759312e706e67)|[![](https://camo.githubusercontent.com/0d117c0fefa49f0f9d72d68633876694f6cc887915b26375375c073cc3b559d4/68747470733a2f2f696d6775722e636f6d2f556d47537233782e706e67 "Viewing documents in a collection")](https://camo.githubusercontent.com/0d117c0fefa49f0f9d72d68633876694f6cc887915b26375375c073cc3b559d4/68747470733a2f2f696d6775722e636f6d2f556d47537233782e706e67)|[![](https://camo.githubusercontent.com/7e5c4cea092e84aedb38a5a39acc86e4d69040a0fe8389ed22d705fc25833985/68747470733a2f2f696d6775722e636f6d2f6c4c333861626e2e706e67 "Editing a document")](https://camo.githubusercontent.com/7e5c4cea092e84aedb38a5a39acc86e4d69040a0fe8389ed22d705fc25833985/68747470733a2f2f696d6775722e636f6d2f6c4c333861626e2e706e67)|

These screenshots are from version 0.30.40 View the album for more screenshots: (server status, database views, etc..) [https://imgur.com/a/9vHsF](https://imgur.com/a/9vHsF)