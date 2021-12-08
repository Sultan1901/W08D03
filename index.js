const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
dotenv.config();
require("./db");

app.use(cors());
app.use(express.json());
app.use(express());
app.use(morgan("dev"));

const roleRouter = require("./routes/routers/role");
app.use(roleRouter);

const userRouter = require("./routes/routers/user");
app.use(userRouter);

const taskRouter = require("./routes/routers/task");
app.use(taskRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server work on ${PORT} `);
});
