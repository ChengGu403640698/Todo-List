# 使用webpack打包工具打包一个简单的vue工程的流程
1. 新建项目，在命令行输入npm init -y 初始化项目，生成package.json文件
2. 安装需要的所有的包
npm install vue
npm install css-loader
npm install vue-loader（用于打包vue文件）
npm install webpack webpack-cli(command-line interface) -D
* -D表示开发时依赖
* 安装完以后会有node_modules文件夹
* 值得注意的是，webpack实际上只能打包所有的js文件，而其他的后缀文件打包需要不同的loader进行打包
3. 创建主页面 index.html+src目录且在原文件目录下创建一个main.js作为主js文件入口
4. 在main中创建vue根实例，然后在src下编写组件代码并挂载到根实例上去
5. 编写webpack.json.js 配置文件 写入入口文件和输出文件 loader相关的指令，定义开发和生产模式
6. 在package.js中写入命令：build:"webpack" 
7. 运行 npm run build 打包生成目标js文件 在index.html中用script标签引入文件运行

webpack实际上就是把多个js文件打包为一个，减少http请求
而webpack实际上并不能打包图片 vue 或者css文件等文件
而loader用于辅助webpack的打包

# 各种loader工具的打包使用

1. file-loader的使用：主要用于打包图片文件
2. url-loader
3. css-loader&style-loader 
配置文件中的书写顺序：从右往左
use:['style-loader','css-loader']
* css-loader 的作用是分析多个css之间的关系
* style-loader 的作用是将css按顺序打包为一个文件

# webpack-plugin 插件
* 插件就是在webpack打包时在某一阶段自动执行的一段代码
1. html-webpack-plugin 打包dist生成dist后注入html
2. clean-webpack-plugin 首先删除dist目录后打包
3. auto-prefix 自动添加厂商前缀

# webpack自动打包工具
最好用的是 webpack-dev-server
1. 安装后需要在package.json 中的script写入命令： ”start“：“webpack serve”
2. webpack 热模块替换 hmr hot module replacement 就模块更改后只改变对应的部分
3. source map 做一个打包后的语句和源文件之间的行对应关系

# 对于开发环境和生产环境需要分别打包
mode:
"development":目标是提高开发效率
'production':目标是打包文件小
1. 分别编写两个配置文件
2. webpack-merge提取公共代码

# babel
# 前端配色方案
rgb(254,67,101)
252,157,154
249,205,173
200,200,169
131,175,169
# 安装chrome上的vue devtool插件

# 组件化思想
1. 组件的功能拆分
2. 父组件向子组件传值
props:{}
子组件this.$emit()