const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'Alex Naidovich - Web Dev Made Easy';

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        bundle: ['babel-polyfill', path.join(dirApp, 'index')]
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!./index.ejs',
            filename: 'index.html',
            title: appHtmlTitle,
            favicon: path.join(__dirname, 'favicon.ico')
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [
                          autoprefixer({
                            browsers: ['ie >= 8', 'last 4 version']
                          })
                        ],
                        sourceMap: IS_DEV
                      }
                    },
                    {
                      loader: 'group-css-media-queries-loader',
                      options: {
                        sourceMap: IS_DEV
                      }
                    }
                ]
            },
            

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: ['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'group-css-media-queries-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
