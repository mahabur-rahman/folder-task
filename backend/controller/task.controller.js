const TaskModel = require("../models/task.model");

// create task
const addTask = async (req, res) => {
  const { text } = req.body;

  try {
    const task = await TaskModel.create({ text });

    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// get all  task
const readTask = async (req, res) => {
  try {
    const allTask = await TaskModel.find();

    return res.status(200).json(allTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// delete task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteTask = await TaskModel.findByIdAndDelete(id);

    return res.status(200).json(deleteTask);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  readTask,
  addTask,
  deleteTask,
};
