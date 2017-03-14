# PROJECT-NAME
A project powered by [avalanche](https://avalanche.oberlehner.net/).

## Usage
```bash
# Install dependencies.
npm install
# Start the build process.
npm start
```

### gulp tasks
This project is powered by [gulp](http://gulpjs.com/). The following tasks are available.

- `serve` This is the default task – it starts a development server with [Browsersync](https://browsersync.io/) enabled. It detects when you're making changes to the code, builds the CSS files and reloads your browser.
- `styles` Compile CSS from your Sass files.
- `minify:styles` Minify generated CSS files.
- `clean:styles` Remove generated CSS files.

All gulp tasks are available as npm scripts. You can run `npm run TASK-NAME` to run them without installing a global instance of gulp. If you want to minify your styles, run `npm run minify:styles`.
