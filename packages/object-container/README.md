# @avalanche/object-container
Basic container class to limit the max-width of the layout and add some padding.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: container)

## Install
```bash
npm install @avalanche/object-container --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/object-container/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/object-container';

// Import just the classes you need.
@import '{ .o-container, .o-container--s } from ~@avalanche/object-container';

// Not a fan of the "o-" prefix?
@import '{ .o-container as .container } from ~@avalanche/object-container';
```

## Demo
```html
<div class="o-container">
  <h2>Lorem Ipsum</h2>
  <p>Contained content.</p>
</div>
```

### Sizes
Modify the container max widths via the `$o-container-max-widths` map variable.

```scss
$o-container-max-widths: (
  s: 32rem,
  m: 64rem,
  l: 96rem
);
```

```html
<div class="o-container o-container--l">
  <h2>Lorem Ipsum</h2>
  <p>Contained content.</p>
</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/object-container/scss/mixins';

// Usage.
.container {
  @include o-container(64rem, 1rem);
}
```

## Settings
```scss
/// Container max widths.
/// @type Map
$o-container-max-widths: (
  s: 32rem,
  m: 64rem,
  l: 96rem,
) !default;

/// Default container size.
/// @type String
$o-container-max-width-default: m !default;

/// Horizontal spacing.
/// @type String
$o-container-spacing-horizontal: m !default;

/// Horizontal centering.
/// @type Boolean
$o-container-center-horizontal: true !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
