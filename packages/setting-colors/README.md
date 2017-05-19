# @avalanche/setting-colors
Colors.

- [Documentation](https://avalanche.oberlehner.net/documentation/#setting: colors)

## Install
```bash
npm install @avalanche/setting-colors --save-dev
```

## Basic usage
This package requires that [node-sass](https://github.com/sass/node-sass) (or one of the grunt, gulp, etc. equivalents) in combination with the [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) custom importer is used.

```scss
// Import the main file.
@import '~@avalanche/setting-colors';

// Import just the settings file.
@import '~@avalanche/setting-colors/scss/settings';
```

## Usage
```scss
// Function.
.selector {
  color: setting-color(a);
}

// Map.
.selector {
  color: map-get($colors, a);
}
```

## Settings
```scss
/// Default colors.
/// @type Map
$colors: (
  a: #2196f3,
  b: #2364aa,
  c: #73bfb8,
  d: #fec601,
  e: #ea7317,
) !default;

/// Contrast colors.
/// @type Map
$colors-contrast: (
  a: #fff,
  b: #fff,
  c: #fff,
  d: #fff,
  e: #fff,
) !default;

/// Alert colors.
/// @type Map
$colors-alert: (
  positive: #468847,
  neutral: #3a87ad,
  cautious: #c09853,
  negative: #b94a48,
) !default;

/// Gray colors.
/// @type Map
$colors-gray: (
  a: #f5f5f5,
  b: #e0e0e0,
  c: #9e9e9e,
) !default;
```

## About
### Author
Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
