const roleModel = require("../../db/models/role");
const create = (req, res) => {
  const { role, permission } = req.body;
  const newRole = new roleModel({
    role,
    permission,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getRole = (req,res)=>{
  roleModel
  .find({})
  .then((result)=>{
    res.status(200).json(result)
  })
  .catch((err)=>{
    res.status(400).json(err)
  })
}
module.exports = {create,getRole}