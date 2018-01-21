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
    modules: [path.resolve(process.cwd(), "src"), "node_modules"]
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
      },
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[hash:base64:5]__[local]",
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
