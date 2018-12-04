import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import uglify from 'rollup-plugin-uglify-es';

import pkg from './package.json';

export default {
  input: 'src/index.js',
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
      includeDependencies: true,
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
      ],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    uglify(),
  ],
};
