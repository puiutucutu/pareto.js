import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

let format, dest, minify;

switch (process.env.npm_lifecycle_event) {
  case 'build:cjs':
    format = 'cjs';
    dest = 'dist/pareto.cjs.js';
    minify = false;
    break;
  case 'build:es':
    format = 'es';
    dest = 'dist/pareto.es.js';
    minify = false;
    break;
  case 'build:umd':
    format = 'umd';
    dest = 'dist/paretojs.min.js';
    minify = true;
    break;
  default:
    break;
}

export default {
  entry: './src/index.ts',
  moduleName: 'paretojs',
  format,
  plugins: [
    typescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    minify && uglify(),
  ],
  dest,
}
