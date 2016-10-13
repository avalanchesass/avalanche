# avalanchesass-utility-width
Width classes.

## Install
```
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
### Default
```html
<div class="u-width-1/12" style="padding: 1em;background: #efefef;text-align: center;">1</div>
<div class="u-width-2/12" style="padding: 1em;background: #efefef;text-align: center;">2</div>
<div class="u-width-3/12" style="padding: 1em;background: #efefef;text-align: center;">3</div>
<div class="u-width-4/12" style="padding: 1em;background: #efefef;text-align: center;">4</div>
<div class="u-width-5/12" style="padding: 1em;background: #efefef;text-align: center;">5</div>
<div class="u-width-6/12" style="padding: 1em;background: #efefef;text-align: center;">6</div>
<div class="u-width-7/12" style="padding: 1em;background: #efefef;text-align: center;">7</div>
<div class="u-width-8/12" style="padding: 1em;background: #efefef;text-align: center;">8</div>
<div class="u-width-9/12" style="padding: 1em;background: #efefef;text-align: center;">9</div>
<div class="u-width-10/12" style="padding: 1em;background: #efefef;text-align: center;">10</div>
<div class="u-width-11/12" style="padding: 1em;background: #efefef;text-align: center;">11</div>
<div class="u-width-12/12" style="padding: 1em;background: #efefef;text-align: center;">12</div>
```

### Mixins
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

