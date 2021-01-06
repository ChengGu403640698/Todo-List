<template>
  <div>
    <main-header></main-header>
    <mainTodo></mainTodo>
    <main-footer></main-footer>
  </div>
</template>
<script>
import "./assets/styles/global.stylus";
import todoListHeader from "./components/todoListHeader.vue";
import todoListFooter from "./components/todoListFooter.vue";
import maintodo from "./components/todoListMain/mainTodo.vue";
export default {
  name: "App",
  components: {
    mainHeader: todoListHeader,
    mainTodo: maintodo,
    mainFooter: todoListFooter,
  },
};
</script>
<style scope>
</style>
