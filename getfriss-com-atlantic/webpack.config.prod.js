const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const webpack           = require('webpack');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'frissky.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader'
            },
            {
              loader  : 'sass-resources-loader',
              options : {
                resources: path.resolve(__dirname, 'src/shared/styles/index.scss'),
              },
            },
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'webpack-graphql-loader',
            options: {
              output: 'string',
              removeUnusedFragments: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,   // enable source maps to map errors (stack traces) to modules
      output: {
        comments: false, // remove all comments
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    extractSass
  ],
  resolve: {
    extensions: ['.js', '.scss', '.graphql'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  }
}
