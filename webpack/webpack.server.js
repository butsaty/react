const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/server/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: './serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
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
          {
            loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          },
        ],
      },
    ],
  }
});
