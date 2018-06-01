var path = require('path')
var webpack = require('webpack')

var config ={
    devtool:"#eval-source-map",
    entry: {
        index:path.resolve(__dirname,'js/index.jsx')
    },
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'static'),
        publicPath:'/static'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
                
            },
            {
                test: /\.css$/,
                exclude:/node_modules/,
                loaders: ['style','css']
            }
        ]
    },
    resolve: {
      extensions:['.js','.jsx','.css']  
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NOOE_ENV: '"development"'
            }
        })
    ]
}

module.exports = config;