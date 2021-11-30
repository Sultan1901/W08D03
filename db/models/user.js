const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "61a4f62b790dde2fc7000844",
  },
});
module.exports = mongoose.model("User", user);
