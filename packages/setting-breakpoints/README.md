# @avalanche/setting-breakpoints
Breakpoint sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: breakpoints)

## Install
```bash
npm install @avalanche/setting-breakpoints --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/setting-breakpoints/scss/index.scss';

// Import just the settings file.
@import 'node_modules/@avalanche/setting-breakpoints/scss/settings';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/setting-breakpoints';
```

## Usage
```scss
// Function.
@media (min-width: setting-breakpoint(m)) { }

// Map.
@media (min-width: map-get($breakpoints, m)) { }
```

## Settings
```scss
/// Breakpoint sizes.
/// @type Map
$breakpoints: (
  s: 30em,
  m: 45em,
  l: 60em,
  xl: 75em,
) !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
