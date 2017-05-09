# @avalanche/setting-font-sizes
Font sizes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: font-sizes)

## Install
```bash
npm install @avalanche/setting-font-sizes --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-font-sizes';

// Import just the settings file.
@import '~@avalanche/setting-font-sizes/scss/settings';
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

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
