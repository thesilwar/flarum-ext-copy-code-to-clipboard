# Compatibility Verification

Verified on 2026-07-29.

| Flarum core | Verification | Result |
|---|---|---|
| `1.8.0` | Composer resolution with the extension required from its local path repository | Pass |
| `1.8.14` | Install, enable, forum boot, two code blocks, one button per block, mouse copy over HTTP | Pass |
| `1.8.16` | Install, enable, forum boot, one code block, keyboard and mouse copy over HTTP | Pass |
| `2.0.0-rc.5` | Install, enable, forum boot, one code block, mouse copy over HTTP | Pass |

The package requirement is:

```json
"flarum/core": "^1.8 || ^2.0.0@beta"
```

This means all Flarum releases from `1.8.0` through the latest `1.8.x`, plus
Flarum 2 prereleases and stable releases.

## Frontend builds

- `npm run build:v1` uses `flarum-webpack-config` 2.x.
- `npm run build:v2` uses `flarum-webpack-config` 3.x.
- `extend.php` selects `js/dist/v1/forum.js` or `js/dist/v2/forum.js` from the
  installed Flarum major version.

Both production builds and the Biome checks pass. `npm audit` reports no known
dependency vulnerabilities.

## Fixture note

`thesilwar/jq-link-manager` was temporarily disabled in the Flarum 2 fixture
because its unrelated LESS file referenced an undefined `@text-color` variable
and prevented every forum asset from compiling. The copy extension passes when
tested in isolation from that failure.
