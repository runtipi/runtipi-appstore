# Kiwix Server

Kiwix Server is a .zim compatible web server: it allows you to deliver .zim files over the HTTP protocol within your local network – be it a University or your own house. Simply start Kiwix-Serve on your machine, and your content will be available for anybody through their web browser. This allows you to view a website without having internet access.


**Ensure that your there are .zim files in the `${APP_DATA_DIR}/data/zim` directory otherwise the server won't launch properly and will need to be restarted**

For doumentation see [the Kiwix wiki](https://wiki.kiwix.org/wiki/Kiwix-serve)

## Features

* Full text search engine
* Search suggestions
* Really small and efficient
* Compatible with almost all browsers
* Available on all platforms
* Available as command line executable
* Embedded in Kiwix UI
* Able to deal with one ZIM file or XML library files
* [RESTful API endpoint with OPDS (XML)](https://wiki.kiwix.org/wiki/OPDS)

## What are ZIM files?

The ZIM file format is an open file format that stores wiki content for offline usage. The format is defined by the openZIM project, which also supports an Kiwix. The format is primarily used to store the contents of Wikipedia and other Wikimedia projects, including articles, full-text search indices and auxiliary files.

Download ZIM files from the [Kiwix library](https://library.kiwix.org/#lang=eng), or create your own (see [Zimit](https://www.youzim.it/))