const express = require("express");
const { createTask, getTask, getTaskById } = require("../contoller/task");
const authentication = require("../contoller/../middleware/authentication")
const authorization = require("../contoller/../middleware/authorization");

const taskRouter = express.Router();
taskRouter.post("/createtask", authentication,createTask);
taskRouter.get("/gettask", authentication,authorization, getTask);
taskRouter.get("/gettaskid/:id", authentication, authorization, getTaskById);

module.exports = taskRouter ;

