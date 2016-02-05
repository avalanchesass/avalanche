# avalanche
A modular SASS framework

avalanche is a highly modular SASS framework. The goal of this framework is to
be a minimal starting point that doesn’t make assumptions how things should
look. avalanche provides a solid directory structure and a thoroughly thought
through CSS methodology.

## Getting started
### Quick start
- Install [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
[npm](https://docs.npmjs.com/getting-started/installing-node) and
[gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) on
your system (if not already installed).
- Install avalanche globally `npm install -g avalanchesass`.
- Run `avalanchesass --template="project" --name="Your project name"` to create
a new avalanche project in the current directory.
- Run `npm install` inside your newly created project directory.
- Run `gulp` to start the build process, the gulp default task detects changes
to your SASS files and generates the CSS code.

### Extend avalanche
The main avalanche package doesn’t define a single CSS selector. The high
modularity of avalanche requires that every part of the system is a distinct
package. There are multiple package types:

- **Function:** custom SASS functions
- **Base:** base styles like typography and other global default styles (mostly
unclassed HTML elements)
- **Utility:** utility classes that do very specific things (e.g. clearfix)
- **Object:** non-cosmetic styles (e.g. the famous media object)
- **Component:** concrete, implementation-specific piece of UI

You can find various available packages on
[GitHub](https://github.com/avalanchesass)  
To extend your installation with a preconfigured package open your
`package.json` file, add the package to your *dependencies* and run
`npm install` afterwards.

```json
"dependencies": {
  "avalanche_base_default": "^3.0.0",
  "avalanche_base_form": "^3.0.0",
  "avalanche_base_typography": "^3.0.0",
  "avalanche_object_media": "^3.0.0",
  "normalize-scss": "^4.0.3"
}
```

## Working with avalanche
### Extend packages
If you wan’t to make changes to a class defined by a package it is recommended
to create a custom package with the name `_PACKAGE_NAME_extend.scss` in the scss
directory of your project.

#### Example
Extending the `.c-button` class of the button component:

- Create a file `_button_extend.scss` in `scss/component`.
- Define the `.c-button` class and override or modify it’s properties.
- You can also remove properties by setting their value to `initial` and adding
a `/*!remove*/` comment at the end of the line.

```scss
.c-button {
  padding: initial;/*!remove*/
  text-transform: uppercase;
}
```

**Attention:** removing properties and merging extended classes, will only
happen in the minified version of the CSS code. But the styling of your site
will be the same: setting a property value to `initial` has the same effect as
removing the property from the original class. Extending the original class by
defining it a second time, uses the default cascading behavior of CSS.

### Override package variables
Most packages define there own default variables which you can override to
modify the CSS output. There are two ways how to override variables of external
and custom packages:

1. Similar to the extending of packages, you can create a separate file in which
you define the variables you want to override e.g. `_button_variable.scss`.
2. If you prefer to have one big file with all the variables inside, you can
also override package variables inside the `_variable.scss` file in your
projects `scss` directory.

### CLI
`avalanchesass --template="" [--type=""] [--name=""] [--path=""]`

#### Options
- `--template` *mandatory*  
  possible values: project | package | package-custom
- `--type` *optional*  
  possible values: Base | Component | Function | Object | Utility  
  default value: Component
- `--name` *optional*  
  possible values: "Your Project Name"  
  default value: "Avalanche Project"
- `--path` *optional*  
  possible values: /path/to/somewhere  
  default value: current working directory

#### Examples
**Create a project**  
`avalanchesass --template="project" --name="Project Name"`

**Create a `Component` package**  
`avalanchesass --template="package" --name="Package Name"`

**Create a custom `Object` package** *assuming you are currently in your project
diretory*  
`avalanchesass --template="package-custom" --type="Object" --name="Package Name" --path="scss/object"`

### BEM
avalanche uses the [BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).
To make the meaning of the classes more transparent every BEM class name is
[namespaced](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).
The BEM syntax helps to prevent [side effects in CSS](http://philipwalton.com/articles/side-effects-in-css/)
and the informative nature of the naming convention makes it ideal for teams and
larger projects.

```css
.c-block {}
.c-block__element {}
.c-block--modifier {}

.c-menu {}
.c-menu__link {}
.c-menu--horizontal {}
```

### Style guide
avalanche uses [mdcss](https://github.com/jonathantneal/mdcss) to automatically
generate a style guide from CSS comments in markdown syntax
([avalanche style guide DEMO](http://avalanche.oberlehner.net)).

Please follow the [official mdcss documentation](https://github.com/jonathantneal/mdcss#writing-documentation)
on how to format comments in your SCSS code for the style guide.

To generate the style guide run `gulp style_guide`. You can also run
`gulp watch:style_guide` instead of the default `gulp` task to start the build
process. This automatically generates the style guide on every change you make
to your code base.

### CSS extraction
[HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) is coming and changes the way
[how we should build websites](https://mattwilcox.net/web-development/http2-for-front-end-web-developers).
With HTTP/2 it can be faster to load multiple small files (but only those which
are really needed) instead of one big file (with a potential overhead). E.g. the
pager component isn’t used on most of your pages but the styles are loaded on
every request because they are concatenated into one big file.

With CSS extraction you can split your styles into multiple separate CSS files.
This makes it possible to load just the styles you need. Amongst other things
there are the following advantages using this technique:

- Increased cache granularity (avoids invalidating a whole sprite or
concatenated bundle when just a single part changes)
- Parallel downloading of files that were previously bundled into one file
- Less energy/memory usage in the client

By default every avalanche package is prepared for CSS extraction.
Run `gulp styles:extract` to create the CSS files - you can find them in
`css/extract`. Alternatively you can start a watch task with CSS extraction
enabled: `gulp watch:extract`.

To make your custom packages CSS extraction ready, you have to add special
placeholder comments.

```css
/* extract component_PACKAGE_NAME.css */
.c-PACKAGE_NAME { … }
/* end extract component_PACKAGE_NAME.css */
```

To prevent naming collisions it is recommended to add the package type as a
prefix to the name of the desired resulting CSS file. If you define two or more
extraction sections with the same name, those are combined into one file.

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner

### License
GPL v2 (http://www.gnu.org/licenses/gpl-2.0.html)
