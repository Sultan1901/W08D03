const express = require("express");
const { createTask, getTask } = require("../contoller/task");
const taskRouter = express.Router();
taskRouter.post("/createtask", createTask);
taskRouter.get("/gettask", getTask);
module.exports = taskRouter ;
