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

/* обычный вариант
module.exports = conf;
*/

/* вариант с выводом карты кода в консоль браузера */
module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                        ? false
                        : 'eval-sourcemap';

    return conf;
}