# @avalanche/component-button
Buttons.

- [Documentation](https://avalanche.oberlehner.net/documentation/#component: button)

## Install
```bash
npm install @avalanche/component-button --save-dev
```

## Basic usage
```scss
// Import the main file.
@import 'node_modules/@avalanche/component-button/scss/index.scss';
```

## Usage with [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)
Using [node-sass](https://github.com/sass/node-sass) (or a plugin for Grunt, gulp or webpack which is using node-sass) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer, can make importing CSS dependencies from `node_modules` a much nicer experience.

```scss
// Import the main file.
@import '~@avalanche/component-button';

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

### Outline
```html
<button class="c-button c-button--outline">Outline</button>
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
@import 'node_modules/@avalanche/component-button/scss/mixins';

// Usage.
.button {
  @include c-button();
}
```

## Settings
```scss
/// Default vertical spacing.
/// @type Number
$c-button-spacing-vertical-default: setting-spacing(xs) !default;

/// Default horizontal spacing.
/// @type Number
$c-button-spacing-horizontal-default: setting-spacing(m) !default;

/// Size s vertical spacing.
/// @type Number
$c-button-spacing-vertical-s: (setting-spacing(xs) / 2) !default;

/// Size s horizontal spacing.
/// @type Number
$c-button-spacing-horizontal-s: setting-spacing(xs) !default;

/// Size m vertical spacing.
/// @type Number
$c-button-spacing-vertical-m: setting-spacing(xs) !default;

/// Size m horizontal spacing.
/// @type Number
$c-button-spacing-horizontal-m: setting-spacing(m) !default;

/// Size l vertical spacing.
/// @type Number
$c-button-spacing-vertical-l: setting-spacing(s) !default;

/// Size l horizontal spacing.
/// @type Number
$c-button-spacing-horizontal-l: setting-spacing(m) !default;

/// Size xl vertical spacing.
/// @type Number
$c-button-spacing-vertical-xl: setting-spacing(m) !default;

/// Size xl horizontal spacing.
/// @type Number
$c-button-spacing-horizontal-xl: setting-spacing(l) !default;

/// Outline border width.
/// @type Number
$c-button-outline-border-width: 0.1875em !default;

/// Default background color.
/// @type Color
$c-button-background-color-default: setting-color(a) !default;

/// Default color.
/// @type Color
$c-button-color-default: setting-color(a, contrast) !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
