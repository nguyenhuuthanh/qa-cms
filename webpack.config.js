/* eslint-disable */
const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = () => ({
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        enforce: 'pre',
        use: [
          {
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: srcPath
      },
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
    ]
  }
});