const path    = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'createMetaFields.js',
    libraryTarget: 'commonjs2'
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
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      'node_modules'
    ]
  },
  optimization: {
    minimize: false,
    namedModules: true
  }
}
