const path = require("path");

module.exports = {
    entry: "./wwwroot/js/main.js",
    output: {
        path: path.resolve(__dirname, "wwwroot"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    mode: "development",
};
