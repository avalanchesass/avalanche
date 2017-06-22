# @avalanche/setting-font-sizes
Font sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: font-sizes)

## Install
```bash
npm install @avalanche/setting-font-sizes --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/setting-font-sizes/scss/index.scss';

// Import just the settings file.
@import 'node_modules/@avalanche/setting-font-sizes/scss/settings';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/setting-font-sizes';
```

## Usage
```scss
// Function.
.selector {
  font-size: setting-font-size(m);
}

// Map.
.selector {
  font-size: map-get($font-sizes, m);
}
```

## Settings
```scss
/// Default font sizes.
/// @type Map
$font-sizes: (
  xs: 0.64em,
  s: 0.8em,
  m: 1em,
  l: 1.25em,
  xl: 1.563em,
  xxl: 1.953em,
  xxxl: 2.441em,
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
