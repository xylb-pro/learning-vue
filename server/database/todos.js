const connect = require('./connect');

class TodosDB {
  async getAllTodos() {
    const query = await connect.query('select * from "Todos"."Todos"');

    return query;
  }

  async addNewTodo(title) {
    const query = await connect.query(
      `INSERT INTO "Todos"."Todos" (time_stamp, title, checked) values ($1, $2, $3)`,
      [+new Date(), title, false]
    );
    return query;
  }

  async changeChekedTodo(id) {
    const query = await connect.query(
      `UPDATE "Todos"."Todos" set checked= NOT checked where id = $1`,
      [id]
    );
    return query;
  }
  async deleteTodoByID(id) {
    const query = await connect.query(
      `DELETE FROM "Todos"."Todos" WHERE id=$1`,
      [id]
    );
    return query;
  }
}

module.exports = new TodosDB();
