# Hammond

Current Version - 2022.07.06

A self-hosted vehicle expense tracking system with support for multiple users.  
[**Explore the docs »**](https://github.com/akhilrex/hammond)  
  
[Report Bug](https://github.com/akhilrex/hammond/issues) · [Request Feature](https://github.com/akhilrex/hammond/issues) · [Screenshots](https://github.com/akhilrex/hammond/blob/master/Screenshots.md)

## About The Project

Hammond is a self hosted vehicle management system to track fuel and other expenses related to all of your vehicles. It supports multiple users sharing multiple vehicles. It is the logical successor to Clarkson which has not been updated for quite some time now.

_Developers Note: This project is under active development which means I release new updates very frequently. It is recommended that you use something like [watchtower](https://github.com/containrrr/watchtower) which will automatically update your containers whenever I release a new version or periodically rebuild the container with the latest image manually._

**Also check out my other self-hosted, open-source solution - [Podgrab](https://github.com/akhilrex/podgrab) - Podcast download and archive manager and player.**

### Motivation and Developer Notes

I was looking for a fuel tracking system and stumbled upon Clarkson. Although it did most of what I needed it has not been updated for quite a lot of time. Since I had some bandwidth available as my previous open source project [Podgrab](http://github.com/akhilrex/podgrab) had become quite stable now, my first thought was to contribute to the Clarkson project only. I soon realized that the architecture that Clarkson had used was not really be that extensible now and would warrant a complete rewrite only. So I decided to build Hammond - The successor to Clarkson.

The current version of Hammond is written using GO for backend and Vuejs for the front end. Originally I had thought of using the same tech stack for both frontend and the backend so that it became easier for users and other developers to use, deploy and contribute. Which is why the first version of Hammond has a NestJS backend complete with all the bells and whistles (GraphQL, Prisma and what nots). But I eventually decided to rebuild the backend in GO just to keep the container size small. No matter how much you can optimize the sheer size of the node\_modules will always add bulk to your containers. I host all my tools on my Raspberry Pi. It only makes sense to keep the container size as small as possible.

Also I had initially thought of a 2 container approach (1 for backend and 1 for the frontend) so that they can be independently maintained and updated. I eventually decided against this idea for the sake of simplicity. Although it is safe to assume that most self-hosters are fairly tech capable it still is much better to have a single container that you can fire and forget.

[![Product Name Screen Shot](https://github.com/akhilrex/hammond/raw/master/images/screenshot.jpg)](https://github.com/akhilrex/hammond/blob/master/images/screenshot.jpg) [More Screenshots](https://github.com/akhilrex/hammond/blob/master/Screenshots.md)