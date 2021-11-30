const express = require("express");
const {
  createTask,
  getTask,
  getTaskById,
  deleteTask,
  updateTask,
} = require("../contoller/task");
const authentication = require("../contoller/../middleware/authentication")
const authorization = require("../contoller/../middleware/authorization");

const taskRouter = express.Router();
taskRouter.post("/createtask", authentication,createTask);
taskRouter.get("/gettask", authentication,authorization, getTask);
taskRouter.get("/gettaskid/:id", authentication, authorization, getTaskById);
taskRouter.delete("/delTask/:id", authentication, authorization, deleteTask);
taskRouter.put("/updateTask/:id", authentication, authorization, updateTask);


;
module.exports = taskRouter ;

