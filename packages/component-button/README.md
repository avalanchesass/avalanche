# @avalanche/component-button
Buttons.

- [Documentation](https://avalanche.oberlehner.net/documentation/#component: button)

## Install
```bash
npm install @avalanche/component-button --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/component-button';

// Import just the mixin file.
@import '~@avalanche/component-button/scss/mixins';

// Import just the classes you need.
@import '{ .c-button } from ~@avalanche/component-button';

// Not a fan of the "c-" prefix?
@import '{ .c-button as .button } from ~@avalanche/component-button';
```

## Demo
```html
<button class="c-button">Button</button>
```

### Sizes
```html
<button class="c-button c-button--s">Size s</button>
<button class="c-button c-button--m">Size m</button>
<button class="c-button c-button--l">Size l</button>
<button class="c-button c-button--xl">Size xl</button>
```

### Full width
```html
<button class="c-button c-button--full-width">Full width</button>
```

### Colors
```html
<button class="c-button c-button--color-a">Color a</button>
<button class="c-button c-button--color-b">Color b</button>
<button class="c-button c-button--color-c">Color c</button>
<button class="c-button c-button--color-d">Color d</button>
<button class="c-button c-button--color-e">Color e</button>
```

```html
<button class="c-button c-button--alert-positive">Color alert positive</button>
<button class="c-button c-button--alert-neutral">Color alert neutral</button>
<button class="c-button c-button--alert-cautious">Color alert cautious</button>
<button class="c-button c-button--alert-negative">Color alert negative</button>
```

```html
<button class="c-button c-button--gray-a">Color gray a</button>
<button class="c-button c-button--gray-b">Color gray b</button>
<button class="c-button c-button--gray-c">Color gray c</button>
```

## Mixins
```scss
@import '~@avalanche/component-button/scss/mixins';

// Usage.
.button {
  @include c-button();
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
