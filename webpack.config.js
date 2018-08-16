var path = require('path');
 
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    rules: [ //объекты с правилами загрузки модулей
        { 
            test:/\.js$/,
            loader: 'babel-loader'
        }
    ]
}
};