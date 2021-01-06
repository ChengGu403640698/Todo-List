<template>
  <div class="main-body">
    <input
      type="text"
      v-model="inputValue"
      placeholder="What to do?"
      autofocus
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="item of record"
      :key="item.id"
      :todo="item"
      :style="{ display: item.seen }"
      @del="deletedOneItem"
      @recount="recount"
    ></todo-item>
    <todo-info
      :todoNumber="todo"
      @showWay="showWay"
      @clearCompleted="clearCompleted"
    ></todo-info>
  </div>
</template>
<script>
import todoItem from "./coms/todoItems.vue";
import todoInfo from "./coms/todoInfo.vue";
export default {
  name: "mainTodo",
  data() {
    return {
      inputValue: "",
      itemNum: 0,
      todo: 0,
      record: [],
    };
  },
  components: {
    todoItem: todoItem,
    todoInfo: todoInfo,
  },
  methods: {
    addTodo: function () {
      if (this.inputValue.length != 0) {
        this.record.unshift({
          id: this.itemNum++,
          content: this.inputValue,
          completed: false,
          seen: true,
        });
        this.todo++;
        this.inputValue = "";
      }
    },
    deletedOneItem: function (id) {
      console.log(id);
      let index = this.record.findIndex((item) => item.id === id);
      if (this.record[index].completed == false) {
        this.todo--;
      }
      this.record.splice(index, 1);
      this.itemNum--;
    },
    recount: function (completed) {
      if (completed) {
        this.todo--;
      } else {
        this.todo++;
      }
    },
    showWay: function (id) {
      var tag1 = "flex";
      var tag2 = "flex";
      if (id === "completed") {
        tag2 = "none";
      } else if (id === "todo") {
        tag1 = "none";
      }
      for (let item of this.record) {
        if (item.completed) {
          item.seen = tag1;
        } else {
          item.seen = tag2;
        }
      }
    },
    clearCompleted: function () {
      this.record = this.record.filter((item) => {
        return item.completed === false;
      });
      this.itemNum = this.record.length;
    },
  },
};
</script>
<style lang="stylus" scope>
.main-body {
  width: 600px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 0 5px;

  input {
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: black;
    border: none;
    outline: none;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>