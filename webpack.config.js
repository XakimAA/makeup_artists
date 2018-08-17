var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules: [ 
        { 
            test:/\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.html$/,
            loader: "html-loader"
        },  
        {
            test: /\.scss$/,
            loaders: [
                'to-string',
                'css',
                'sass'
            ]
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10240
                }
              }
            ]
        },
        {
            test: /\.css$/,
            loader: "css-loader"
         },
        {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
              "css-loader"
            ]
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ]
};