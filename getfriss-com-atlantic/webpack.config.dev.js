const path    = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    filename: 'frissky.bundle.js',
    path: path.resolve(__dirname, 'assets'),
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
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true
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
        ]
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
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['.js', '.scss', '.graphql'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
}
