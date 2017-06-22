# @avalanche/setting-spacings
Spacing sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: spacings)

## Install
```bash
npm install @avalanche/setting-spacings --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/setting-spacings/scss/index.scss';

// Import just the settings file.
@import 'node_modules/@avalanche/setting-spacings/scss/settings';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/setting-spacings';
```

## Usage
```scss
// Function.
.selector {
  margin-top: setting-spacing(m);
}

// Map.
.selector {
  margin-top: map-get($spacings, m);
}
```

## Settings
```scss
/// Spacing sizes.
/// @type Map
$spacings: (
  xs: 0.5em,
  s: 0.75em,
  m: 1em,
  l: 1.5em,
  xl: 2em,
  xxl: 3.5em,
  xxxl: 6em,
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
