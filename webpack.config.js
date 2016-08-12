const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry : {
    app : path.join(__dirname, './app/app.ts'),
    vendor : path.join(__dirname, './app/vendor.ts')
  },
  output : {
    path :__dirname,
    filename : './dist/[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module : {
    loaders : [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins : [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js"),
    new HtmlWebpackPlugin({
      title : 'Angular 2 Starterkit',
      template : path.join(__dirname, './app/app.html'),
      filename : './dist/index.html',
      inject : false
    })
  ]
}
