# @avalanche/utility-font-family
Font family utility classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: font-family)

## Install
```bash
npm install @avalanche/utility-font-family --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-font-family/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-font-family';

// Import just the classes you need.
@import '{ .u-font-family-b } from ~@avalanche/utility-font-family';

// Not a fan of the "u-" prefix?
@import '{ .u-font-family-b as .font-family-b } from ~@avalanche/utility-font-family';
```

## Demo
```html
<p class="u-font-family-a">Font Family A</p>
<p class="u-font-family-b">Font Family B</p>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-font-family/scss/mixins';

// Usage.
.font-family-a {
  @include u-font-family();
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
