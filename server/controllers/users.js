const StudentDal=require("../dal/users"); 
const { visits_students } = require("../models");
const jwt= require('jsonwebtoken')
// const { students } = require("../models");

class UserController{
  register=(req, res) => 
  {
    console.log(req.body.id)
    if (!req.body.id ||!req.body.password||!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    StudentDal.register(req.body)
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
  login=async(req,res)=>
  {
    const id=req.params.id
    const password=req.params.password
    const user=await StudentDal.login(id,password);
    res.send(user);
  }

  getAll = async(req,res)=>
  {
     res.send(await StudentDal.getAll());
  }

  getAllByParam=(req,res)=>
  {
    const param = req.query.idstudent;
    StudentDal.getAllByParam(param)
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

  get=(req,res)=>
  {
   // res.send(await StudentDal.getStudentById(req.params.id));
   const id = req.params.id;
     StudentDal.getStudentById(id)
     .then(data => {
       if (data) {
         res.send(data);
       } else {
         res.status(404).send({
           message: `Cannot find Student with id=${id}.`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Student with id=" + id
       });
     });
  }

  update=(req,res)=>
  {
    const id=req.params.id
    const user=req.body
    StudentDal.updateById(id,user)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${req.params.id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + req.params.id
      });
    });

  }

  Delete=(req,res)=>
  {
    //res.send(await StudentDal.delete(req.params.id));
    const id = req.params.id;

      StudentDal.delete(id)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Student with id=" + id
        });
      });
  }

  getByIdVisit=(req,res)=>{
    {
      const id = req.params.id;
   
      console.log(id)
        StudentDal.getByIdVisit(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Visit with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Student with id=" + id
          });
        });
     }
  }

  getByIdStudent=(req,res)=>{
    const param = req.query.idstudent;
    console.log(param)
    StudentDal.getByIdStudent(param)
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
  getLevelsofStudent=(req,res)=>
  {
    const idS = req.query.idstudent;

    StudentDal.getLevelsofStudent(idS)
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
  addVisit =  (req, res) => 
  {
    // if (!req.body.id) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    StudentDal.addVisit(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Visit."
        });
      });  
  }
  // getLevelsByIdStudent=(req,res)=>
  // {
  //     const idL = req.params.id;
  //     StudentDal.getLevelsByIdStudent(idL)
  //     .then(data => {
  //         res.send(data)
  //     //  res.send({"vi.id":data[0]["answer.idanswer"],"Answer.description":data[0]["answer.description"]});
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while retrieving Answer."
  //       });
  //     });
  // } 
}
const user=new UserController()
module.exports = user
