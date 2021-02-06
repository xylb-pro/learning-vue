<template>
  <div>
    <div class="todo-list">
      <div v-if="todos[0]">
        <TodoItem
          @delete-todo="$emit('delete-todo', todo.id)"
          @change-checked="changeChecked"
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          :index="index + 1"
        />
      </div>
      <div v-else>
        There is nothing here yet
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem';
import uniFetch from '../functions/UniFetch';

export default {
  name: 'TodoList',

  components: {
    TodoItem,
  },

  props: {
    todos: Array,
  },

  data() {
    return {};
  },

  methods: {
    async changeChecked(id) {
      try {
        await uniFetch('/changeChecked', 'PUT', undefined, { id });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.todo-list {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 15px;
  max-width: 500px;
  padding: 40px;
  background-color: rgb(250, 250, 250);
  box-shadow: 0px 0px 10px 0px #34343499;
}
</style>
