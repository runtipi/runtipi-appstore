# Owncloud Infinite Scale

## Introduction

ownCloud Infinite Scale (oCIS) is the new file sync & share platform that will be the foundation of your data management platform.

Make sure to download the [latest released version](https://download.owncloud.com/ocis/ocis/stable/?sort=time&order=desc) today!

## Overview

### Clients

Infinite Scale allows the following ownCloud clients:

- [web](https://github.com/owncloud/web),
- [Android](https://github.com/owncloud/android),
- [iOS](https://github.com/owncloud/ios-app) and
- [Desktop](https://github.com/owncloud/client/)

to synchronize and share file spaces with a scalable server backend based on [reva](https://reva.link/) using open and well-defined APIs like [WebDAV](http://www.webdav.org/) and [CS3](https://github.com/cs3org/cs3apis/).

### Web Office Applications

Infinite Scale can integrate web office applications such as:

- [Collabora Online](https://github.com/CollaboraOnline/online),
- [OnlyOffice Docs](https://github.com/ONLYOFFICE/DocumentServer) or
- [Microsoft Office Online Server](https://owncloud.com/microsoft-office-online-integration-with-wopi/)

Collaborative editing is supported by the [WOPI application gateway](https://github.com/cs3org/wopiserver).

### Authentication

Users are authenticated via [OpenID Connect](https://openid.net/connect/) using either an external IdP like [Keycloak](https://www.keycloak.org/) or the embedded [LibreGraph Connect](https://github.com/libregraph/lico) identity provider.

### Installation

With focus on easy install and operation, Infinite Scale is delivered as a single binary or container that allows scaling from a Raspberry Pi to a Kubernetes cluster by changing the configuration and starting multiple services as needed. The multiservice architecture allows tailoring the functionality to your needs and reusing services that may already be in place like when using Keycloak. See the details below for various installation options.

## Important Readings

Before starting to set up an instance, we **highly** recommend reading the [Prerequisites](https://doc.owncloud.com/ocis/next/prerequisites/prerequisites.html), the [Deployment](https://doc.owncloud.com/ocis/next/deployment/) section and especially the [General Information](https://doc.owncloud.com/ocis/next/deployment/general/general-info.html) page describing and explaining information that is valid for all deployment types.
