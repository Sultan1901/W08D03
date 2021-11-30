const mongoose = require("mongoose");
const task = new mongoose.Schema({
  name: { type: String, required: true },
  isdel: { type: String, ref: "User" },
  userId: { type: String },
});
module.exports = mongoose.model("Task", task);
