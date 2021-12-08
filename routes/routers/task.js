const express = require("express");
const {
  createTask,
  getTask,
  getTaskById,
  deleteTask,
  updateTask,
  adminDelete,
} = require("../contoller/task");
const authentication = require("../contoller/../middleware/authentication")
const authorization = require("../contoller/../middleware/authorization");

const taskRouter = express.Router();
taskRouter.post("/createtask",authentication, createTask);
taskRouter.get("/gettask", authentication, getTask);
taskRouter.get("/gettaskid/:id", authentication, authorization, getTaskById);
taskRouter.delete("/delTask/:id", authentication,deleteTask);
taskRouter.delete("/adminDelete/:id", authentication,authorization, adminDelete);

taskRouter.put("/updateTask/:id", authentication, authorization, updateTask);


;
module.exports = taskRouter ;

