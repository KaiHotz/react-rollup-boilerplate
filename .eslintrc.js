const prettierConfig = require('./prettier.config');

module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'newline-before-return': 'error',
    'import/no-anonymous-default-export': 0,
  },
};
