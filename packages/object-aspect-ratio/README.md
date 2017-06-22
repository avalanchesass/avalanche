# @avalanche/object-aspect-ratio
Maintain aspect ratio.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: aspect-ratio)

## Install
```bash
npm install @avalanche/object-aspect-ratio --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/object-aspect-ratio/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/object-aspect-ratio';

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

## Mixins
```scss
@import 'node_modules/@avalanche/object-aspect-ratio/scss/mixins';

// Usage.
.aspect-ratio {
  @include o-aspect-ratio(16, 9, '.aspect-ratio__inner');
}
```

## Settings
Modify the default aspect ratio via the `$o-aspect-ratio-default` map variable.

```scss
/// Container max widths.
/// @type Map
$o-aspect-ratio-default: (
  width: 16,
  height: 9,
) !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
