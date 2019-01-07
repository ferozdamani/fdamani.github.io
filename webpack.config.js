var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

var APP_PATH = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var ENTRY_TEMPLATE = path.resolve(__dirname, 'src/client/app/index.html');

var config = {
  mode: 'development',
  entry: {
    test_app: APP_DIR + '/index.jsx',
  },
  // context: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: '[name][hash].bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx$/,
        exclude: /\/node_modules/,
        include : APP_DIR,
        use: [
          'babel-loader?cacheDirectory=true'
        ]
      }, {
      test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          // {loader:'style-loader'},
          {loader:'css-loader'},
          {loader:'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: ENTRY_TEMPLATE,
      filename: BUILD_DIR + '/index.html',
      inject: 'body',
      cache: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      sourceMap: true,
      parallel: true,
      exclude: /\/node_modules/,
      uglifyOptions: {
        ecma: 8,
        warnings: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin([BUILD_DIR])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    mangleWasmImports: true
  },
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
    compress: true,
    port: 2000,
    watchContentBase: true,
    hot: true
  }
};

module.exports = config;
