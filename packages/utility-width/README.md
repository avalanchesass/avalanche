# @avalanche/utility-width
Width classes.

- [Documentation](https://avalanche.oberlehner.net/documentation/#utility: width)

## Install
```bash
npm install @avalanche/utility-width --save
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/utility-width';

// Import just the mixin file.
@import '~@avalanche/utility-width/scss/mixins';
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
@import '~@avalanche/utility-width/scss/mixins';

// Usage.
.u-width-1/12 {
  @include u-width(6, 12);
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT

