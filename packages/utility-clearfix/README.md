# @avalanche/utility-clearfix
Contain floats.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: clearfix)

## Install
```bash
npm install @avalanche/utility-clearfix --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/utility-clearfix';

// Import just the mixin file.
@import '~@avalanche/utility-clearfix/scss/mixins';

// Not a fan of the "u-" prefix?
@import '{ .u-clearfix as .clearfix } from ~@avalanche/utility-clearfix';
```

## Demo
```html
<div class="u-clearfix">
  <p style="float: left;">Float left</p>
  <p style="float: right;">Float right</p>
</div>
```

## Mixins
```scss
@import '~@avalanche/utility-clearfix/scss/mixins';

// Usage.
.clearfix {
  @include u-clearfix();
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
