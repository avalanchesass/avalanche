# @avalanche/utility-order
Reorder flex items.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: order)

## Install
```bash
npm install @avalanche/utility-order --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-order/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-order';

// Import just the classes you need.
@import '{ .u-order-1\@m, .u-order-last\@m } from ~@avalanche/utility-order';

// Not a fan of the "u-" prefix?
@import '{ .u-order-1\@m as .order-1\@m, .u-order-last\@m as .order-last\@m } from ~@avalanche/utility-order';
```

## Demo
```html
<div style="display: flex;">
  <div class="u-order-last@m">last</div>
  <div class="u-order-10@m">10</div>
  <div class="u-order-9@m">9</div>
  <div class="u-order-8@m">8</div>
  <div class="u-order-7@m">7</div>
  <div class="u-order-6@m">6</div>
  <div class="u-order-5@m">5</div>
  <div class="u-order-4@m">4</div>
  <div class="u-order-3@m">3</div>
  <div class="u-order-2@m">2</div>
  <div class="u-order-1@m">1</div>
  <div class="u-order-first@m">first</div>
</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-order/scss/mixins';

// Usage.
.order-5 {
  @include u-order(5);
}

.order-first {
  @include u-order-first();
}

.order-last {
  @include u-order-last();
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
