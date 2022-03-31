## Support

If you like the project and want to support my work, you can buy me a coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/kaihotz)

# Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?

```
git clone git@github.com:KaiHotz/react-rollup-boilerplate.git
cd react-rollup-boilerplate
yarn install
```

#### Not Familiar with Git?

Click [here](https://github.com/KaiHotz/react-rollup-boilerplate/archive/master.zip) to download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
yarn install
```


## Developing

To start the developing run :

```
yarn start
```

This will build a version of your library, run the watcher and also run Storybook.
To open Storybook manually open your Browser and navigate to [http://localhost:6060](http://localhost:6060).
Start developing your components in `src/components` folder and update the `src/index.js` file accordingly.
Always provide an `YourComponent.story.tsx` file, so your component will show up in Storybook.

You can refer to example `Button` component, but I think you'll get the idea.

### Proposals (Babel)

For smoother development some Babel plugin are included
- [class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
- [object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)
- [optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)

## Styling your components

`SCSS` and `CSS` are supported out of the box just import your styles into your component like you normally would do.
For the use of  `CSS Modules` refer to [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)

## Testing

Testing is done with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
You can refer to `Button.test.js` as an example.
```
yarn test
```
or (for getting coverage)
```
yarn test:coverage
```


## Linting

Linting is set up through [ESLint](https://eslint.org/) and configured with  [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
You can modify linting rules by overriding them in the `.eslintrc.json` file.

```
yarn lint
```
or (if automatic fixing is possible)
```
yarn lint:fix
```

## Publishing your library to NPM

To release your library to NPM or your private Registry, make sure you have an active account at [NPM](https://www.npmjs.com/), your `.npmrc` file is correctly setup and the repository url in `package.json` file is set to your repository url, then:

```
yarn release
```

## Storybook

For custom layouts, styling and more information about Storybook, please refer to [Storybook](https://storybook.js.org/basics/writing-stories/) documentation.

#### Deploy Storybook to GitHub Pages

Make sure the repository url in `package.json` file is set to your repository url, then:

```
yarn deploy
```

## Scripts

- `yarn start` : Only serves Storybook.
- `yarn build` : Builds your library (build can be found in `dist` folder).
- `yarn storybook:build` : Builds the static Storybook in case you want to deploy it.
- `yarn test` : Runs the tests.
- `yarn test:coverage`: Runs the test and shows the coverage.
- `yarn lint` : Runs the linter, Typescript typecheck and stylelint.
- `yarn lint:fix` : Runs the linter, Typescript typecheck and stylelint and fixes automatic fixable issues.
- `yarn eslint`: Runs only the JavaScript linter.
- `yarn eslint:fix`: Runs only the JavaScript linter and fixes automatic fixable issues.
- `yarn stylelint`: Runs only the style linter.
- `yarn stylelint:fix`: Runs only the style linter and fixes automatic fixable issues.
- `yarn check-types`: Runs typescript type checker.
- `yarn release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `yarn deploy`: Deploys the Styleguide to GitHub Pages.


## Resources

### Bundler
- [Rollup.js](https://rollupjs.org/guide/en)

### Code Formatter
- [Prettier](https://prettier.io/)

### Storybook
- [Storybook](https://storybook.js.org/)

### Testing
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### Linting
- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
### Compiler
- [Babel 7](https://babeljs.io/)
- [Typescript](https://www.typescriptlang.org/)
