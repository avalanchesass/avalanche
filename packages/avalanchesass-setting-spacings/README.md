# avalanchesass-setting-spacings
Spacing sizes.

## Install
```bash
npm install avalanchesass-setting-spacings --save
```

## Basic usage
```scss
// Import the main file.
@import '~avalanchesass-setting-spacings';

// Import just the variable file.
@import '~avalanchesass-setting-spacings/scss/variable';
```

## Usage
```scss
// Function.
.element {
  margin-top: spacing(m);
}

// Map.
.element {
  margin-top: map-get($spacings, m);
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License
MIT
