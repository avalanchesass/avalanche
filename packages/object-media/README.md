# @avalanche/object-media
Media object - image on left/right, text next to it.

- [Documentation](https://avalanche.oberlehner.net/documentation/#object: media)

## Install
```bash
npm install @avalanche/object-media --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/object-media';

// Import just the mixin file.
@import '~@avalanche/object-media/scss/mixins';

// Import just the classes you need.
@import '{ .o-media, .o-media__body } from ~@avalanche/object-media';

// Not a fan of the "o-" prefix?
@import '{ .o-media as .media, .o-media__body as .media__body } from ~@avalanche/object-media';
```

## Demo
### Default spacing size
```html
<div class="o-media">
  <div class="o-media__figure">
    <img src="http://placehold.it/50x50" alt="Placeholder">
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
  </div>
</div>
```

### X-large spacing size
```html
<div class="o-media o-media--xl">
  <div class="o-media__figure">
    <img src="http://placehold.it/50x50" alt="Placeholder">
  </div>
  <div class="o-media__body">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
  </div>
</div>
```

## Mixins
```scss
@import '~@avalanche/object-media/scss/mixins';

// Usage.
.media {
  @include o-media();
}

.media-figure {
  @include o-media-figure();
}

.media-body {
  @include o-media-body();
}
```

## Settings
```scss
/// Default spacing.
/// @type String
$o-media-spacing-default: m !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT

