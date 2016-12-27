# @avalanche/setting-spacings
Spacing sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: spacings)

## Install
```bash
npm install @avalanche/setting-spacings --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-spacings';

// Import just the settings file.
@import '~@avalanche/setting-spacings/scss/settings';
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

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
