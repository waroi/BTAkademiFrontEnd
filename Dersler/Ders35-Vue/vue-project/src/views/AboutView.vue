<template>
  <div class="about">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="todo" />
      <button type="submit">Ekle</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // setup() {
  //   const todo = ref("");
  //   const todos = ref([]);
  //   const addTodo = () => {
  //     todos.value.push(todo.value);
  //     todo.value = "";
  //   };
  //   return {
  //     todo,
  //     addTodo,
  //     todos,
  //   };
  // },
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
