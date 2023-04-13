## (Optional) Use cookies from a real account

You can provide your own cookies to circumvent any Rate Limiting Issue.

### YouTube cookie

-   Navigate to YouTube in a web browser
-   Log in, preferrably with a separate account you don't use often
-   Open up the dev tools console
-   Type `document.cookie`
-   Copy the entire response into the `VIEWTUBE_YOUTUBE_COOKIE` environment variable

### YouTube identifier

-   Navigate to a video
-   Right click and click "view source"
-   Press CTRL+F to search for "ID\_TOKEN"
-   Copy this value into the `VIEWTUBE_YOUTUBE_IDENTIFIER` environment variable

```
  "form_fields": [
    {
      "type": "text",
      "label": "Youtube Cookie",
      "hint": "Optional, Read below",
      "required": false,
      "env_variable": "VIEWTUBE_YOUTUBE_COOKIE"
    },
    {
      "type": "text",
      "label": "Youtube Identifier",
      "hint": "Optional, Read below",
      "required": false,
      "env_variable": "VIEWTUBE_YOUTUBE_IDENTIFIER"
    }
  ]
```
