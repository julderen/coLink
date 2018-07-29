const { join } = require('path'); 
const Autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: join(__dirname, 'src', 'index.jsx'),
    output: {
        path: join(__dirname,  '..', 'static', 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader', 
                        options: {
                            cacheDirectory: true
                        }  
                    }, 
                    {
                        loader: 'cache-loader'
                    }
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [Autoprefixer]
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {}
                    }
                ]
            },
        ] 
    },
    plugins: [
        new CleanWebpackPlugin(join(__dirname, '..', 'static', 'dist'), {}),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'CoLink app',
            template: join(__dirname, 'src', 'index.html')
        }),
    ],
    devServer: {
        contentBase: join(__dirname, '..', 'static', 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        open: true
    }
};