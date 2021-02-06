const db = require('../database');

class TodosSevice {
  async getAllTodos() {
    try {
      const todos = await db.todosDB.getAllTodos();
      return todos.rows
        .map((el) => ({
          id: el.id,
          timeStamp: el.time_stamp,
          title: el.title,
          checked: el.checked,
        }))
        .sort((a, b) => {
          return a.id - b.id;
        });
    } catch (error) {
      throw new Error(`Error in services with get all todos`);
    }
  }

  async addNewTodo(title) {
    try {
      const query = await db.todosDB.addNewTodo(title);
      return query;
    } catch (error) {
      throw new Error(
        `Can't create new Todo title: ${title}, SQL error: ${error}`
      );
    }
  }
  async changeChekedTodo(id) {
    try {
      const query = await db.todosDB.changeChekedTodo(id);
      return query;
    } catch (error) {
      throw new Error(`Can't change todo, id:${id}, SQL error: ${error}`);
    }
  }
  async deleteTodoByID(id) {
    try {
      const query = db.todosDB.deleteTodoByID(id);
      return query;
    } catch (error) {
      throw new Error(`Can't delete todo, id:${id}, SQL error: ${error}`);
    }
  }
}

module.exports = new TodosSevice();
