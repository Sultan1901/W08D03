const taskModel = require("../../db/models/task");
const createTask = (req, res) => {
  const { name } = req.body;
  const newTask = new taskModel({
    name,
    userId:req.token.id
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
    .find({userId:req.token.id,isDel:false})
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

const deleteTask = (req, res) => {
  const { id } = req.params;

  taskModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const adminDelete = (req, res) => {
  const { id } = req.params;

  taskModel
    .findByIdAndRemove(id)
    .exec()
    .then((result) => {
      res.status(200).json("Deleted");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const updateTask = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  taskModel
    .findByIdAndUpdate(id, { $set: { name: name } })
    .then((result) => {
      if (result) {
        res.status(200).json("updated");
      } else {
        res.status(404).json(err);
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  createTask,
  getTask,
  getTaskById,
  deleteTask,
  updateTask,
  adminDelete,
};
