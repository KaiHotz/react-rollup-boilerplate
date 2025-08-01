import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  'addons': [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],

  'framework': {
    'name': '@storybook/react-vite',
    'options': {},
  },
  'docs': {},
  'typescript': {
    'reactDocgen': 'react-docgen-typescript'
  },
  'core': {
    'disableTelemetry': true
  },
};

export default config;
