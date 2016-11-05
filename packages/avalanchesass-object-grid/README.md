# avalanchesass-object-grid
Fluid width, responsive grid system.

## Install
```bash
npm install avalanchesass-object-grid --save
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~avalanchesass-object-grid';

// Import just the mixin file.
@import '~avalanchesass-object-grid/scss/mixin';
```

## Demo
```html
<div class="o-grid">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
</div>
```

### Gutter
Activate horizontal / vertical gutter modifier classes via the `$o-grid-horizontal-gutter` / `$o-grid-vertical-gutter` map variables.

```scss
$o-grid-horizontal-gutter: (l);
$o-grid-vertical-gutter: (l);
```

```html
<div class="o-grid o-grid--horizontal-gutter-l o-grid--vertical-gutter-l">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 4</div>
  </div>
</div>
```

### Gutter breakpoints
To activate gutter breakpoint modifier classes, use the `$o-grid-horizontal-gutter-breakpoints` / `$o-grid-vertical-gutter-breakpoints` map variables.

```scss
$o-grid-horizontal-gutter-breakpoints: (
  l: (m),
);
$o-grid-vertical-gutter-breakpoints: (
  l: (m),
);
```

```html
<div class="o-grid o-grid--horizontal-gutter-l@m o-grid--vertical-gutter-l@m">
  <div class="o-grid__item">
    <div>Grid item 1</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 2</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 3</div>
  </div>
  <div class="o-grid__item">
    <div>Grid item 4</div>
  </div>
</div>
```

## Mixins
```scss
@import '~avalanchesass-object-grid/scss/mixin';

// Usage.
.grid {
  @include o-grid();
  @include o-grid-horizontal-gutter(1em, '.grid__item');
  @include o-grid-vertical-gutter(1em, '.grid__item');
}

.grid__item {
  @include o-grid-item();
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
