const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TemplateBannerPlugin = require('template-banner-webpack-plugin');

const babelConfig = {
    cacheDirectory: true,
    presets: [
        ['env', {
            'modules': false,
            'targets': {
                'browsers': ['> 2%'],
                uglify: true
            },
        }]
    ],
    plugins: [
        'transform-object-rest-spread',
        ['transform-runtime', {
            'polyfill': false,
            'helpers': false
        }]
    ]
};

let config = {
    output: {
        path: path.resolve(__dirname + '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname + '/src'),
                exclude: /node_modules/,
                use: [{loader: 'babel-loader', options: babelConfig}]
            },
            {
                test: /\.vue$/,
                include: path.resolve(__dirname + '/src'),
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: {
                            loader: 'babel-loader', options: babelConfig
                        }
                    },
                    esModule: false
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".vue", ".css"],
    },
    plugins: [
        new UglifyJsPlugin(),
        new TemplateBannerPlugin({
            banner: `{name} v{version}
(c) 2017-{year} {author}
Released under the {license} License.`,
            default: {
                year: (new Date()).getFullYear(),
            },
        }),
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