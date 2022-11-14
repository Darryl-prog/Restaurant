const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/index.js"
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/template.html",
        }
    )],
    module: {
        rules: [
            {
                test: /\.(svg|jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[hash].[ext]",
                            outputPath: "images"
                        },
                    }
                ],
                type: 'javascript/auto',
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },

        ]
    }
}