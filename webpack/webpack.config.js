const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
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
                        options: {esModules : false}
                    },

                    "css-loader"],
            },

            {test: /\.s[ac]ss$/i, use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                 ],
            },
        ],
    },
};
