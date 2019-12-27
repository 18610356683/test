const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
    plugins: [
        // 丑化(压缩)代码，在开发阶段不需要，因为需要调试
        new UglifyjsWebpackPlugin()
    ],
})