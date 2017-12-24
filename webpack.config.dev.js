const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/app/index.js')
  ],
  // entry: path.resolve(__dirname, 'src/app/index.js'),
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader  : 'sass-resources-loader',
            options : {
              resources: path.resolve(__dirname, "src/app/shared/styles/index.scss"),
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
  resolve: {
    extensions: ['.js', '.scss', '.graphql'],
    modules: [
      path.resolve(__dirname, "src/app"),
      "node_modules"
    ]
  },
  devServer: {
    compress: true,
    contentBase: '/public/',
    port: 8080,
    proxy: {
      '/graphql': "http://localhost:8081"
    },
    publicPath: '/dist/'
  }
}
