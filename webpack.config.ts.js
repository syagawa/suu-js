const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

let ENV = process.env.NODE_ENV;
console.log(ENV);
const MODE = process.env.APP_MODE;
if(ENV !== "production"){
  ENV = "development";
}

module.exports = {
  mode: ENV,
  entry: [
    // "core-js/modules/es6.promise",
    // "core-js/modules/es6.array.iterator",
    "./index.ts"
  ],
  output: {
    filename: "app_new.js",
    path: path.resolve(__dirname, "./"),
    library: 'su',
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   loader: "eslint-loader",
      //   options: {
      //     fix: false,
      //     formatter: "stylish" //"codeframe"
      //   }
      // },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
        // options: {
        //   presets: ["@babel/preset-env"]
        // }
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      fix: false,
      formatter: "stylish" //"codeframe"
    })
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname, "./"), "node_modules"],
  },
};

if (ENV !== 'production') {
  module.exports.devtool = 'inline-source-map';
}