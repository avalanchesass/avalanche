# @avalanche/object-vertical-spacing
Add vertical spacing to all child elements.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: vertical-spacing)

## Install
```bash
npm install @avalanche/object-vertical-spacing --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-vertical-spacing';

// Import just the mixin file.
@import '~@avalanche/object-vertical-spacing/scss/mixins';

// Import just the classes you need.
@import '{ .o-vertical-spacing, .o-vertical-spacing--s } from ~@avalanche/object-vertical-spacing';

// Not a fan of the "o-" prefix?
@import '{ .o-vertical-spacing as .vertical-spacing } from ~@avalanche/object-vertical-spacing';
```

## Demo
### Default spacing size
```html
<div class="o-vertical-spacing">
  <div>Lorem Ipsum</div>
  <div>Dolor sit amet.</div>
</div>
```

### X-large spacing size
```html
<div class="o-vertical-spacing o-vertical-spacing--xl">
  <div>Lorem Ipsum</div>
  <div>Dolor sit amet.</div>
</div>
```

## Mixins
```scss
@import '~@avalanche/object-vertical-spacing/scss/mixins';

// Usage.
.vertical-spacing {
  @include o-vertical-spacing();
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
