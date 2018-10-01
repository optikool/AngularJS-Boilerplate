// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');

const path = require('path');

module.exports = {
    entry: './app/app.module.js',
    // output: {
    //   path: __dirname + '/bin',
    //   filename: 'app.bundle.js',
    // },
    devServer: {
        open: true,
        port: 3000,
        before: (app) => {
            // app.get('/', (req, res) => {
            //     console.log('__dirname: ', __dirname + '/app' + req.url);
            //     res.redirect('/');
            // });

            app.get('/rest/:file', (req, res) => {
                console.log('req: ', req);
                console.log('/rest/:file __dirname: ', __dirname + '/app' + req.url);
                res.sendFile(path.resolve(__dirname + '/app' + req.url));
            });

            app.get('/images/:file', (req, res) => {
                console.log('req: ', req);
                console.log('/images/:file __dirname: ', __dirname + '/app' + req.url);
                res.sendFile(path.resolve(__dirname + '/app' + req.url));
            });
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
            //   use: [
            //       // fallback to style-loader in development
            //       process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            //       "css-loader",
            //       "sass-loader"
            //   ]
            // },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
    plugins: [
        // new UglifyJsPlugin(),
        // new BundleAnalyzerPlugin(),
        // new Visualizer()
        //   new MiniCssExtractPlugin({
        //       // Options similar to the same options in webpackOptions.output
        //       // both options are optional
        //       filename: "[name].css",
        //       chunkFilename: "[id].css"
        //   })
    ],
    devtool: '#inline-source-map'
}