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
            // {
            //   test: /\.scss$/,
            //   //use: ExtractTextPlugin()
            //   use: [
            //       // fallback to style-loader in development
            //       process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            //       "css-loader",
            //       "sass-loader"
            //   ]
            // },
            {
                // test: /\.(sa|sc|c)ss$/,
                test: /\.scss$/,
                // use: [
                //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                //     {
                //         loader: "css-loader",
                //         options: {
                //             minimize: true,
                //             sourceMap: true
                //         }
                //     },
                //     {
                //         loader: 'postcss-loader'
                //     },
                //     {
                //         loader: 'sass-loader'
                //     }
                // ]
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         {
                //             loader: 'css-loader',
                //             options: { 
                //                 modules: true, 
                //                 importLoaders: 1,
                //                 minimize: true 
                //             }
                //         }, 
                //         {
                //             loader: 'postcss-loader'
                //         }, 
                //         {
                //             loader: 'sass-loader'
                //         }
                //     ]
                // })
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
            //inject: false,
            hash: true,
            template: 'src/index.html',
            filename: 'index.html'
        }),
        // new UglifyJsPlugin(),
        // new BundleAnalyzerPlugin(),
        // new Visualizer()
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: "style.[contenthash].css"
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
            filename: 'style.css'
        })
    ],
    stats: 'normal',
    devtool: '#inline-source-map'
}