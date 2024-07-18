const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: './src/main.js',
        vendorStyles: ["./node_modules/bootstrap/dist/css/bootstrap.css"]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
            scriptLoading: 'blocking',
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {

    }
}