# @avalanche/setting-font-families
Font families.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: font-families)

## Install
```bash
npm install @avalanche/setting-font-families --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/setting-font-families/scss/index.scss';

// Import just the settings file.
@import 'node_modules/@avalanche/setting-font-families/scss/settings';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/setting-font-families';
```

## Usage
```scss
// Function.
.selector {
  font-family: setting-font-family(a);
}

// Map.
.selector {
  font-family: map-get($font-families, a);
}
```

## Settings
```scss
/// Font families.
/// @type Map
$font-families: (
  a: sans-serif,
  b: serif,
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
