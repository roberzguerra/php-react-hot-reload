const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server', // Enable hot reloading

        //"react-hot-loader/patch",
        "./src/index.js"
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        // path: path.resolve(__dirname, "dist/"),
        // publicPath: "/dist/",
        // filename: "bundle.js"
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/dist/'
    },
    devServer: {
        // contentBase: path.join(__dirname, "public/"),
        // port: 3000,
        // publicPath: "http://localhost:3000/dist/",
        // hotOnly: true
        proxy: {
            '*': {
              target: 'http://localhost:8000/',
              changeOrigin: true,
            }
          }
      
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
