const replace = require(`replace`);

module.exports = (replacements, path) => {
  replacements.forEach((replaceDate) => {
    replace({
      regex: replaceDate.regex,
      replacement: replaceDate.replacement,
      paths: [path],
      recursive: true,
      silent: true,
    });
  });
};
