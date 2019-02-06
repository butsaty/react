const webpack = require('webpack');
const path = require('path');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        chunkFilename: '[name].js',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new AsyncChunkNames(),
        new FriendlyErrorsWebpackPlugin()
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             default: false,
    //             vendors: false,
    //             // vendor chunk
    //             vendor: {
    //                 // name of the chunk
    //                 name: 'vendor',
    //                 // async + async chunks
    //                 chunks: 'all',
    //                 // import file path containing node_modules
    //                 test: /node_modules/,
    //                 // priority
    //                 priority: 20
    //             },
    //         }
    //     }
    // }
};