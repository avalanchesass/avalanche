module.exports = {
  extends: [
    `eslint-config-airbnb-base`,
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: `module`,
  },
  rules: {
    strict: 2,
    quotes: [2, `backtick`, { avoidEscape: true }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: true,
    }],
  },
};
