<template>
  <div class="todo-list">
    <h1 class="title">#TODO</h1>
    <div class="content">
      <div class="tabs">
        <div
          @click="tabActive = 'all'"
          class="tab"
          :class="{ active: tabActive === 'all' }"
        >
          All
        </div>
        <div
          @click="tabActive = 'active'"
          class="tab"
          :class="{ active: tabActive === 'active' }"
        >
          Active
        </div>
        <div
          @click="tabActive = 'completed'"
          class="tab"
          :class="{ active: tabActive === 'completed' }"
        >
          Completed
        </div>
      </div>
      <div v-if="tabActive !== 'completed'" class="form">
        <input
          @keydown.enter="addTodo"
          v-model="text"
          type="text"
          placeholder="add details"
        />
        <button @click="addTodo">Add</button>
      </div>
      <div class="list">
        <Todo
          v-for="todo of todos"
          :key="todo.id"
          :todo="todo"
          :index="todo.id"
          :tabActive="tabActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.tabActive === "all"
        ? this.$store.state.todos
        : this.$store.state.todos.filter(
            (todo) => todo.state === this.tabActive
          );
    },
  },
  data() {
    return {
      tabActive: "all",
      text: "",
    };
  },
  methods: {
    addTodo() {
      if (this.text.trim()) {
        this.$store.commit("addTodo", {
          text: this.text,
          state: "active",
          id: Date.now(),
        });
        this.text = "";
      }
    },
  },
};
</script>

<style lang="scss">
.todo-list {
  padding-top: 32px;
  .title {
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: var(--secondary-color);
    text-align: center;
  }

  .content {
    margin-top: 60px;
    .tabs {
      border-bottom: solid 1px var(--gray-color);
      display: flex;
      gap: 50px;
      padding: 0 50px;

      .tab {
        padding: 15px 0;
        width: 90px;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        position: relative;
        cursor: pointer;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          transition: 0.2s ease-in;
        }
        &:hover:after {
          background: var(--gray-color);
          left: 0;
          width: 100%;
        }
        &.active:after {
          left: 0;
          width: 100%;
          background: var(--primary-color);
        }
      }
    }
    .form {
      padding: 20px 0;
      display: flex;
      gap: 25px;
      input {
        padding: 20px 12px;
        border-radius: 5px;
        border-color: var(--gray-color);
        border-style: solid;
        box-shadow: none;
        outline: none;
        border-width: 1px;
        flex: 1;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        &::placeholder {
          font-weight: 400;
        }
        color: var(--secondary-color);
      }
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 5px;
        padding: 20px 40px;
        cursor: pointer;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        color: #fff;
        transition: 0.3s ease-in;
        &:hover {
          background-color: var(--primary-color-darkend);
        }
      }
    }
  }
}
</style>
