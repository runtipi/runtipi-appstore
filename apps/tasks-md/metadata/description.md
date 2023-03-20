# ✒️ Tasks.md

A self-hosted file based task management board that supports Markdown syntax.

![Demonstration](https://github.com/BaldissaraMatheus/Tasks.md/raw/main/public/demonstration.gif)

## ⭐ Features

- Create cards, lists and tags in a modern and responsive interface;
- Write cards as Markdown files;
- Easy to install with a single Docker image;
- Light and dark themes synced with operating system settings;
- Heavy customizable with 3 default color themes ([Adwaita](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/named-colors.html), [Nord](https://www.nordtheme.com/) and [Catppuccin](https://github.com/catppuccin/catppuccin));
- Support for subpath based reverse-proxy with an environment variable for base path;

## 🎨 Customize

All CSS files are available in the public stylesheets directory, which can be mounted as a docker volume. It already comes with 3 color themes: [Adwaita](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/named-colors.html), [Nord](https://www.nordtheme.com/) and [Catppuccin](https://github.com/catppuccin/catppuccin). To use them, open the file `/stylesheets/index.css` and change the second line to the path of the color theme you want, you can find them under `/stylesheets/color-themes`.
