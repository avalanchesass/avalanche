# @avalanche/utility-align-self
Align self utility classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: align-self)

## Install
```bash
npm install @avalanche/utility-align-self --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-align-self/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-align-self';

// Import just the classes you need.
@import '{ .u-align-self-center, .u-align-self-center\@m } from ~@avalanche/utility-align-self';

// Not a fan of the "u-" prefix?
@import '{ .u-align-self-center as .align-self-center } from ~@avalanche/utility-align-self';
```

## Demo
```html
<div style="display: flex; height: 10em;">
  <div class="u-align-self-flex-end">flex-end</div>
  <div class="u-align-self-center@m">center</div>
</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-align-self/scss/mixins';

// Usage.
.align-self-center {
  @include u-align-self(center);
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
