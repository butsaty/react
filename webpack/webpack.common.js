const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
};