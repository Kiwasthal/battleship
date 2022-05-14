const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  loader: {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loaders: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
