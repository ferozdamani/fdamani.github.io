var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  mode: 'development',
  entry: APP_DIR + '/index.jsx',
  context: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx$/,
        exclude: /\/node_modules/,
        include : APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }, {
      test: /\.scss$/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      parallel: true,
      exclude: /\/node_modules/,
      uglifyOptions: {
        ecma: 8,
        warnings: false
      }
    })
  ]
};

module.exports = config;
