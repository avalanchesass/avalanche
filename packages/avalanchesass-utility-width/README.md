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
<div style="text-align: center;">
  <div class="u-width-1/12" style="padding: 1em;background: #efefef;">1</div>
  <div class="u-width-2/12" style="padding: 1em;background: #efefef;">2</div>
  <div class="u-width-3/12" style="padding: 1em;background: #efefef;">3</div>
  <div class="u-width-4/12" style="padding: 1em;background: #efefef;">4</div>
  <div class="u-width-5/12" style="padding: 1em;background: #efefef;">5</div>
  <div class="u-width-6/12" style="padding: 1em;background: #efefef;">6</div>
  <div class="u-width-7/12" style="padding: 1em;background: #efefef;">7</div>
  <div class="u-width-8/12" style="padding: 1em;background: #efefef;">8</div>
  <div class="u-width-9/12" style="padding: 1em;background: #efefef;">9</div>
  <div class="u-width-10/12" style="padding: 1em;background: #efefef;">10</div>
  <div class="u-width-11/12" style="padding: 1em;background: #efefef;">11</div>
  <div class="u-width-12/12" style="padding: 1em;background: #efefef;">12</div>
</div>
```

```html
<div style="text-align: center;">
  <div class="u-width-1/12@m" style="padding: 1em;background: #efefef;">1</div>
  <div class="u-width-2/12@m" style="padding: 1em;background: #efefef;">2</div>
  <div class="u-width-3/12@m" style="padding: 1em;background: #efefef;">3</div>
  <div class="u-width-4/12@m" style="padding: 1em;background: #efefef;">4</div>
  <div class="u-width-5/12@m" style="padding: 1em;background: #efefef;">5</div>
  <div class="u-width-6/12@m" style="padding: 1em;background: #efefef;">6</div>
  <div class="u-width-7/12@m" style="padding: 1em;background: #efefef;">7</div>
  <div class="u-width-8/12@m" style="padding: 1em;background: #efefef;">8</div>
  <div class="u-width-9/12@m" style="padding: 1em;background: #efefef;">9</div>
  <div class="u-width-10/12@m" style="padding: 1em;background: #efefef;">10</div>
  <div class="u-width-11/12@m" style="padding: 1em;background: #efefef;">11</div>
  <div class="u-width-12/12@m" style="padding: 1em;background: #efefef;">12</div>
</div>
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

