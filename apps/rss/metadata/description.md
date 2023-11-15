# RSS

A simple, opinionated, RSS feed aggregator.

# Edit the feeds.txt file.

## Feed Configuration

Feed configuration is handled by a plaintext file on the host system.
By default, using our docker image, this configuration would be located in a `feeds.txt` file within the path you mounted to `/app/storage`.

The format of this file can be seen below:

```txt
https://feed.url.com/feed.xml feed-name #tag-a #tag-b
https://example.com/feed.xml Example #updates #news

# Lines starting with a hash are considered comments.
# Empty lines are fine and will be ignored.

# Underscores in names will be converted to spaces.
https://example.com/feed-b.xml News_Site #news

# Feed color can be set using square brackets after the name.
# The color must be a CSS-compatible color value.
https://example.com/feed-c.xml Blue_News[#0078b9] #news #blue
```

## Features

The following features are built into the application:

- Supports RSS and ATOM formats.
- Regular auto-fetching of RSS feeds.
  - Every hour by default, configurable down to 5 mins. 
- Custom feed names and colors.
- Feed-based tags for categorization.
- 3 different post layout modes (card, list, compact).
- Fetching of page open-graph images.
- Feeds managed via a single plaintext file.
- System-based dark/light theme.
- Post title/description search.
- Ready-to-use docker image.
- Mobile screen compatible.
- Built-in support to prune old post data.

## Limitations

The below possibly expected features are missing from this application.
This is not a list of planned features. Please see the [Low Maintenance Project](#low-maintenance-project) section below for more info.

- No import of full post/article content.
- No feed management via the UI.
- No user system or user management system.
- No authentication or authorization built-in.
- No customization, extension or plugin system.
- No organisation upon simple feed-level tagging.
- Error handling is limited and will likely not alert clearly upon issue.

Upon the above, it's quite likely you'll come across issues. This project was created to meet a personal need while learning some new technologies. Much of the logic is custom written instead of using battle-tested libraries. 

## Screenshots


<table>
	<tbody>
		<tr>
			<td width="25%">
				Card View
				<img src="https://github.com/ssddanbrown/rss/raw/main/.github/screenshots/card-view.png">
			</td>
			<td width="25%">
				List View
				<img src="https://github.com/ssddanbrown/rss/raw/main/.github/screenshots/list-view.png">
			</td>
			<td width="25%">
				Compact View
				<img src="https://github.com/ssddanbrown/rss/raw/main/.github/screenshots/compact-view.png">
			</td>
			<td width="25%">
				Dark Mode
				<img src="https://github.com/ssddanbrown/rss/raw/main/.github/screenshots/dark-mode.png">
			</td>
		</tr>
	</tbody>
</table>



