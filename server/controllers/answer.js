const AnswerDal=require("../dal/answer"); 
const { corrects_anses } = require("../models");

class Answer
{
    addAns = async (req, res) => {
        AnswerDal.addAns(req.body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Answer."
              });
            });
        }
    deleteAns=(req,res)=>
    {
        const id = req.params.id;
        AnswerDal.deleteAns(id)
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Answer was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Answer with id=${id}. Maybe Answer was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Answer with id=" + id
            });
        });
    }
    updateAns=(req,res)=>
        {
          const id=req.params.id
          const answer=req.body
          console.log(id)
          console.log(answer)
          AnswerDal.updateAnsById(id,answer)
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Answer was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Answer with id=${req.params.id}. Maybe Answer was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Answer with id=" + req.params.id
            });
          });
      
        }
    getCorrectAnswerByIdQuestion=(req,res)=>
    {
        const idQ = req.params.id;
        AnswerDal.getCorrectAnswerByIdQuestion(idQ)
        .then(data => {
            //res.send(data)
          res.send({"Answer.id":data[0]["answer.idanswer"],"Answer.description":data[0]["answer.description"]});
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Answer."
          });
        });
    } 
    getAllAnswersByIdQuestion=(req,res)=>
    {
      console.log("hg")
      const Idquestion = req.params.id;
      AnswerDal.getAllAnswersByIdQuestion(Idquestion)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students."
        });
      });
    }
    /////////////////////////////////
    addCorrAns = async (req, res) => {
      AnswerDal.addCorrAns(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the CorrectAnswer."
            });
          });
      }
    deleteCorrAns=(req,res)=>
    {
        const id = req.params.id;
        AnswerDal.deleteCorrAns(id)
        .then(num => {
            if (num == 1) {
            res.send({
                message: "CorrectAnswer was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete CorrectAnswer with id=${id}. Maybe CorrectAnswer was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete CorrectAnswer with id=" + id
            });
        });
    }
    updateCorrAns=(req,res)=>
        {
          const id=req.params.id
          const corranswer=req.body
          AnswerDal.updateCorrAnsById(id,corranswer)
          .then(num => {
            if (num == 1) {
              res.send({
                message: "CorrectAnswer was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update CorrectAnswer with id=${req.params.id}. Maybe CorrectAnswer was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating CorrectAnswer with id=" + req.params.id
            });
          });
      
        }
}
const answer=new Answer()
module.exports = answer
