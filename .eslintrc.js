module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:import/errors', 'plugin:import/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  plugins: ['jest', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off', // we use @typescript-eslint/no-use-before-define instead
    'global-require': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 'off',

    // React
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'react/forbid-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'react/no-redundant-should-component-update': 'error',
    'react/no-deprecated': 'error',
    'react/no-access-state-in-setstate': 'error',

    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Imports
    'import/prefer-default-export': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'ui-kit/component',
            message: 'componets can only be imported directly from "ui-kit" or "ui-kit/{Componet Name}" ',
          },
        ],
        patterns: ['ui-kit/component/*'],
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          { target: './src/components', from: './src/views/Research' },
          { target: './src/components_v2', from: './src/views/Research' },
          { target: './src/ui-kit', from: './src/views/Research' },
          { target: './src/core', from: './src/views/Research' },

          { target: './src/components', from: './src/views/Results' },
          { target: './src/components_v2', from: './src/views/Results' },
          { target: './src/ui-kit', from: './src/views/Results' },
          { target: './src/core', from: './src/views/Results' },

          { target: './src/ui-kit', from: './src', except: ['./ui-kit'] },
        ],
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        pattern: {
          json: 'always',
        },
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['internal'], ['index', 'parent', 'sibling']],
      },
    ],
    'import/no-cycle': 'error',

    // ES6+
    'constructor-super': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',

    // Best practices
    'prefer-destructuring': 0,
    'no-restricted-syntax': ['error', 'ForInStatement', 'SequenceExpression'],
    'no-caller': 'error',
    'no-template-curly-in-string': 'error',
    'array-callback-return': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    eqeqeq: ['error', 'always'],
    'no-lone-blocks': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    yoda: 'error',
    'no-shadow': 'off', // we use @typescript-eslint/no-shadow instead
    'no-undef-init': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    camelcase: 0,
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],

    'no-debugger': ['warn'],
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', '*.test.tsx', '*.test.ts'],
      rules: {
        'max-nested-callbacks': ['error', 7],
        'import/no-restricted-paths': 0,
        'import/namespace': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-floating-promises': 'off', // we have valid use-cases for that
        // TODO: These rules were disabled because of the backward compatibility with the old codebase
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/prefer-includes': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
