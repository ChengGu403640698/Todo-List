const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: "./src/main.js",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,'../dist')
    },
    //打包规则   
    module:{
        rules:[{
            test:/\.vue$/,
            loader:'vue-loader'
        }, {
            test:/\.(jpg|jpeg|png|bmp|svg)$/,
            loader:'url-loader',
            options:{
                name: "[name].[ext]",
                limit: 2048
            }
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
            //当loader需要使用两个或者多个的时候，其在数组中的书写顺序是有要求的
        },{
            test:/\.styl(us)$/,
            use:["style-loader",'css-loader','stylus-loader']
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }
    ]},
    plugins:[new VueLoaderPlugin()],
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    }
}
//webpack的基本配置文件 