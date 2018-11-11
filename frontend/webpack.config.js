const { join } = require('path');
const Autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputFolderPath = join(__dirname, '..', 'static');
const commonFolderPath = join(__dirname, 'scripts', 'common');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: join(__dirname, 'scripts', 'index.jsx'),
  output: {
    path: outputFolderPath,
    filename: join('dist', 'bundle.js'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: join(commonFolderPath, 'components'),
      utils: join(commonFolderPath, 'utils'),
      constants: join(commonFolderPath, 'constants'),
      validation: join(commonFolderPath, 'validation'),
    },
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
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
        test: /\.(less|css)$/,
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
          'resolve-url-loader',
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'dist/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: join('dist', '[name].css'),
    }),
    new HtmlWebpackPlugin({
      title: 'CoLink app',
      template: join(__dirname, 'template', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: join(outputFolderPath),
    compress: true,
    hot: false,
    inline: false,
    port: 9000,
    historyApiFallback: true,
  },
};
