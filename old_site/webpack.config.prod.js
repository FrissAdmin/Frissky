const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
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
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: '[hash:base64:5]'
              }
            },
            {
              loader: "sass-loader"
            },
            {
              loader  : 'sass-resources-loader',
              options : {
                resources: path.resolve(__dirname, "src/app/shared/styles/index.scss"),
              },
            },
          ],
          // use style-loader in development
          fallback: "style-loader"
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
    alias: {
      actionCreators: path.resolve(__dirname, 'src/app/actionCreators'),
      app: path.resolve(__dirname, 'src/app'),
      components: path.resolve(__dirname, 'src/app/components'),
      constants: path.resolve(__dirname, 'src/app/constants'),
      containers: path.resolve(__dirname, 'src/app/containers'),
      graphQL: path.resolve(__dirname, 'src/app/graphQL'),
      lib: path.resolve(__dirname, 'src/app/lib'),
      reducers: path.resolve(__dirname, 'src/app/reducers'),
      shared: path.resolve(__dirname, 'src/app/shared'),
    },
    extensions: ['.js', '.scss', '.graphql'],
    modules: [
      path.resolve(__dirname, "src/app"),
      "node_modules"
    ]
  }
}
