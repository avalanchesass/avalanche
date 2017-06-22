# @avalanche/generic-box-sizing-reset
Box sizing reset.

- [Documentation](https://avalanche.oberlehner.net/documentation/#generic: box-sizing-reset)

## Install
```bash
npm install @avalanche/generic-box-sizing-reset --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/generic-box-sizing-reset/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/generic-box-sizing-reset';
```

## Mixins
```scss
@import 'node_modules/@avalanche/generic-box-sizing-reset/scss/mixins';

// Usage.
@include generic-box-sizing-reset();
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
