const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { getProductionState, getFileName, getProjectEntries } = require('./Utils');

const { NODE_ENV } = process.env;
const PROJECT_NAME = 'Workspace';

const context = resolve(__dirname, '..');
const scripts = resolve(context, 'Scripts');
const common = resolve(scripts, 'Common');

const outputPath = resolve('..', 'static', 'dist');

const production = getProductionState(NODE_ENV);
const fileName = getFileName(production);

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.PrefetchPlugin('react'),
  new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /ru/),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common'
  }),
  new ExtractTextPlugin({ filename: `styles/${fileName}.css`, allChunks: true })
];

const cssLoader = [{
  loader: 'css-loader',
  query: {
    importLoaders: 1,
    minimize: production
  }
}, 'sass-loader'];

module.exports = {
  entry: getProjectEntries(scripts, PROJECT_NAME, 'index.jsx'),

  output: {
    filename: `scripts/${fileName}.js`,
    path: outputPath,
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss|sass)(\?.+)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: production ? cssLoader.concat('postcss-loader') : cssLoader
        }),
      },
      {
        test: /\.(png|jpg|gif)(\?.+)?$/,
        loader: {
          loader: 'url-loader',
          query: {
            limit: 32768,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: {
          loader: 'url-loader',
          query: {
            limit: 2048,
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },

  plugins: production ? plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        drop_console: true
      }
    })
  ]) : plugins,
  resolve: {
    alias: {
      Actions: resolve(common, 'Actions'),
      Reducers: resolve(common, 'Reducers'),
      Services: resolve(common, 'Services'),
      Utils: resolve(common, 'Utils'),
      Constants: resolve(common, 'Constants'),
      Components: resolve(common, 'Components'),
      Decorators: resolve(common, 'Decorators'),
      Containers: resolve(common, 'Containers'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss', 'sass']
  },
};
