const { join } = require('path');
const Autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputFolderPath = join(__dirname, '..', 'static', 'dist');
const commonFolderPath = join(__dirname, 'scripts', 'common');
const pagesPath = join(__dirname, 'scripts', 'pages');

module.exports = {
  entry: join(__dirname, 'scripts', 'index.jsx'),
  output: {
    path: outputFolderPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: join(commonFolderPath, 'components'),
      validation: join(commonFolderPath, 'validation'),
      registration: join(pagesPath, 'registration'),
      authorization: join(pagesPath, 'authorization'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [Autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(entryFolderPath, {}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'CoLink app',
      template: join(__dirname, 'template', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: join(outputFolderPath),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
  },
};
