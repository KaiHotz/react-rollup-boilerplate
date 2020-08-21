const path = require('path')
const pkg = require('./package.json')
const webpackConfig = require('./config/webpack.js')

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/lib/components/**/[A-Z]*.tsx', // for none typescript replace *.tsx with .js or .jsx
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib'),
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
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  webpackConfig,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.(js?|tsx?)$/, '.examples.md')
  },
  getComponentPathLine(componentPath) {
    let name
    if (path.basename(componentPath, '.tsx')) {
      name = path.basename(componentPath, '.tsx')
    } else {
      name = path.basename(componentPath, '.js')
    }

    return `import { ${name} } from '${pkg.name}';`
  },
}
