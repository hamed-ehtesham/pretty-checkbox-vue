const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
    output: {
        path: path.resolve(__dirname + '/dist/'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            }
        ]
    },
    externals: {},
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } )
    ]
};


module.exports = [
    merge(config, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'pretty-checkbox-vue.min.js',
            libraryTarget: 'window',
            library: 'PrettyCheckbox',
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'pretty-checkbox-vue.js',
            libraryTarget: 'umd',
            library: 'pretty-checkbox-vue',
            umdNamedDefine: true
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/PrettyInput.vue'),
        output: {
            path: path.resolve(__dirname + '/'),
            filename: 'input.js',
            libraryTarget: 'umd',
            library: 'PrettyInput',
            umdNamedDefine: true
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/PrettyCheckbox.vue'),
        output: {
            path: path.resolve(__dirname + '/'),
            filename: 'check.js',
            libraryTarget: 'umd',
            library: 'PrettyCheck',
            umdNamedDefine: true
        }
    }),
    merge(config, {
        entry: path.resolve(__dirname + '/src/PrettyRadio.vue'),
        output: {
            path: path.resolve(__dirname + '/'),
            filename: 'radio.js',
            libraryTarget: 'umd',
            library: 'PrettyRadio',
            umdNamedDefine: true
        }
    })
];