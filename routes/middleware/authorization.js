const roleModel = require('./../../db/models/role')

const authorization = async (req ,res )=>{
    try {
        const roleId = req.sultan.role
        const result = await roleModel.findById(roleId)

        next()
        
    } catch (error) {
        res.status(403).json(error)
        
    }
}
module.exports = authorization