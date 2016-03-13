avalanche uses [mdcss](https://github.com/jonathantneal/mdcss) to automatically
generate a style guide from CSS comments in markdown syntax
([avalanche style guide DEMO](http://avalanche.oberlehner.net)).

Please follow the [official mdcss documentation](https://github.com/jonathantneal/mdcss#writing-documentation)
on how to format comments in your SCSS code for the style guide.

To generate the style guide run `gulp style_guide`. You can also run
`gulp watch:style_guide` instead of the default `gulp` task to start the build
process. This automatically generates the style guide on every change you make
to your code base.
