<template>
  <header class="main-header">
    <h1>Todo List</h1>
  </header>
</template>
<script>
export default {
  name: "todo-list-header",
};
</script>
<style lang="stylus" scope>
.main-header {
  text-align: center;

  h1 {
    margin: 50px;
    font-size: 100px;
    font-weight: 100;
    color: rgb(254, 67, 101);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>