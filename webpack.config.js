const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app/index.js'),
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
      }
    ]
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: [
      path.resolve(__dirname, "src/app"),
      "node_modules"
    ]
  },
  devServer: {
    // index: path.resolve(__dirname, './src/app/index.html')
  }
}
