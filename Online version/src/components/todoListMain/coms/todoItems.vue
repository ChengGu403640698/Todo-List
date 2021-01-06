<template>
  <div :class="['item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" @change="recount" />
    <label>{{ todo.content }}</label>
    <button @click="deleteItem">Remove</button>
  </div>
</template>
<script>
export default {
  name: "todoItem",
  props: {
    todo: Object,
  },
  data: function () {
    return {};
  },
  methods: {
    deleteItem: function () {
      this.$emit("del", this.todo.id);
    },
    recount: function () {
      console.log(this.todo.completed);
      this.$emit("recount", this.todo.completed);
    },
  },
};
</script>
<style lang="stylus" scope>
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  &:hover {
    button {
      font-size: 14px;
      background: rgba(131, 175, 169, 0.3);
    }
  }

  &.completed {
    label {
      color: #b2b2b2;
      text-decoration: line-through;
    }
  }

  input {
    flex: 1;
    height: 20px;
    width: 20px;
    display: inline-block;
    margin-top: 10px;
    align-items: center;
    // appearance: none;
    // border: none;
    // outline: none;
  }

  label {
    text-align: left;
    flex: 8;
    font-size: 25px;
    font-weight: 10;
    padding: 5px;
  }

  button {
    flex: 1;
    font-size: 0px;
    margin-right: 20px;
    width: 90px;
    height: 40px;
    appearance: none;
    border-radius: 20px;
    border: none;
    outline: none;
    background: rgba(131, 175, 169, 0);
    cursor: pointer;
  }
}
</style>