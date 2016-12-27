# @avalanche/object-aspect-ratio
Maintain aspect ratio.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: aspect-ratio)

## Install
```bash
npm install @avalanche/object-aspect-ratio --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-aspect-ratio';

// Import just the mixin file.
@import '~@avalanche/object-aspect-ratio/scss/mixins';

// Import just the classes you need.
@import '{ .o-aspect-ratio, .o-aspect-ratio--4/3, .o-aspect-ratio__inner } from ~@avalanche/object-aspect-ratio';

// Not a fan of the "o-" prefix?
@import '{ .o-aspect-ratio as .aspect-ratio, .o-aspect-ratio__inner as .aspect-ratio__inner } from ~@avalanche/object-aspect-ratio';
```

## Demo
```html
<div class="o-aspect-ratio">
  <div class="o-aspect-ratio__inner">
    Default (16/9)
  </div>
</div>
```

### Ratios
```html
<div class="o-aspect-ratio o-aspect-ratio--4/3">
  <div class="o-aspect-ratio__inner">
    4/3
  </div>
</div>
<div class="o-aspect-ratio o-aspect-ratio--16/9">
  <div class="o-aspect-ratio__inner">
    16/9
  </div>
</div>
<div class="o-aspect-ratio o-aspect-ratio--21/9">
  <div class="o-aspect-ratio__inner">
    21/9
  </div>
</div>
```

### Settings
Modify the default aspect ratio via the `$o-aspect-ratio-default` map variable.

```scss
$o-aspect-ratio-default: (
  width: 4,
  height: 3,
);
```

## Mixins
```scss
@import '~@avalanche/object-aspect-ratio/scss/mixins';

// Usage.
.aspect-ratio {
  @include o-aspect-ratio(16, 9, '.aspect-ratio__inner');
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
