<template>
  <div class="info-clock">
    <span>Todo Items:{{ todoNumber }}</span>
    <div class="block">
      <a @click="showWay" id="todo"> Todo</a>
      <a @click="showWay" id="completed"> Completed</a>
      <a @click="showWay" id="all"> All</a>
    </div>
    <button @click="clearCompleted">Clear Completed</button>
  </div>
</template>
<script>
export default {
  name: "todoInfo",
  props: { todoNumber: Number },
  methods: {
    showWay: function (ev) {
      this.$emit("showWay", ev.target.id);
    },
    clearCompleted: function () {
      this.$emit("clearCompleted");
    },
  },
};
</script>
<style lang="stylus" scope>
.info-clock {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 8px;
  background-color: rgba(200, 200, 169, 0.1);
}

.block {
  width: 30%;
  padding-left: 50px;
  padding-right: 50px;
}

a {
  margin-left: 10px;
  background: rgba(200, 200, 169, 0.5);
}

button {
  border: none;
  appearance: none;
}
</style>