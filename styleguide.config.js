const path = require('path');
const pkg = require('./package.json');
const webpackConfig = require('./config/webpack.config');

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/components/**/[A-Z]*.{jsx,tsx}',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src'),
  },
  ribbon: {
    url: 'https://github.com/KaiHotz/react-rollup-boilerplate',
    text: 'Fork me on GitHub',
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#065fd4',
      linkHover: '#00adef',
    },
    font: ['Helvetica', 'sans-serif'],
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage: 'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
      },
      link: {
        backgroundColor: '#065fd4',
      },
    },
    Heading: {
      heading2: {
        fontSize: 26,
      },
    },
    ReactComponent: {
      root: {
        marginBottom: 20,
      },
      header: {
        marginBottom: 0,
      },
      tabs: {
        marginBottom: 0,
      },
    },
  },
  propsParser: require('react-docgen-typescript').withDefaultConfig('./tsconfig.json').parse,
  webpackConfig,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(jsx?|tsx?)$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '{.tsx, .jsx}').replace(/\.(jsx?|tsx?)$/, '');

    return `import { ${name} } from '${pkg.name}';`;
  },
};
