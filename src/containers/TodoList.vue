<template>
  <div class="todo-list">
    <input type="text" placeholder="New task..." v-model="newTodo"/>
    <button @click="addNewTodo" :disabled="canAddNewTodo">+</button>
    <TodoItem v-for="(todo, key) in todos"
    :id="key" 
    :title="todo.title" 
    :isCompleted="todo.isCompleted" 
    :onClick="setTodoCompleted">
    </TodoItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "@/components/TodoItem.vue";

const TodoList = Vue.extend({
  name: "TodoList",
  components: {
    TodoItem
  },
  data: () => ({
    todos: [],
    newTodo: ""
  }),
  computed: {
    canAddNewTodo(){
      return this.newTodo === "";
    }
  },
  methods: {
    addNewTodo(){
      this.todos.push({ title: this.newTodo, isCompleted: false });
      this.newTodo = "";
    },
    setTodoCompleted(index){
      console.log("setTodoCompleted", index);
      this.todos[index].isCompleted = true;
    }
  }
});

export default TodoList;
</script>