const taskModel = require("../../db/models/task");
const createTask = (req, res) => {
  const { name } = req.body;
  const newTask = new taskModel({
    name,
    
  });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getTask = (req, res) => {
  taskModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  taskModel
    .find({ _id: id, user: req.token.id })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json("task does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { createTask, getTask, getTaskById };
