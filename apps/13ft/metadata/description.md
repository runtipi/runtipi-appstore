# 13 Feet Ladder

A site similar to [12ft.io](https://12ft.io) but is self-hosted and works with websites that 12ft.io doesn't work with.

## What is this?

This is a self-hosted server that has a simple but powerful interface to block ads, paywalls, and other nonsense. Specially for sites like Medium or The New York Times which have paid articles that you normally cannot read. Now I do want you to support the creators you benefit from, but if you just want to see one single article and move on with your day then this might be helpful.

## How does it work?

It pretends to be GoogleBot (Google's web crawler) and gets the same content that google will get. Google gets the whole page so that the content of the article can be indexed properly and this takes advantage of that.

## How do I use it?

### On Tipi

#### Step 0

Install the app. Expose it to the internet if you like.

#### Step 1

![step 1 13ft homepage](https://github.com/wasi-master/13ft/blob/main/screenshots/step-1.png)

Open the app in the Tipi dashboard or directly by url

#### Step 2

![step 2 Focus the input box](https://github.com/wasi-master/13ft/raw/main/screenshots/step-2.png)

Click on the input box

#### Step 3

![step 3 paste your desired url](https://github.com/wasi-master/13ft/raw/main/screenshots/step-3.png)

Paste the url you'd like to access

#### Step 4

![step 4 Profit!](https://github.com/wasi-master/13ft/raw/main/screenshots/step-4.gif)

Et voilà! You now have bypassed the paywall and ads and can read the content without distractions.

#### Alternative method

You can also append the destination url at the end of the 13ft address. (e.g. if your server is running at `http://127.0.0.1:5013` then you can go to `http://127.0.0.1:5013/https://example.com` and it will provide the contents of `https://example.com`)

This feature is possible thanks to [atcasanova](https://github.com/atcasanova)
