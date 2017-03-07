# Styleguide
Based on the [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css).

## Table of Contents
1. [Terminology](#terminology)
  - [Rule Declaration](#rule-declaration)
  - [Selectors](#selectors)
  - [Properties](#properties)
2. [CSS](#css)
  - [Formatting](#formatting)
  - [Comments](#comments)
  - [OOCSS and BEM](#oocss-and-bem)
  - [ID Selectors](#id-selectors)
  - [JavaScript hooks](#javascript-hooks)
  - [Border](#border)
3. [Sass](#sass)
  - [Syntax](#syntax)
  - [Ordering](#ordering-of-property-declarations)
  - [Variables](#variables)
  - [Mixins](#mixins)
  - [Extend directive](#extend-directive)
  - [Nested selectors](#nested-selectors)

## Terminology
### Rule declaration
A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.c-listing {
  font-size: 1.5em;
  line-height: 1.2;
}
```

### Selectors
In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.c-my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties
Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: #f1f1f1;
  color: #333;
}
```

## CSS
### Formatting
- Use soft tabs (2 spaces) for indentation.
- Prefer dashes over camelCasing in class names.
  - Underscores are okay if you are using BEM (see [OOCSS and BEM](#oocss-and-bem) below).
- Do not use ID selectors.
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put a space before the opening brace `{` in rule declarations.
- In properties, put a space after, but not before, the `:` character.
- Put closing braces `}` of rule declarations on a new line.
- Put blank lines between rule declarations.

**Bad**
```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**
```css
.c-avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.c-one,
.c-selector,
.c-per-line {
  // ...
}
```

### Comments
- Prefer line comments (`//` in Sass-land) to block comments.
- Prefer comments on their own line. Avoid end-of-line comments.
- Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### OOCSS and BEM
We encourage some combination of OOCSS and BEM for these reasons:

- It helps create clear, strict relationships between CSS and HTML.
- It helps us create reusable, composable components.
- It allows for less nesting and lower specificity.
- It helps in building scalable stylesheets.

**OOCSS**, or “Object Oriented CSS”, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of “objects”: reusable, repeatable snippets that can be used independently throughout a website.

- Nicole Sullivan's [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
- Smashing Magazine's [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**BEM**, or “Block-Element-Modifier”, is a *naming convention* for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

- CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
- Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

**Example**
```css
/* c-listing-card.css */
.c-listing-card { }
.c-listing-card--featured { }
.c-listing-card__title { }
.c-listing-card__content { }
```

- `.c-listing-card` is the “block” and represents the higher-level component.
- `.c-listing-card__title` is an “element” and represents a descendant of `.c-listing-card` that helps compose the block as a whole.
- `.c-listing-card--featured` is a “modifier” and represents a different state or variation on the `.c-listing-card` block.

### Namespace prefixes
We recommend you to use the BEMIT approach utilizing namespace prefixes for your CSS classes. You can [read more about that approach in Harry Roberts' article about this topic](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).

### ID selectors
While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### Pseudo selectors / elements
Use single colons for pseudo selectors and double colons for pseudo elements.

**Bad**
```scss
.some-selector::first-child {
  // ...
}

.some-selector:after {
  // ...
}
```

**Good**
```scss
.some-selector:first-child {
  // ...
}

.some-selector::after {
  // ...
}
```

### JavaScript hooks
Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.js-`:

```html
<button class="c-button js-request-to-book">Request to Book</button>
```

### Border
Use `0` instead of `none` to specify that a style has no border.

**Bad**
```css
.c-foo {
  border: none;
}
```

**Good**
```css
.c-foo {
  border: 0;
}
```

## Sass
### Syntax
- Use the `.scss` syntax, never the original `.sass` syntax.
- Order your regular CSS and `@include` declarations logically (see below).

### Ordering of property declarations
1. `@include` declarations
    Grouping `@include`s at the beginning makes it possible to override certain properties from the include.

    ```scss
    .c-button--green {
      @include c-button();
    }
    ```
2. Property declarations
    List all standard property declarations, anything that isn't an `@include` or a nested selector.

    ```scss
    .c-button--green {
      @include c-button();

      background: green;
      // ...
    }
    ```
3. Nested selectors
    Do not nest selectors.

### Variables
Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names.

#### Maps
When defining multi line Sass maps, make sure to use a trailing comma after every line (even the last line).

**Bad**
```scss
$map: (
  key: value,
  other-key: other-value
);
```

**Good**
```scss
$map: (
  key: value,
  other-key: other-value,
);
```

### Mixins
Mixins should be used to DRY up your code, add clarity, or abstract complexity – in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive
`@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Nested selectors
Do not nest selectors.
