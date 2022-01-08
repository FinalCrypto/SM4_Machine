const path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "sm4_server/public"),
        filename: "index.js",
        library: "index",
        libraryTarget: 'window',
    },
    experiments: {
        asyncWebAssembly: true,
        syncWebAssembly: true,
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'sm4_server/public'),
        },
        compress: true,
        port: 8080,
    },
    ignoreWarnings: [
        (warning) =>
        warning.message ===
        "Critical dependency: the request of a dependency is an expression",
    ],
};