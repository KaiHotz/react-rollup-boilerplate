module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'import',
    'jsx-a11y',
    'prettier'
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    ecmaVersion: 'latest',
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    '!*.js',
    '.*.js',
    '*.json',
    '!.storybook',
    'scripts',
    'src/graphql/generated/*',
    'node_modules',
    'dist',
    '.eslintrc.cjs',
    'vitest.config.ts',
    'setupTests.ts'
  ],
  rules: {
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
    'no-unused-vars': 'warn',
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
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: [
          '**/*.test.[jt]s',
          '**/*.spec.[jt]s',
          '**/*.test.[jt]sx',
          '**/*.spec.[jt]sx',
          '**/*.stories.@(js|jsx|mjs|ts|tsx)',
          './src/setupTests.ts',
          './src/main.tsx',
          './vite.config.ts',
          '@faker-js/faker',
        ],
      },
    ],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
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
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      plugins: ['@typescript-eslint/eslint-plugin'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
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
  ],
};
