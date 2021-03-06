"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const typescript = require("typescript");
const pluginTypescript = require("rollup-plugin-typescript");
const pluginEjs = require("rollup-plugin-ejs");
const projectPackage = require('./package.json');
const context = path.resolve(__dirname);
const dist = path.resolve(context, 'dist');
const excludeDependencies = ['fs', 'path', 'http', 'url'];
const config = {
    input: path.resolve(context, 'api/index.ts'),
    output: {
        format: 'cjs'
    },
    cache: null,
    external: Object.keys(projectPackage.dependencies).concat(excludeDependencies),
    plugins: [
        pluginTypescript({
            typescript
        }),
        pluginEjs()
    ]
};
module.exports = config;
