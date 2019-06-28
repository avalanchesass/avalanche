module.exports = {
  extends: [
    `eslint-config-airbnb-base`,
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: `module`,
  },
  rules: {
    'import/prefer-default-export': `off`,
    quotes: [2, `backtick`, { avoidEscape: true }],
  },
};
