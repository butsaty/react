const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ]
  //.filter(Boolean),
});
