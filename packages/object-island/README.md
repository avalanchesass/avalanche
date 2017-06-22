# @avalanche/object-island
Box off content.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: island)

## Install
```bash
npm install @avalanche/object-island --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/object-island/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/object-island';

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
@import 'node_modules/@avalanche/object-island/scss/mixins';

// Usage.
.island {
  @include o-island();
}
```

## Settings
```scss
/// Default spacing.
/// @type String
$o-island-spacing-default: m !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
