const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    }],
  },
  stats: {
    colors: true,
  },
  optimization: {
    minimize: true,
  },
  devtool: 'source-map',
  mode: 'production',
  watch: true,
};
