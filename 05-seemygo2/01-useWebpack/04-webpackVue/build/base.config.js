const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", 
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                        // 当加载的图片，大于limit时，会使用file-loader模块进行加载
                        limit: 16000,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.js$/,
                // exclude:排除
                // include:包含
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['es2015']
                  }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },
    resolve: {
        // alias: 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        // 简写配置
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        // vue-loder 15版本之后必须依赖这个插件
        new VueLoaderPlugin(),
        // 版权设置
        new Webpack.BannerPlugin('最终解释权归Mario所有'),
        // webpack插件生成index.html文件
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 丑化(压缩)代码，在开发阶段不需要，因为需要调试
        // new UglifyjsWebpackPlugin()
    ],
    // devServer: {
    //     contentBase: './dist',
    //     inline: true
    // }
}