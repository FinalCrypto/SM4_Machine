const path = require('path');
module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "sm4_server/public"),
        filename: "index.js",
        library: "index",
        libraryTarget: 'window',
    },
    mode: "development"
};