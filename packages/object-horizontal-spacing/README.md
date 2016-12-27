# @avalanche/object-horizontal-spacing
Add horizontal spacing to all child elements.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: horizontal-spacing)

## Install
```bash
npm install @avalanche/object-horizontal-spacing --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-horizontal-spacing';

// Import just the mixin file.
@import '~@avalanche/object-horizontal-spacing/scss/mixins';

// Import just the classes you need.
@import '{ .o-horizontal-spacing, .o-horizontal-spacing--s } from ~@avalanche/object-horizontal-spacing';

// Not a fan of the "o-" prefix?
@import '{ .o-horizontal-spacing as .horizontal-spacing } from ~@avalanche/object-horizontal-spacing';
```

## Demo
### Default spacing size
```html
<div class="o-horizontal-spacing">
  <div>Lorem Ipsum</div>
  <div>Dolor sit amet.</div>
</div>
```

### X-large spacing size
```html
<div class="o-horizontal-spacing o-horizontal-spacing--xl">
  <div>Lorem Ipsum</div>
  <div>Dolor sit amet.</div>
</div>
```

## Mixins
```scss
@import '~@avalanche/object-horizontal-spacing/scss/mixins';

// Usage.
.horizontal-spacing {
  @include o-horizontal-spacing();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
