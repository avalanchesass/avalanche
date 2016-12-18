# @avalanche/object-island
Box off content.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: island)

## Install
```bash
npm install @avalanche/object-island --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-island';

// Import just the mixin file.
@import '~@avalanche/object-island/scss/mixins';

// Import just the classes you need.
@import '{ .o-island } from ~@avalanche/object-island';

// Not a fan of the "o-" prefix?
@import '{ .o-island as .island } from ~@avalanche/object-island';
```

## Demo
### Default spacing size
```html
<div class="o-island">
  Boxed off content.
</div>
```

### X-large spacing size
```html
<div class="o-island o-island--xl">
  XL boxed off content.
</div>
```

## Mixins
```scss
@import '~@avalanche/object-island/scss/mixins';

// Usage.
.island {
  @include o-island();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
