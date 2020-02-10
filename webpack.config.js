const path = require('path');

let conf = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname+ '/dist/'),
        filename: 'main.js',
        publicPath: 'dist/' /* для работы npm run build */
    },
    devServer: { /* для отображения ошибок в браузере */
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/' /* исключить папку из перегона через babel-loader */
            }
        ]
    }
};

module.exports = conf;