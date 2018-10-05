const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressWebpackPlugin = require('progress-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const history = require('connect-history-api-fallback');

const devMode = process.env.NODE_ENV !== 'production';

const path = require('path');

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js'
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
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
        },
        stats: {
            colors: true,
            hash: true,
            timings: true,
            chunkModules: false,
            modules: true,
            maxModules: 0,
            reasons: false,
            warnings: true,
            version: false,
            assets: false,
            chunks: true,
            children: false
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
                cache: true,
                extractComments: true,
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new ProgressWebpackPlugin(),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            filename: '[path].gz[query]'
          }),
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
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ],
    stats: 'normal',
    devtool: '#inline-source-map'
}