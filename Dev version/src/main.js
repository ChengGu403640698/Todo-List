// 需要创建vue根实例
import Vue from "vue"
import App from "./App.vue"
new Vue({
    el:"#app",
    components:{
        App
    },
    template:"<App></App>"
})