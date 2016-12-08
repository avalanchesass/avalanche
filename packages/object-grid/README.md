# @avalanche/object-grid
Fluid width, responsive grid system.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: grid)

## Install
```bash
npm install @avalanche/object-grid --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-grid';

// Import just the mixin file.
@import '~@avalanche/object-grid/scss/mixins';

// Import just the classes you need.
@import '{ .o-grid, .o-grid__item } from ~@avalanche/object-grid';

// Not a fan of the "o-" prefix?
@import '{ .o-grid as .grid, .o-grid__item as .grid__item } from ~@avalanche/object-grid';
```

## Demo
### Default gutter sizes
```html
<div class="o-grid">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 4</div>
  </div>
</div>
```

### X-large gutter size
```html
<div class="o-grid o-grid--xl">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 4</div>
  </div>
</div>
```

### Default horizontal gutter with x-large vertical gutter size
```html
<div class="o-grid o-grid--xl-vertical">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 4</div>
  </div>
</div>
```

## Mixins
```scss
@import '~@avalanche/object-grid/scss/mixins';

// Usage.
.grid {
  @include o-grid();
}

.grid__item {
  @include o-grid-item();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
