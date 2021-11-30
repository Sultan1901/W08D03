const express = require('express')
const {
  register,
  login,
  deleteUser,
  updateUser,
} = require("./../contoller/user");

const userRouter = express.Router()
userRouter.post('/addusr', register)
userRouter.post("/login", login);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/updateUser/:id", updateUser);


module.exports = userRouter