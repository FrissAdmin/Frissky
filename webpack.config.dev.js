const path    = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/app/index.js')
  ],
  // entry: path.resolve(__dirname, 'src/app/index.js'),
  output: {
    filename: 'frissky.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
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
              resources: path.resolve(__dirname, 'src/app/shared/styles/index.scss'),
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
      path.resolve(__dirname, 'src/app'),
      "node_modules"
    ]
  },
  devServer: {
    compress: true,
    contentBase: '/assets/',
    port: 8080,
    proxy: {
      '/': 'http://localhost:8081',
      '/graphql': 'http://localhost:8081'
    },
    publicPath: '/dist/'
  }
}
