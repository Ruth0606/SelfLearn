const QuestionDal=require("../dal/questions"); 

class Questions{
    addQ = async (req, res) => {

        if (!req.body.description) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }
          QuestionDal.addQ(req.body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Student."
              });
            });
        }


updateQ=(req,res)=>
{
  const id=req.params.id
  const quest=req.body
  QuestionDal.updateQById(id,quest)
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Question was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Question with id=${req.params.id}. Maybe Question was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Question with id=" + req.params.id
    });
  });

}


DeleteQ=(req,res)=>
        {
          const id = req.params.id;
      
          QuestionDal.deleteQ(id)
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Question was deleted successfully!"
                });
              } else {
                res.send({
                  message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Could not delete Question with id=" + id
              });
            });
        }
   getQuestionById=(req,res)=>
      {
      const id = req.params.id;
     QuestionDal.getQuestionById(id)
     .then(data => {
       if (data) {
         res.send(data);
       } else {
         res.status(404).send({
           message: `Cannot find Question with id=${id}.`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Question with id=" + id
       });
     });
          
      }

//קבלת שאלות לתרגול
///////////////////////////////////
getQByTypeAndId=(req,res)=>{
    // const type = req.params.idquestiontype;
    // const class_scubject = req.params.idclasssubject;
   
    // QuestionDal.getQByTypeAndClassSubject(type,class_scubject)
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving tutorials."
    //     });
    //   });
    const id= req.params.id;
    const idquestion_type = req.params.idquestion_type;
    if(idquestion_type==2)
    {
      QuestionDal.getQByTypeAndIdSubject(idquestion_type,id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {0.
          
          res.status(404).send({
            message: `Cannot find Question with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Question with id=" + id
        });
      });
    }
    else
    {
      QuestionDal.getQByTypeAndIdLevel(idquestion_type,id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {0.
          
          res.status(404).send({
            message: `Cannot find Question with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Question with id=" + id
        });
      });
    }
}

//////////////////////////////marks

getMark=(req,res)=>
  {
   const id = req.params.id;
   console.log(id)
   QuestionDal.getMarkbyId(id)
     .then(data => {
       if (data) {
         res.send(data);
       } else {
         res.status(404).send({
           message: `Cannot find Question with id=${id}.`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Question with id=" + id
       });
     });
  }
  addTest =  (req, res) => {
      QuestionDal.addTest(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Test."
          });
        });
    }
    getAll = async(req,res)=>
    {
      res.send(await QuestionDal.getAll());
    }

    updateTest=(req,res)=>
    {
      const id=req.params.id
      const test=req.body
      QuestionDal.updateTestById(id,test)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Test was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Test with id=${req.params.id}. Maybe Material was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Test with id=" + req.params.id
        });
      });
  
    }
    deleteTest=(req,res)=>
        {
          const id = req.params.id;
          QuestionDal.deleteTest(id)
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Test was deleted successfully!"
                });
              } else {
                res.send({
                  message: `Cannot delete Test with id=${id}. Maybe Student was not found!`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Could not delete Test with id=" + id
              });
            });
        }
      getTestByIdStudent=(req,res)=>{
        const param = req.query.idstudent;
        console.log(param)
        QuestionDal.getTestByIdStudent(param)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Test."
          });
        });
      }
      /////////////////////////
      getTestBybyStudAndSubject=(req,res)=>{
        const paramId = req.param.idstudent;
        const paramSub = req.param.idsubject;
        QuestionDal.getTestBybyStudAndSubject(paramId,paramSub)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Test."
          });
        });
      }
      /////////////////////////////
      getTestByIdSubject=(req,res)=>
      {
        const idS = req.query.idsubject;

        QuestionDal.getTestByIdSubject(idS)
        .then(data => {
            res.send(data)
         // res.send({"Answer.id":data[0]["answer.idanswer"],"Answer.description":data[0]["answer.description"]});
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Test."
          });
        });
      }
      getLevelTestsByIdStudent=(req,res)=>
      {
        const idS = req.query.idstudent;

        QuestionDal.getLevelTestsByIdStudent(idS)
        .then(data => {
            res.send(data)
         // res.send({"Answer.id":data[0]["answer.idanswer"],"Answer.description":data[0]["answer.description"]});
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Test."
          });
        });
      }
      getSubjectsTestsByIdStudent=(req,res)=>
      {
        const idS = req.query.idstudent;

        QuestionDal.getSubjectsTestsByIdStudent(idS)
        .then(data => {
            res.send(data)
         // res.send({"Answer.id":data[0]["answer.idanswer"],"Answer.description":data[0]["answer.description"]});
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Test."
          });
        });
      }
      
}
const question=new Questions()
module.exports = question
