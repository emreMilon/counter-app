const path = require("path")
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
            mode: "production",
            output: {
                filename: "[name].[contenthash].bundle.js",
                path: path.resolve(__dirname, "public"),
            },
            optimization: {
                minimize: true,
                minimizer : [
                    new HtmlWebpackPlugin({
                        template: "./src/template.html",
                        minify: {
                     removeAttributeQuotes: true,
                     collapseWhitespace: true,
                     removeComments: true
                            }
                        }),
                        new TerserPlugin(), 
                    
                ]
            },
            plugins: [
                new CleanWebpackPlugin()
            ],
            module: {
                rules: [{
                        test: /\.scss$/,
                        use: [
                            "css-loader", //2. Turns css into commonjs
                            "sass-loader" //1. Turns sass into css

                        ]
                    }
                ]}
            })