# @avalanche/setting-colors
Colors.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: colors)

## Install
```bash
npm install @avalanche/setting-colors --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-colors';

// Import just the settings file.
@import '~@avalanche/setting-colors/scss/settings';
```

## Usage
```scss
// Function.
.selector {
  color: setting-color(a);
}

// Map.
.selector {
  color: map-get($colors, a);
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
