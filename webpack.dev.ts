import path from "path";
import Webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Webpack.Configuration = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: path.resolve(__dirname, "src", "main.ts"),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "@linaria/webpack-loader",
                        options: { sourceMap: true },
                    },
                    { loader: "ts-loader" },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "static", "index.html"),
            favicon: path.resolve(__dirname, "static", "hammer.png"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};

export default config;
