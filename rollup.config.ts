import * as path from 'path';
import * as typescript from 'typescript';
import * as pluginTypescript from 'rollup-plugin-typescript';

// import { ProjectConfig } from './types';

const projectPackage = require('./package.json');

const context = path.resolve(__dirname);
const dist = path.resolve(context, 'dist');

const excludeDependencies = ['fs', 'path', 'http', 'url'];

const config = {
  input: path.resolve(context, 'index.ts'),
  output: {
    format: 'cjs'
  },
  cache: null,
  external: Object.keys(projectPackage.dependencies).concat(excludeDependencies),
  plugins: [
    pluginTypescript({
      typescript
    })
  ]
};

module.exports = config;
