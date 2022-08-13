const custom = require('./webpack.config.js');

module.exports = {
  stories: [
    '../**/*.story.js',
    '../**/*.story.jsx',
    '../**/*.stories.js',
    '../**/*.story.ts',
    '../**/*.story.tsx',
    '../**/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-scss',
    '@storybook/preset-typescript',
    'storybook-addon-react-docgen',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
  ],
  webpackFinal: config => {
    return { ...config,
      resolve: { ...config.resolve,
        ...custom.resolve
      },
      module: { ...config.module,
        rules: custom.module.rules
      }
    };
  },
  core: {
    builder: "webpack5"
  }
};
