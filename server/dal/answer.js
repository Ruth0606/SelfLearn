const db=require("../models/index")
const Answer=db.answers
const Corrects_anses=db.corrects_anses
const { Op } = require("sequelize");
const answers = require("../models/answers");
class AnswersDataAccessor {
    async addAns(answer)
    { 
        const idquestion=answer.idquestion
        const description=answer.description
        return await Answer.create({idquestion,description})
    }
    async deleteAns(id)
    {
       return Answer.destroy({
            where: { idanswer: id }
          })
    }
   async updateAnsById(id1,answer2)
    {
        console.log(id1)
        console.log(answer2)
        return await Answer.update(answer2, {
            where: {idanswer: id1 }
          })
    }
    getCorrectAnswerByIdQuestion(id)
    {
       // var condition = id ? { idquestion: { [Op.like]: `%${id}%` } } : null;
        return Corrects_anses.findAll({
            include:{model:db.answers,attributes:['idanswer','description']},//,as:"description"
            where: { idquestion: id },
           raw:true,
           attributes:[]

        })
    }
    getAllAnswersByIdQuestion(idquestion)
    {
        console.log(idquestion)
        var condition = idquestion ? { idquestion: { [Op.eq]: `%${idquestion}%` } } : null;
  
        return Answer.findAll({ where: condition })
    }
////////////////////////////////////
async addCorrAns(Corranswer)
    { 
        console.log("addCorrAns dal")
        const idquestion=Corranswer.idquestion
        const idanswer=Corranswer.idanswer
        return await Corrects_anses.create({idquestion,idanswer})
    }
    async deleteCorrAns(id)
    {
       return Corrects_anses.destroy({
            where: { idcorrect_ans: id }
          })
    }
    async updateCorrAnsById(id,corranswer)
    {
        return await Corrects_anses.update(corranswer, {
            where: {idcorrect_ans: id }
          })
    }
}


const answersDataAccessor = new AnswersDataAccessor();

module.exports = answersDataAccessor;