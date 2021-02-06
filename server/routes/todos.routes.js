const express = require('express');
const router = express.Router();
const { todosController } = require('../controllers');

router.get('/', todosController.getAllTodos);
router.post('/add', todosController.addNewTodo);
router.put('/changeChecked', todosController.changeCheckedTodo);
router.delete('/delete', todosController.deleteTodoByID);

module.exports = router;
