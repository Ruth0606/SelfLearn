const db = require("../models/index");
const Question = db.questions;
const Test = db.tests;
const Answer = db.answers;
const Subject = db.subjects;
const { Op } = require("sequelize");
const levels = require("../models/levels");
const subsubjects = require("../models/subsubjects");
const { subjects } = require("../models/index");
class QuestionsDataAccessor {
  async addQ(ques) {
    const description = ques.description;
    const idlevel = ques.idlevel;
    const idsubject = ques.idsubject;
    const score = ques.score;
    const idquestion_type = ques.idquestion_type;
    return await Question.create({
      description,
      idlevel,
      idsubject,
      idquestion_type,
      score,
    });
  }
  ////////////////////////////
  async getQByTypeAndIdSubject(type, id) {
    const quest = await Question.findAll({
      where: {
        [Op.and]: [{ idquestion_type: type }, { idsubject: id }],
      },
    });

    const questionWithAnswers = await Promise.all(
      quest.map(async (q) => {
        const condition = q.dataValues.idquestion
          ? { idquestion: { [Op.eq]: q.dataValues.idquestion } }
          : null;


        const answers = await Answer.findAll({ where: condition });
        return { ...q.dataValues, answers };
      })
    );

    console.log({ questionWithAnswers });

    return questionWithAnswers;
  }
  async getQByTypeAndIdLevel(type, id) {
    const quest = await Question.findAll({
      // plain: true,
      where: {
        [Op.and]: [{ idquestion_type: type }, { idlevel: id }],
      },
    });
    // console.log({ quest });

    const questionWithAnswers = await Promise.all(
      quest.map(async (q) => {
        const condition = q.dataValues.idquestion
          ? { idquestion: { [Op.eq]: q.dataValues.idquestion } }
          : null;


        const answers = await Answer.findAll({ where: condition });
        return { ...q.dataValues, answers };
      })
    );


    return questionWithAnswers;
  }
  updateQById(id, ques) {
    return Question.update(ques, {
      where: { idquestion: id },
    });
  }
  async deleteQ(id) {
    return Question.destroy({
      where: { idquestion: id },
    });
  }
  async getQuestionById(id) {
    console.log(id);
    return await Question.findByPk(id);
  }

  ///////////////////////////////test
  async addTest(test) {
    const idstudent = test.idstudent;
    const mark = test.mark;
    const date = test.date;
    const file = test.file;
    const idquestion_type = test.idquestion_type;
    const idlevel = test.idlevel;
    const idsubject = test.idsubject;
    return await Test.create({
      idstudent,
      mark,
      date,
      file,
      idquestion_type,
      idlevel,
      idsubject,
    });
  }
  async getAll() {
    const tests = await Test.findAll();
    console.log(tests.every((test) => test instanceof Test)); // true
    console.log("All tests:", JSON.stringify(tests, null, 2));
    return tests;
  }
  updateTestById(id, test) {
    return Test.update(test, {
      where: { idtest: id },
    });
  }
  getMarkbyId(id) {
    return Test.findByPk(id);
  }
  async deleteTest(id) {
    return Test.destroy({
      where: { idtest: id },
    });
  }
  getTestByIdStudent(param) {
    var condition = param ? { idstudent: { [Op.like]: `%${param}%` } } : null;
    return Test.findAll({ where: condition })
}
///////////////////////
getTestBybyStudAndSubject(paramId,paramSub){
    var condition1 = paramId ? { idstudent: { [Op.like]: `%${paramId}%` } } : null;
    var condition2 = paramSub ? { idsubject: { [Op.like]: `%${paramSub}%` } } : null;
    return Test.findAll({ where: condition1 && condition2})
}
///////////////////////
async getTestByIdSubject(idS)
{
    const quest= await Test.findOne({
    where: {
        [Op.and]: [
            { idquestion_type: 2 },
            { idsubject: idS }
            ]

    }
    });

    return(quest)
}
getLevelTestsByIdStudent(id)
{
    return Test.findAll({
      where: {
        idstudent: id,
        idquestion_Type: 1,
      },
      include: [
        {
          model: db.levels,
          attributes: ["description"],
          include: [
            {
              model: db.subsubjects,
              attributes: ["description"],
              include: [{ model: db.subjects, attributes: ["description"] }],
            },
          ],
        },
      ],
      raw: true,
      attributes: ["idtest", "mark"],
    });
  }
  getSubjectsTestsByIdStudent(id) {
    return Test.findAll({
      include: { model: db.subjects, attributes: ["description"] }, //'idsubject',
      where: { idstudent: id, idquestion_Type: 2 },
      raw: true,
      attributes: ["idtest", "mark"],
    });
  }
}

const questionsDataAccessor = new QuestionsDataAccessor();

module.exports = questionsDataAccessor;
