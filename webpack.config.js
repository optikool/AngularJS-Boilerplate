const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const history = require('connect-history-api-fallback');

const devMode = process.env.NODE_ENV !== 'production';

const path = require('path');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        open: true,
        //publicPath: '/dist/',
        port: 3000,
        // contentBase: path.resolve(__dirname, "/src/app"),
        // watchContentBase: true,
        before: (app) => {
            app.get('/rest/:file', (req, res) => {
                res.sendFile(path.resolve(__dirname + '/src/app' + req.url));
            });

            app.get('/images/:file', (req, res) => {
                res.sendFile(path.resolve(__dirname + '/src/app' + req.url));
            });

            app.use(history());
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'dist/images/',
                        publicPath: 'assets/images/'
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                extractComments: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: 'src/index.html',
            filename: 'index.html'
        }),
        // new BundleAnalyzerPlugin(),
        // new Visualizer()
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.css'
        })
    ],
    stats: 'normal',
    devtool: '#inline-source-map'
}