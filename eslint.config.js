import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import configPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
export default tseslint.config(
  {
    ignores: ['dist', '.git', '.npmrc', '.yarnrc', 'coverage', 'storybook-static', '.storybook', '.yarn', 'node_modules'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, configPrettier],
    files: ['**/*.{ts,tsx}', '**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      'react': pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': pluginImport,
      'jsx-a11y': jsxA11y,
      'prettier': eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'newline-before-return': 'warn',
      'no-console': [
        'warn',
        {
          allow: [
            'info',
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
          ],
        },
      ],
      'no-debugger': 'warn',
      'no-warning-comments': 'warn',
      'object-shorthand': 'error',
      'no-param-reassign': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link', 'RouterLink'],
          aspects: ['invalidHref'],
        },
      ],
      'sort-imports': ['error', { 'ignoreCase': true, 'ignoreDeclarationSort': true }],
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '$/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index'], 'unknown'],
        },
      ],
      'import/no-cycle': [
        'error',
        {
          maxDepth: '∞',
          ignoreExternal: true,
        },
      ],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    },
  },
);
