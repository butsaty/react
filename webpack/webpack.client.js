const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  devtool: 'inline-source-map',
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),
  devServer: {
    // index: 'index.html',
    contentBase: './dist',
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
        ],
      },
    ],
  },
  plugins: [
    isDevMod && new webpack.HotModuleReplacementPlugin()
  ]
  .filter(Boolean),
});
