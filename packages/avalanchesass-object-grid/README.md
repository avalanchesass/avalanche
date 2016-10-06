# avalanchesass-object-grid
Fluid width, responsive grid system.

## Install
```
npm install avalanchesass-object-grid --save
```

## Basic usage
```scss
// Import the main file.
@import '~avalanchesass-object-grid';

// Import just the mixin file.
@import '~avalanchesass-object-grid/mixin';
```

## Demo
### Default
```html
<div class="o-grid">
  <div class="o-grid__item">
    <div style="padding: 1em;background: #efefef;">Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div style="padding: 1em;background: #efefef;">Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div style="padding: 1em;background: #efefef;">Grid item 3</div>
  </div>
</div>
```

### Mixins
```scss
@import '~avalanchesass-object-grid/mixin';

// Usage.
.grid {
  @include o-grid(1em, 1em);
}

.grid__item {
  @include o-grid-item(1em, 1em);
}

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
