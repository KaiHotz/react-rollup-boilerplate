# React Rollup Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Rollup](https://img.shields.io/badge/Rollup-4.x-EC4A3F?logo=rollup.js)](https://rollupjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-10.x-FF4785?logo=storybook)](https://storybook.js.org/)

A modern, production-ready boilerplate for building React component libraries. This project provides a complete development environment with Rollup bundling, TypeScript support, Storybook for component documentation, and comprehensive testing setup.

## ✨ Features

- **⚛️ React 19.2** - Built with the latest React version
- **📦 Rollup Bundler** - Optimized ES modules output for tree-shaking
- **🔷 TypeScript** - Full TypeScript support with type declarations
- **📚 Storybook 10** - Interactive component documentation and development
- **🧪 Vitest** - Fast unit testing with React Testing Library
- **🎨 SCSS Support** - Styling with SCSS and CSS modules
- **✅ ESLint & Prettier** - Code linting and formatting
- **🎯 Stylelint** - CSS/SCSS linting with BEM methodology
- **📱 Accessibility** - JSX a11y plugin for accessibility best practices

## 📁 Project Structure

```
react-rollup-boilerplate/
├── src/
│   ├── components/          # React components
│   │   ├── Button/          # Example Button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.scss
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Tabs/            # Example Tabs component
│   │   │   ├── Tabs.tsx
│   │   │   ├── Tab.tsx
│   │   │   ├── TabPanel.tsx
│   │   │   ├── TabsList.tsx
│   │   │   ├── context.ts
│   │   │   ├── *.scss
│   │   │   ├── Tabs.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts         # Component exports
│   └── index.ts             # Main library entry point
├── dist/                    # Built library output
├── storybook-static/        # Built Storybook for deployment
├── rollup.config.mjs        # Rollup bundler configuration
├── tsconfig.json            # TypeScript configuration
├── vitest.config.ts         # Vitest test configuration
├── eslint.config.js         # ESLint configuration
└── .stylelintrc.cjs         # Stylelint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn package manager

### Installation

#### Clone the repository

```bash
git clone git@github.com:KaiHotz/react-rollup-boilerplate.git
cd react-rollup-boilerplate
yarn install
```

#### Or download directly

Download the [.zip file](https://github.com/KaiHotz/react-rollup-boilerplate/archive/master.zip), extract it, then:

```bash
cd react-rollup-boilerplate
yarn install
```

## 💻 Development

Start the development environment with Storybook:

```bash
yarn start
```

This launches Storybook at [http://localhost:6006](http://localhost:6006), where you can:

- View and interact with your components
- Test different props and states
- Document component usage

### Creating Components

1. Create a new folder in `src/components/` with your component name
2. Add your component files:
   - `YourComponent.tsx` - Component implementation
   - `YourComponent.scss` - Component styles
   - `YourComponent.test.tsx` - Unit tests
   - `YourComponent.stories.tsx` - Storybook stories
   - `index.ts` - Component export
3. Export your component from `src/components/index.ts`

Refer to the `Button` and `Tabs` components as examples.

## 🎨 Styling

### SCSS & CSS Support

Import styles directly into your components:

```tsx
import './YourComponent.scss';
```

### CSS Modules

For CSS Modules support, refer to [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss).

### Style Linting

SCSS and CSS are linted using [Stylelint](https://stylelint.io/) with BEM methodology:

```bash
yarn stylelint        # Check styles
yarn stylelint:fix    # Auto-fix style issues
```

## 🔍 Linting & Formatting

### TypeScript/JavaScript

Code quality is enforced via [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/):

```bash
yarn lint         # Run all linters (ESLint, Stylelint, TypeScript)
yarn lint:fix     # Auto-fix all linting issues
yarn eslint       # Run ESLint only
yarn eslint:fix   # Auto-fix ESLint issues
yarn check-types  # Run TypeScript type checker
```

Customize rules in `eslint.config.js`.

## 🧪 Testing

Testing is powered by [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):

```bash
yarn test              # Run tests in watch mode
yarn test:coverage     # Run tests with coverage report
```

See `Button.test.tsx` for example test patterns.

## 📦 Building

Build your library for production:

```bash
yarn build
```

Output is generated in the `dist/` folder with:

- ES modules for modern bundlers
- TypeScript type declarations

## 🚢 Publishing

### To NPM or Private Registry

1. Ensure you have an active [NPM](https://www.npmjs.com/) account
2. Configure your `.npmrc` file
3. Update `publishConfig.registry` in `package.json`
4. Run:

```bash
yarn release
```

This runs linting, tests, builds, and publishes your library.

## 📚 Storybook

### Development

```bash
yarn storybook
```

### Build Static Storybook

```bash
yarn storybook:build
```

Output is generated in `storybook-static/`.

### Deploy to GitHub Pages

Update the `homepage` URL in `package.json`, then:

```bash
yarn storybook:deploy
```

For more information, see the [Storybook documentation](https://storybook.js.org/docs).

## 📜 Available Scripts

| Script                  | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `yarn start`            | Start Storybook development server              |
| `yarn build`            | Build library to `dist/` folder                 |
| `yarn test`             | Run tests in watch mode                         |
| `yarn test:coverage`    | Run tests with coverage report                  |
| `yarn lint`             | Run all linters (ESLint, Stylelint, TypeScript) |
| `yarn lint:fix`         | Auto-fix all linting issues                     |
| `yarn eslint`           | Run ESLint only                                 |
| `yarn eslint:fix`       | Auto-fix ESLint issues                          |
| `yarn stylelint`        | Run Stylelint only                              |
| `yarn stylelint:fix`    | Auto-fix Stylelint issues                       |
| `yarn check-types`      | Run TypeScript type checker                     |
| `yarn ci`               | Run linting and tests (for CI/CD)               |
| `yarn release`          | Lint, test, build, and publish to NPM           |
| `yarn storybook`        | Start Storybook                                 |
| `yarn storybook:build`  | Build static Storybook                          |
| `yarn storybook:deploy` | Deploy Storybook to GitHub Pages                |

## 🛠️ Tech Stack

### Core

- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

### Bundling

- [Rollup.js](https://rollupjs.org/) - Module bundler
- [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) - CSS/SCSS processing

### Development

- [Storybook 10](https://storybook.js.org/) - Component development environment
- [Vite](https://vitejs.dev/) - Development server for Storybook

### Testing

- [Vitest](https://vitest.dev/) - Unit test framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - React component testing
- [jest-dom](https://github.com/testing-library/jest-dom) - Custom DOM matchers
- [Playwright](https://playwright.dev/) - Browser testing

### Code Quality

- [ESLint](https://eslint.org/) - JavaScript/TypeScript linting
- [Prettier](https://prettier.io/) - Code formatting
- [Stylelint](https://stylelint.io/) - CSS/SCSS linting
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - React-specific linting
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility linting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kai Hotz**

- GitHub: [@KaiHotz](https://github.com/KaiHotz)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/KaiHotz/react-rollup-boilerplate/issues).
