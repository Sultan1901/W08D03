const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SALT = Number(process.env.SALT);
const SECKEY = process.env.SECKEY;

const register = async (req, res) => {
  const { email, password, role } = req.body;
  const semail = email.toLowerCase();
  const hashpass = await bcrypt.hash(password, SALT);
  const newUser = new userModel({
    email: semail,
    password: hashpass,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then(async (result) => {
      if (result) {
        if (email === result.email) {
          console.log(result);
          const payload = {
            role: result.role,
          };

          const crackedhashpwd = await bcrypt.compare(
            password,
            result.password
          );

          if (crackedhashpwd) {
            const options = {
              expiresIn: "3600m",
            };

            const token = jwt.sign(payload, SECKEY, options);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("wrong email || password");
          }
        } else {
          res.status(400).json("wrong email || password");
        }
      } else {
        res.status(400).json("email does not ===> match our records");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { register, login };
