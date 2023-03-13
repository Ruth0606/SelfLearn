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
    // async getQByTypeAndClassSubject(type,class_scubject)
    // {
    // //     var condition = type ? { idquestion_type: { [Op.like]: `%${type}%` } } : null;
    // //     var condition2 = class_scubject ? { idclass_subject: { [Op.like]: `%${class_scubject}%` } } : null;
    // //    return Question.findAll({ where: condition && condition2})
    //      const quest= await Question.findAll({
    //     where: {
    //         [Op.and]: [
    //             { idquestion_type: type },
    //             { idclass_subject: class_scubject }
    //           ]
    
    //     }
    //   });

    //    return(quest)
    // }



}


const materialDataAccessor = new MaterialDataAccessor();

module.exports = materialDataAccessor;