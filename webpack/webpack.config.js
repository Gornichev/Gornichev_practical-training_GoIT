const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    plugins: [new MiniCssExtractPlugin({filename :"style.css"}), new HtmlWebpackPlugin({template: "./src/index.html"})],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.m?js$/, exclude : /node_modules/,  use: 'babel-loader' },
            {test: /\.css$/i, use: [
                    "style-loader",{
                        loader:  MiniCssExtractPlugin.loader,
                        options: {esModule : false}
                    },

                    "css-loader"],
            },

            {test: /\.s[ac]ss$/i, use: [
                    "style-loader",{
                        loader:  MiniCssExtractPlugin.loader,
                        options: {esModule : false},
                    },
                    "css-loader",
                    "sass-loader",
                 ],
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
        ],
    },
};


