<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

:root {
  --primary-color: #2f80ed;
  --primary-color-darkend: #065ed1;
  --secondary-color: #333333;
  --danger-color: #eb5757;
  --gray-color: #bdbdbd;
}

#app {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
</style>
