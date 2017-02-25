# @avalanche/object-container
Basic container class to limit the max-width of the layout and add some padding.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: container)

## Install
```bash
npm install @avalanche/object-container --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-container';

// Import just the mixin file.
@import '~@avalanche/object-container/scss/mixins';

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
@import '~@avalanche/object-container/scss/mixins';

// Usage.
.container {
  @include o-container(64rem, 1rem);
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
