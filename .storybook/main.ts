import type { StorybookConfig } from '@storybook/react-webpack5';
import custom from './webpack.config.js';

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.story.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.story.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true
      }
    },
  ],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...custom.resolve
      },
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  }
};

export default config;
