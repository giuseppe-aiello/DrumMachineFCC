const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    mode:"development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  output: {
    path: path.join(__dirname, "/build"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 8080, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      ,
		// `ts` and `tsx` files are parsed using `ts-loader`
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {test:/.scss$/, 
      use: ["style-loader",
            "css-loader",
            "sass-loader" ],
      test: /\.css$/, 
      use: ["style-loader",
            "css-loader"]}
    ],      
  },
};