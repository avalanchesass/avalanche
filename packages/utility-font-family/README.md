# @avalanche/utility-font-family
Font family utility classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: font-family)

## Install
```bash
npm install @avalanche/utility-font-family --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/utility-font-family';

// Import just the mixin file.
@import '~@avalanche/utility-font-family/scss/mixins';

// Import just the classes you need.
@import '{ .u-font-family-b } from ~@avalanche/utility-font-family';

// Not a fan of the "u-" prefix?
@import '{ .u-font-family-b as .font-family-b } from ~@avalanche/utility-font-family';
```

## Demo
```html
<p class="u-font-family-a">Font Family A</p>
<p class="u-font-family-b">Font Family B</p>
```

## Mixins
```scss
@import '~@avalanche/utility-font-family/scss/mixins';

// Usage.
.font-family-a {
  @include u-font-family();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
