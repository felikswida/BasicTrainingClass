var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Build path for Linux box
// Perhaps windows box has different setting. Please adjust accordingly
var BUILD_DIR = path.resolve(__dirname, '../Constellation.Server/Constellation.Server/bin/Debug/wwwroot/dist');
var APP_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

    const isDevBuild = !(env && env.prod);
    
    return [{
        entry: APP_DIR + '/boot.js',
        output: {
            path: BUILD_DIR,
            filename: 'bundle.js',
            publicPath: "/dist/"
        },
        module : {
            loaders : [
                {
                    test : /\.js?/,
                    include : APP_DIR,
                    loader : 'babel-loader',
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
                    }
                },
                {
                    test: /\.css$/,
                    use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' })
                },
                {
                    test: /\.less$/,
                    loader: ['style-loader', 'css-loader' + ( isDevBuild ? '' : '?minimize=true') ,'less-loader'+ ( isDevBuild ? '' : '?minimize=true') ],
                    // use: [{
                    //     loader: "style-loader" // creates style nodes from JS strings
                    // }, {
                    //     loader: "css-loader" // translates CSS into CommonJS
                    // }, {
                    //     loader: "less-loader" // compiles Less to CSS
                    // }]
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'file-loader?limit=25000' }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            }),
            new HtmlWebpackPlugin({
                title: 'Protein Concentrator',
                hash: true,
                filename: '../index.html',
                template:'./wwwroot/template/index.html'
            })

        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(BUILD_DIR, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin()
        ])
  }]
};