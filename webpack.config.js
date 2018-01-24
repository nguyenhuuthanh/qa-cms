/* eslint-disable */
const path = require("path");
const srcPath = path.resolve(__dirname, "src");

module.exports = () => ({
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "bundle.[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), "src"),
      "node_modules",
      "type-definitions"
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        enforce: "pre",
        use: [
          {
            loader: require.resolve("eslint-loader")
          }
        ],
        include: srcPath
      }, {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: true
        }
      }, {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[hash:base64:5]__[local]",
              sourceMap: true
            }
          }, {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }
    ]
  }
});
