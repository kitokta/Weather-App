const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test:/\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        //img
        {
          test:/\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Weather App',
        filename: 'index.html',
        template: 'src/template.html',
      }),
    ],
  }