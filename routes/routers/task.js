const express = require("express");
const { createTask, getTask } = require("../contoller/task");
const authentication = require("../contoller/../middleware/authentication")
const authorization = require("../contoller/../middleware/authorization");

const taskRouter = express.Router();
taskRouter.post("/createtask", authorization, createTask);
taskRouter.get("/gettask", getTask);
module.exports = taskRouter ;
