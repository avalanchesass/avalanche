# @avalanche/setting-font-families
Font families.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: font-families)

## Install
```bash
npm install @avalanche/setting-font-families --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-font-families';

// Import just the settings file.
@import '~@avalanche/setting-font-families/scss/settings';
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

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
