module.exports = {
  extends: [
    `eslint-config-airbnb-base`,
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: `module`,
  },
  rules: {
    'comma-dangle': [2, {
      arrays: `always-multiline`,
      objects: `always-multiline`,
      imports: `always-multiline`,
      exports: `always-multiline`,
      functions: `never`,
    }],
    strict: 2,
    quotes: [2, `backtick`, { avoidEscape: true }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: true,
    }],
  },
};
