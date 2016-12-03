# @avalanche/setting-breakpoints
Breakpoint sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: breakpoints)

## Install
```bash
npm install @avalanche/setting-breakpoints --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-breakpoints';

// Import just the settings file.
@import '~@avalanche/setting-breakpoints/scss/settings';
```

## Usage
```scss
// Function.
@media (min-width: setting-breakpoint(m)) { }

// Map.
@media (min-width: map-get($breakpoints, m)) { }
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
