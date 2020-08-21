import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    external({
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    }),
    typescript({
      typescript: require('typescript'),
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      presets: [
        'react-app',
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs(),
    terser(),
  ],
}
