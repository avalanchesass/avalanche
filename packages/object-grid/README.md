# @avalanche/object-grid
Fluid width, responsive grid system.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: grid)

## Install
```bash
npm install @avalanche/object-grid --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/object-grid/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/object-grid';

// Import just the classes you need.
@import '{ .o-grid } from ~@avalanche/object-grid';

// Not a fan of the "o-" prefix?
@import '{ .o-grid as .grid, > .o-grid__item as > .grid__item } from ~@avalanche/object-grid';
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

## Clear negative margin
To compensate for the vertical spacing of the grid items, the base grid block element (`.o-grid`) uses a negative value for margin top. If the grid is the first element inside a wrapping element, this can lead to an odd behavior where the negative margin is carried over by the wrapping element. You need to clear the negative margin by adding a [clearfix](https://avalanche.oberlehner.net/packages/utility-clearfix/) to the wrapping element. See the following CodePen for an example of the problem and how to solve it: [http://codepen.io/maoberlehner/pen/BpJVGO](http://codepen.io/maoberlehner/pen/BpJVGO).

## Mixins
```scss
@import 'node_modules/@avalanche/object-grid/scss/mixins';

// Usage.
.grid {
  @include o-grid();
}

.grid__item {
  @include o-grid-item();
}
```

## Settings
```scss
/// Default horizontal gutter.
/// @type String
$o-grid-gutter-horizontal-default: m !default;

/// Default vertical gutter.
/// @type String
$o-grid-gutter-vertical-default: m !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
