const services = require('../services');
class TodosController {
  async getAllTodos(req, res) {
    try {
      const todos = await services.todosSevice.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ massage: String(error) });
    }
  }

  async addNewTodo(req, res) {
    try {
      const { title } = req.body;
      await services.todosSevice.addNewTodo(title);
      const state = await services.todosSevice.getAllTodos();
      res.status(201).json({
        message: `New Todo added successfully. {title: ${title}}`,
        state,
      });
    } catch (error) {
      res.status(500).json({ message: String(error) });
    }
  }
  async changeCheckedTodo(req, res) {
    try {
      const { id } = req.body;
      await services.todosSevice.changeChekedTodo(id);
      res.status(200).json({ message: `Todo updated successfully. id:${id}` });
    } catch (error) {
      res.status(500).json({ message: String(error) });
    }
  }
  async deleteTodoByID(req, res) {
    try {
      const { id } = req.body;
      await services.todosSevice.deleteTodoByID(id);
      const state = await services.todosSevice.getAllTodos();
      res
        .status(200)
        .json({ message: `Todo deleted successfully, id:${id}`, state });
    } catch (error) {
      res.status(500).json({ message: String(error) });
    }
  }
}

module.exports = new TodosController();
