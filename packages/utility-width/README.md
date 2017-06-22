# @avalanche/utility-width
Width classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: width)

## Install
```bash
npm install @avalanche/utility-width --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/utility-width/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/utility-width';

// Import just the classes you need.
@import '{ .u-width-12\/12, .u-width-4\/12\@m } from ~@avalanche/utility-width';

// Not a fan of the "u-" prefix?
@import '{ .u-width-12\/12 as .width-12\/12, .u-width-4\/12\@m as .width-4\/12\@m } from ~@avalanche/utility-width';
```

## Demo
```html
<div class="u-width-1/12">1</div>
<div class="u-width-2/12">2</div>
<div class="u-width-3/12">3</div>
<div class="u-width-4/12">4</div>
<div class="u-width-5/12">5</div>
<div class="u-width-6/12">6</div>
<div class="u-width-7/12">7</div>
<div class="u-width-8/12">8</div>
<div class="u-width-9/12">9</div>
<div class="u-width-10/12">10</div>
<div class="u-width-11/12">11</div>
<div class="u-width-12/12">12</div>
```

```html
<div class="u-width-1/12@m">1</div>
<div class="u-width-2/12@m">2</div>
<div class="u-width-3/12@m">3</div>
<div class="u-width-4/12@m">4</div>
<div class="u-width-5/12@m">5</div>
<div class="u-width-6/12@m">6</div>
<div class="u-width-7/12@m">7</div>
<div class="u-width-8/12@m">8</div>
<div class="u-width-9/12@m">9</div>
<div class="u-width-10/12@m">10</div>
<div class="u-width-11/12@m">11</div>
<div class="u-width-12/12@m">12</div>
```

## Mixins
```scss
@import 'node_modules/@avalanche/utility-width/scss/mixins';

// Usage.
.width-6\/12 {
  @include u-width(6, 12);
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

