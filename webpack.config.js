module.exports = {

    resolve: {
        root: __dirname
    },


    entry: {
        app: "./js/src/app.js"
    },


    output: {
        path: "./sqs_template/scripts/",
        filename: "app.js"
    },


    module: {
        loaders: [
            {
                test: /js\/src\/jquery\/dist.*\.js$/,
                loader: "expose?$!expose?jQuery"
            },
            {
                test: /js\/src\/.*\.js$/,
                exclude: /node_modules|jquery|hobo/,
                loader: "babel",
                query: {
                    // https://github.com/babel/babel-loader#options
                    // cacheDirectory: true,
                    presets: [
                        "es2015",
                        "stage-0"
                    ],
                    plugins: [
                        "add-module-exports"
                    ]
                }
            }
        ]
    }
};