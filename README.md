# avalanche
a modular SASS framework

avalanche is a highly modular SASS framework. The goal of this framework is to be a minimal starting point that doesn’t make assumptions how things should look. avalanche provides a solid directory structure and a well thought out CSS methodology.

## Getting started
### Quick start
- Install [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [npm](https://docs.npmjs.com/getting-started/installing-node) and [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) (if not already installed)
- Clone the repo: `git clone https://github.com/avalanchesass/avalanche.git`
- Run `npm install` to install build dependencies
- Run `gulp` to start the build process, the gulp default task detects changes to your SASS files and generates the CSS code

### Extend avalanche
The main avalanche package doesn’t define a single CSS selector. The high modularity of avalanche requires that every part of the system is a distinct package. There are multiple package types:

- **Function:** custom SASS functions
- **System:** everything system relevant (e.g. variables)
- **Base:** base styles like typography and other global default styles (mostly unclassed HTML elements)
- **Utility:** utility classes that do very specific things (e.g. clearfix)
- **Object:** non-cosmetic styles (e.g. the famous media object)
- **Component:** concrete, implementation-specific piece of UI

You can find various available packages on [GitHub](https://github.com/avalanchesass?tab=repositories)  
To extend your installation with a preconfigured package open your package.json file, add the package to your *devDependencies* and run `npm install` afterwards.

```json
"devDependencies": {
  "avalanche_base_default": "^3.0.0",
  "avalanche_base_form": "^3.0.0",
  "avalanche_base_layout": "^3.0.0",
  "avalanche_base_typography": "^3.0.0",
  "avalanche_object_media": "^3.0.0",
  "normalize.css": "~3.0.3"
}
```

### Extend packages
If you wan’t to make changes to a class defined by a package it is recommended to create a custom package with the name `_PACKAGE_NAME_extend.scss` in the scss directory of your project.

#### Example

Extending the `.c-button` class of the button component:

- Create a file `_button_extend.scss` in `scss/component`
- Define the `.c-button` class and override or modify it’s properties
- You can also remove properties by setting their value to `initial` and adding a `/*!remove*/` comment at the end of the line

```scss
.c-button {
  padding: initial;/*!remove*/
  text-transform: uppercase;
}
```

**Attention:** removing properties and merging extended classes, will only happen in the minified version of the CSS code. But the styling of your site will be the same: setting a property value to `initial` has the same effect as removing the property from the original class and extending the original class by defining it a second time, uses the default cascading behavior of CSS.

### BEM
avalanche uses the [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). To make the meaning of the classes more transparent every BEM class name is [namespaced](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/). The BEM syntax helps to prevent [side effects in CSS](http://philipwalton.com/articles/side-effects-in-css/) and the informative nature of the naming convention makes it ideal for teams and larger projects.

```css
.c-block {}
.c-block__element {}
.c-block--modifier {}

.c-car {}
.c-car__engine {}
.c-car--rally {}
.c-car__engine--electric {}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner

### License
avalanche is licensed under GPL v2 (http://www.gnu.org/licenses/gpl-2.0.html)
