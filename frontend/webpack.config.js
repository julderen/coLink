const { join } = require('path');
const Autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryFolderPath = join(__dirname, '..', 'static', 'dist');

module.exports = {
  entry: join(__dirname, 'src', 'index.jsx'),
  output: {
    path: entryFolderPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
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
    //new CleanWebpackPlugin(entryFolderPath, {}),
    new MiniCssExtractPlugin({
      filename: '[name].css' 
    }),
    new HtmlWebpackPlugin({
      title: 'CoLink app',
      template: join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: join(entryFolderPath),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
  },
};
