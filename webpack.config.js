const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "shop.js",
        path: path.resolve(__dirname, 'public/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader" }
                    ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }

        ]
    }
}