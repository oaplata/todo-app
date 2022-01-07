<template>
  <div class="todo">
    <div
      class="todo-text"
      :class="{ completed: todo.state === 'completed' }"
      @click="completeTodo(index)"
    >
      <input type="checkbox" :checked="todo.state === 'completed'" />
      <span>{{ todo.text }}</span>
    </div>
    <div
      v-if="tabActive === 'completed'"
      @click="deleteTodo(index)"
      class="delete-todo"
    >
      x
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["todo", "index", "tabActive"],
  methods: {
    ...mapMutations(["completeTodo", "deleteTodo", "deleteTodos"]),
  },
  data() {
    return {
      model: true,
    };
  },
};
</script>

<style lang="scss">
.todo {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  .todo-text {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 18px;
    line-height: 21px;
    color: var(--secondary-color);
    font-weight: 500;
    cursor: pointer;
    &.completed {
      text-decoration: line-through;
    }
  }
  .delete-todo {
    padding: 5px;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
  }
}
</style>
