const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const { root } = require('./helper');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'nosources-source-map',

  output: {
    path: root('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    })
  ]
});