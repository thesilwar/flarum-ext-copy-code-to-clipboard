# Copy Code to Clipboard

[![license](https://img.shields.io/github/license/thesilwar/flarum-ext-copy-code-to-clipboard?style=flat)](https://github.com/thesilwar/flarum-ext-copy-code-to-clipboard/blob/main/UNLICENSE)
[![packagist](https://img.shields.io/packagist/v/thesilwar/flarum-ext-copy-code-to-clipboard?style=flat)](https://packagist.org/packages/thesilwar/flarum-ext-copy-code-to-clipboard)
[![changelog](https://img.shields.io/github/release-date/thesilwar/flarum-ext-copy-code-to-clipboard?label=last%20release%20date)](https://github.com/thesilwar/flarum-ext-copy-code-to-clipboard/blob/main/CHANGELOG.md)

> Adds a copy button to html code tags, allowing users to easily copy the code content.

Maintained Flarum 1.8 and 2.x-compatible fork of
[Nearata/flarum-ext-copy-code-to-clipboard](https://github.com/Nearata/flarum-ext-copy-code-to-clipboard).
Nearata remains credited as the original developer.

![](screenshot.png)

## Compatibility

- Flarum 1.8, including the 1.8.14 and 1.8.16 test installations
- Flarum 2.0 release candidates and stable releases

The package ships separate frontend assets for Flarum 1 and Flarum 2. The
matching asset is selected automatically at runtime. The modern Clipboard API
is used in secure contexts, with a legacy copy fallback for HTTP installations.

## Install

```sh
composer require thesilwar/flarum-ext-copy-code-to-clipboard
```

Remove the original `nearata/flarum-ext-copy-code-to-clipboard` package first
if it is installed. The two packages intentionally conflict because they
provide the same extension.
