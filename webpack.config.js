const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "shop.js",
        path: path.resolve(__dirname, 'public/js'),
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {loader: "vue-loader"}
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: "babel-loader" }
                    ]
            },
            {
                test: /\.css$/i,
                use: [
                        { loader: "style-loader" },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ],
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}