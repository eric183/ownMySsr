const path = require('path');
require("babel-polyfill");

const enterFiles = {
    index: 'index.jsx',
    home: 'home.jsx',
    sign: 'sign.jsx'
};

function objInterHandleer(obj, _path) {
    for (i in obj) {
        obj[i] = _path + obj[i]
    }
    return enterFiles;
};


module.exports = {
    entry: objInterHandleer(enterFiles, './front/dev/pages/'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './front/dist')
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            use: ['babel-loader'],
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", {
                loader: "postcss-loader",

                /**项目路径导致webpack无法get到postcss.config.js的路径，这里手动处理下**/
                options: {
                    config: { path: path.resolve(__dirname, 'postcss.config.js') }
                }
            }, "sass-loader"]
        }]
    },
    devServer: {
        //这里的publicPath需要配置一下在html里server的路径,不然会无法拿到

        publicPath: '/dist',
        // contentBase: path.resolve(__dirname, "views"),
        compress: true,
        port: 9000
    }
}