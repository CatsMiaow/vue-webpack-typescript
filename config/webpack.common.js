const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { isDev, root } = require('./helper');

module.exports = {
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': root('src')
    }
  },

  module: {
    rules: [{
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        configFile: 'tslint.json',
      }
    }, {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      options: {
        configFileName: 'tsconfig.json',
        declaration: isDev,
        sourceMap: isDev,
        inlineSources: isDev
      }
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      exclude: root('src', 'components'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: { sourceMap: isDev },
        }]
      })
    }, {
      test: /\.css$/,
      include: root('src', 'components'),
      loader: 'raw-loader'
    }]
  },

  plugins: [
    new HtmlPlugin({
      template: 'src/index.html'
    })
  ]
};
