const db=require("../models/index")
const Material=db.materials
const { Op } = require("sequelize");
class MaterialDataAccessor {

    async add(mat)
    { 
        const idlevel=mat.idlevel
        const description=mat.description
       return await Material.create({idlevel,description})
    }

    async delete(id)
    {
       return Material.destroy({
            where: { idmaterial: id }
          })
    }

    updateById(id,mat)
    {
        return Material.update(mat, {
            where: { idmaterial: id }
          })
    }

    getByIdLevel(idlevel)
    {
        var condition = idlevel ? { idlevel: { [Op.like]: `%${idlevel}%` } } : null;
        return Material.findAll({ where: condition })
    }
}

const materialDataAccessor = new MaterialDataAccessor();

module.exports = materialDataAccessor;