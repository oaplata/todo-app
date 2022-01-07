import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
    deleteTodos(state) {
      state.todos = state.todos.filter((todo) => todo.state === "active");
    },
    completeTodo(state, id) {
      state.todos.find((todo) => todo.id === id).state = "completed";
    },
  },
});
