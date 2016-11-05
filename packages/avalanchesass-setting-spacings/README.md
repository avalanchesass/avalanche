# avalanchesass-setting-spacings
Spacing sizes.

## Install
```bash
npm install avalanchesass-setting-spacings --save
```

## Basic usage
It is recommended to use [node-sass](https://github.com/sass/node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer to enable tilde (~) prefixed imports.

```scss
// Import the main file.
@import '~avalanchesass-setting-spacings';
// Without `node-sass-magic-importer`.
@import 'node_modules/avalanchesass-setting-spacings/scss/index';

// Import just the variable file.
@import '~avalanchesass-setting-spacings/scss/variable';
// Without `node-sass-magic-importer`.
@import 'node_modules/avalanchesass-setting-spacings/scss/variable';
```

## Usage
```scss
// Function.
.element {
  margin-top: spacing(m);
}

// Map.
.element {
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
