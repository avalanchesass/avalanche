# avalanche
a modular SASS framework

avalanche is a highly modular SASS framework. The goal of this framework is to be a minimal starting point that doesn’t make assumptions how things should look. avalanche provides a solid directory structure and a well thought through CSS methodology.

## Getting started
### Quick start
- Install [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [npm](https://docs.npmjs.com/getting-started/installing-node), [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and [bower](http://bower.io/) on your system (if not already done)
- Clone the repo: `git clone https://github.com/avalanchesass/avalanche.git`
- Run `npm install` to install build dependencies
- Run `gulp bower` to install frontend dependencies
- Run `gulp` to start the build process, the gulp default task detects changes to your SASS files and generates CSS code

### Extend
The main avalanche package doesn’t define a single CSS selector. The high modularity of avalanche requires that every part of the system is a distinct package. There are multiple package types:

- **Function:** Custom SASS functions
- **System:** Everything system relevant (e.g. variables)
- **Base:** Base styles like typography and other global default styles
- **Utility:** Utility classes that do very specific things (e.g. clearfix)
- **Object:** Non-cosmetic styles (e.g. the famous media object)
- **Component:** Concrete, implementation-specific piece of UI

You can find various available packages on [GitHub](https://github.com/avalanchesass?tab=repositories)
To extend your installation with a preconfigured package open your bower.json file and add the package to your *dependencies* and run `gulp bower`.

```json
"dependencies": {
  "avalanche_base_default": "^2.0.0",
  "avalanche_base_form": "^2.0.0",
  "avalanche_base_layout": "^2.0.0",
  "avalanche_base_typography": "^2.0.0",
  "normalize.css": "~3.0.3"
}
```

## About
### Author
Markus Oberlehner  
Twitter: https://twitter.com/MaOberlehner

### License
avalanche is licensed under GPL v2 (http://www.gnu.org/licenses/gpl-2.0.html)
