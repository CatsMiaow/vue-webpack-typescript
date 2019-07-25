const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const { root } = require('./helper');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  output: {
    path: root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
