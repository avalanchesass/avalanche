# avalanchesass-utility-width
Width classes.

## Install
```bash
npm install avalanchesass-utility-width --save
```

## Basic usage
```scss
// Import the main file.
@import '~avalanchesass-utility-width';

// Import just the mixin file.
@import '~avalanchesass-utility-width/mixin';
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
@import '~avalanchesass-utility-width/mixin';

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

