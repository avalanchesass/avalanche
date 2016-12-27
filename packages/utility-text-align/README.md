# @avalanche/utility-text-align
Text align utility classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: text-align)

## Install
```bash
npm install @avalanche/utility-text-align --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/utility-text-align';

// Import just the mixin file.
@import '~@avalanche/utility-text-align/scss/mixins';

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
@import '~@avalanche/utility-text-align/scss/mixins';

// Usage.
.text-align-right {
  @include u-text-align(right);
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
