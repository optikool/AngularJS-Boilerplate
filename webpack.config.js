// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './app/app.module.js',
    // output: {
    //   path: __dirname + '/bin',
    //   filename: 'app.bundle.js',
    // },
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
            }
        ]
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //       // Options similar to the same options in webpackOptions.output
    //       // both options are optional
    //       filename: "[name].css",
    //       chunkFilename: "[id].css"
    //   })
    // ],
    devtool: '#inline-source-map'
}