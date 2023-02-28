const express = require("express");
const router = express.Router();
const {
  readTask,
  addTask,
  deleteTask,
} = require("../controller/task.controller");


// crate task 
router.post('/add/task', addTask)
// read task
router.get("/read/task", readTask);
// read task
router.delete("/:id", deleteTask);


module.exports = router;
