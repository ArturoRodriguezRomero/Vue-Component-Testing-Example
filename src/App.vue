<template>
  <div id="app">
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "@/components/TodoItem.vue";
import TodoList from "@/containers/TodoList.vue";

export default Vue.extend({
  name: "app",
  components: {
    TodoItem,
    TodoList
  },
  data: () => ({
    title: "test-title",
    isCompleted: false
  }),
  methods: {
    log: () => {
      console.log("click");
    }
  }
});
</script>

<style>
</style>
