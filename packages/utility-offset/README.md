# @avalanche/utility-offset
Offset classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: offset)

## Install
```bash
npm install @avalanche/utility-offset --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-offset/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-offset';

// Import just the classes you need.
@import '{ .u-offset-4\/12, .u-offset-4\/12\@m } from ~@avalanche/utility-offset';

// Not a fan of the "u-" prefix?
@import '{ .u-offset-4\/12 as .offset-4\/12, .u-offset-4\/12\@m as .offset-4\/12\@m } from ~@avalanche/utility-offset';
```

## Demo
```html
<div class="u-offset-1/12">1</div>
<div class="u-offset-2/12">2</div>
<div class="u-offset-3/12">3</div>
<div class="u-offset-4/12">4</div>
<div class="u-offset-5/12">5</div>
<div class="u-offset-6/12">6</div>
<div class="u-offset-7/12">7</div>
<div class="u-offset-8/12">8</div>
<div class="u-offset-9/12">9</div>
<div class="u-offset-10/12">10</div>
<div class="u-offset-11/12">11</div>
<div class="u-offset-12/12">12</div>
```

```html
<div class="u-offset-1/12@m">1</div>
<div class="u-offset-2/12@m">2</div>
<div class="u-offset-3/12@m">3</div>
<div class="u-offset-4/12@m">4</div>
<div class="u-offset-5/12@m">5</div>
<div class="u-offset-6/12@m">6</div>
<div class="u-offset-7/12@m">7</div>
<div class="u-offset-8/12@m">8</div>
<div class="u-offset-9/12@m">9</div>
<div class="u-offset-10/12@m">10</div>
<div class="u-offset-11/12@m">11</div>
<div class="u-offset-12/12@m">12</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-offset/scss/mixins';

// Usage.
.offset-6\/12 {
  @include u-offset(6, 12);
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
