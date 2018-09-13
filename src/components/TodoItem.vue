<template>
  <div class="todo-item">
    <span :class="{ completed: isCompleted }">{{ title }}</span>
    <button @click="onClick(id)" :disabled="isCompleted">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const TodoItem = Vue.extend({
  name: "TodoItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    buttonText(): String {
      return this.isCompleted ? "completed" : "complete";
    }
  }
});

export default TodoItem;
</script>

<style>
.completed {
  text-decoration: line-through;
}

.todo-item {
  margin: 10px;
}
</style>
