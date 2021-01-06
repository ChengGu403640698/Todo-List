const { web } = require("webpack");
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const {merge} = require('webpack-merge');
const devConfig = {
    mode:"development",
    devServer:{
        contentBase:'./dist',
        open:true,
        hot: false 
    },
    devtool: 'eval',
    plugins:[new webpack.HotModuleReplacementPlugin()],
}
module.exports = merge(baseConfig,devConfig);
//webpack的基本配置文件 