const db=require("../models/index")
const Classes=db.classes
const Subjects=db.subjects
const Subsubjects=db.subsubjects
const Levels=db.levels
const { Op } = require("sequelize");
class ClassDataAccessor {
    /////////////////////////////class
    async addClass(class2)
    {
       const description = class2.description;      
       return  await Classes.create({description})
    }
    deleteClassById(id)
    {
        return Classes.destroy({
            where: { idclass: id }
          })
    }
    async getAllClasses(){
        //{order:[['description','DESC']]}
        const classes = await Classes.findAll({order:[['description','ASC']]});
        console.log(classes.every(class1 => class1  instanceof Classes)); // true
        console.log("All classes:", JSON.stringify(classes, null, 2));
        return(classes)
    } 
    updateClassById(id,class2)
    {
        return Classes.update(class2, {
            where: { idclass: id }
          })
    }
////////////////////////////////////subject
    deleteSubjectById(id)
    {
        return Subjects.destroy({
            where: { idsubject: id }
          })
    }
    async addSubject(subject2)
    {
        console.log(subject2)
       const description = subject2.description; 
       const passing_grade=subject2.passing_grade;
       const idclass=subject2.idclass;
       return await Subjects.create({description,idclass,passing_grade})
    }
    async getAllSubjects(){
        const subjects = await Subjects.findAll({order:[['description','ASC']]});
        console.log(subjects.every(subjects => subjects  instanceof Subjects)); // true
        console.log("All subjects:", JSON.stringify(subjects, null, 2));
        return(subjects)
    }

    async getByIdClass(idclass){
        var condition = idclass ? { idclass: { [Op.like]: `%${idclass}%` } } : null;

        return await Subjects.findAll({ where: condition ,order:[['description','ASC']]})
    }
    updateSubjectById(id,subject)
    {
        return Subjects.update(subject, {
            where: { idsubject: id }
          })
    }
    /////////////////////////subsubject
    async addSubsubject(subsubject)
    {
       const description = subsubject.description;
       const idsubject  =subsubject.idsubject    
       return  await Subsubjects.create({description,idsubject})
    }
    async getByIdSubject(idsubject){
        var condition = idsubject ? { idsubject: { [Op.like]: `%${idsubject}%` } } : null;

        return await Subsubjects.findAll({ where: condition ,order:[['description','ASC']]})
    }
    updateSubsubjectById(id,subsubject)
    {
        return Subsubjects.update(subsubject, {
            where: { idsubsubject: id }
          })
    }
    deleteSubsubjectById(id)
    {
        return Subsubjects.destroy({
            where: { idsubsubject: id }
          })
    }
    //////////////////////////////level
    async addLevel(level)
    {
       const description = level.description;
       const idsubsubject  =level.idsubsubject    
       return  await Levels.create({description,idsubsubject})
    }
    async getByIdSubsubject(idsubsubject){
        var condition = idsubsubject ? { idsubsubject: { [Op.like]: `%${idsubsubject}%` } } : null;

        return await Levels.findAll({ where: condition ,order:[['description','ASC']]})
    }
    updateLevelById(id,level)
    {
        return Levels.update(level, {
            where: { idlevel: id }
          })
    }
    deleteLevelById(id)
    {
        return Levels.destroy({
            where: { idlevel: id }
          })
    }
}
const classDataAccessor = new ClassDataAccessor();

module.exports = classDataAccessor;