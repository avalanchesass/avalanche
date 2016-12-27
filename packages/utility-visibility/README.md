# @avalanche/utility-visibility
Classes to hide content with accessibility in mind.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: visibility)

## Install
```bash
npm install @avalanche/utility-visibility --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/utility-visibility';

// Import just the mixin file.
@import '~@avalanche/utility-visibility/scss/mixins';

// Import just the classes you need.
@import '{ .u-visibility-hidden } from ~@avalanche/utility-visibility';

// Not a fan of the "u-" prefix?
@import '{ .u-visibility-hidden as .visibility-hidden } from ~@avalanche/utility-visibility';
```

## Demo
```html
<!-- Hide from both screenreaders and browsers. -->
<div class="u-visibility-hidden">Hidden</div>

<!-- Hide only visually, but have it available for screenreaders. -->
<div class="u-visibility-visuallyhidden">Visually hidden</div>

<!-- Hide visually and from screenreaders, but maintain layout. -->
<div class="u-visibility-invisible">Invisible</div>
```

## Mixins
```scss
@import '~@avalanche/utility-visibility/scss/mixins';

// Usage.
.visibility-hidden {
  @include u-visibility-hidden();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
