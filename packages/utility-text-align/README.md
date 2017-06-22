# @avalanche/utility-text-align
Text align utility classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: text-align)

## Install
```bash
npm install @avalanche/utility-text-align --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-text-align/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-text-align';

// Import just the classes you need.
@import '{ .u-text-align-right, .u-text-align-center\@m } from ~@avalanche/utility-text-align';

// Not a fan of the "u-" prefix?
@import '{ .u-text-align-right as .text-align-right } from ~@avalanche/utility-text-align';
```

## Demo
```html
<div class="u-text-align-left">Left</div>
<div class="u-text-align-center@m">Center</div>
<div class="u-text-align-right@l">Right</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-text-align/scss/mixins';

// Usage.
.text-align-right {
  @include u-text-align(right);
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
