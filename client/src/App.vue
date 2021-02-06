<template>
  <div id="app">
    <img src="../src/assets/logo.png" alt="" />
    <TodoList :todos="todos" @delete-todo="deleteTodo"></TodoList>

    <div class="input-block">
      <input
        class="input-block__field"
        type="text"
        v-model="newTodo"
        @keypress.enter="addTodo"
      />
      <button class="input-block__button" @click="addTodo">
        <!-- -->
        Add Todo
      </button>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import uniFetch from './functions/UniFetch';

export default {
  name: 'App',

  components: {
    TodoList,
  },

  data: function() {
    return {
      todos: [],
      newTodo: '',
    };
  },

  methods: {
    async addTodo() {
      if (this.newTodo) {
        try {
          const res = await uniFetch('/add', 'POST', undefined, {
            title: this.newTodo,
          });
          this.newTodo = '';
          this.todos = res.state;
        } catch (error) {
          console.log(error);
        }
      } else console.log('Error: empty field');
    },

    async deleteTodo(id) {
      try {
        const res = await uniFetch('/delete', 'DELETE', undefined, { id });
        this.todos = res.state;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted: async function() {
    this.todos = await uniFetch();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-block {
  margin-top: 30px;
}
.input-block__field {
  border: 0px;
  outline: none;
  border-radius: 10px;
  margin-right: 32px;
  padding: 10px 14px;
  box-shadow: 0px 0px 10px 0px #34343499;
}
.input-block__field:focus {
  box-shadow: 0px 0px 10px 0px #8a1f1f99;
}

.input-block__button {
  font-weight: 600;
  font-size: 16px;
  border: 0px;
  outline: none;
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0px 0px 10px 0px #34343499;
}
.input-block__button:active {
  transform: scale(0.98);
}
</style>
