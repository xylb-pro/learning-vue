<template>
  <div class="todo">
    <div class="todo-el index">{{ index }}</div>
    <div
      v-bind:class="{ checked: todo.checked }"
      class="todo-el title"
      @click="$emit('delete-todo', todo.id)"
    >
      {{ todo.title }}
    </div>
    <div v-bind:class="{ checked: todo.checked }" class="todo-el time-stamp">
      {{ getDate(todo.timeStamp) }}
    </div>
    <div class="todo-el checkbox">
      <input
        type="checkbox"
        v-model="todo.checked"
        @change="$emit('change-checked', todo.id)"
        style="cursor: pointer"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    getDate(timeStamp) {
      console.log('q');
      const humanFormatDate = new Date(+timeStamp);
      const year = humanFormatDate.getFullYear();
      const month = humanFormatDate.getMonth() + 1;
      const date = humanFormatDate.getDate();
      const hour = humanFormatDate.getHours();
      const min = humanFormatDate.getMinutes();
      const sec = humanFormatDate.getSeconds();
      const desiredFormat = `${date < 10 ? '0' + date : date}/${
        month < 10 ? '0' + month : month
      }/${year} ${hour < 10 ? '0' + hour : hour}:${
        min < 10 ? '0' + min : min
      }:${sec < 10 ? '0' + sec : sec}`;
      return desiredFormat;
    },
  },
};
</script>

<style>
.todo {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
}
.todo:first-child {
  margin-top: 0px;
}
.todo-el {
  margin-right: 10px;
}
.todo-el:last-child {
  margin: 0;
}
.index {
}
.title {
  text-align: left;
  min-width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  cursor: pointer;
  position: relative;
}
.checked {
  text-decoration: line-through;
}
/* .title::before {
  content: '';
} */
.checkbox {
}
.time-stamp {
}
</style>
