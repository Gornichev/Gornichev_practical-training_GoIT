const path = require("path")

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.m?js$/, exclude : /node_modules/,  use: 'babel-loader' }],
    },
};
