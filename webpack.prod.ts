import path from "path";
import Webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { GenerateSW } from "workbox-webpack-plugin";

const config: Webpack.Configuration = {
    target: "web",
    mode: "production",
    entry: path.resolve(__dirname, "src", "main.ts"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    performance: {
        hints: "error",
        maxEntrypointSize: 5000,
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "@linaria/webpack-loader",
                        options: {
                            sourceMap: false,
                            displayName: false,
                        },
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
                        options: { sourceMap: false },
                    },
                ],
            },
        ],
    },
    plugins: [
        new Webpack.ProgressPlugin(),
        new Webpack.CleanPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "static", "index.html"),
            favicon: path.resolve(__dirname, "static", "hammer.png"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            defaultSizes: "gzip",
            openAnalyzer: false,
            analyzerPort: 8888,
        }),
        new GenerateSW({
            swDest: "service-worker.js",
            include: [],
            cleanupOutdatedCaches: true,
            runtimeCaching: [
                {
                    urlPattern: /\.(?:js|css)$/,
                    handler: "CacheFirst",
                    options: {
                        cacheName: "JsAndCss",
                        expiration: { maxEntries: 30 },
                    },
                },
            ],
        }),
    ],
};

export default config;
