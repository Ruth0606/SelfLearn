const DataDal=require("../dal/data"); 
const { classes } = require("../models");

class dataController
{
///////////////////////////////////////////class
    addClass=(req,res)=>
    {
        if (!req.body.description) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }
          DataDal.addClass(req.body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Class."
              });
            });
    }
    deleteClassById=(req,res)=>
    {
      const id = req.params.id;
  
      DataDal.deleteClassById(id)
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Class was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Class with id=${id}. Maybe Class was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Class with id=" + id
          });
        });
    }
     getAllClasses=async(req,res)=>
    {
      res.send(await DataDal.getAllClasses());
    }


  updateClass=(req,res)=>
  {
    const id=req.params.id
    const class2=req.body
    console.log(id)
    console.log(class2)
    DataDal.updateClassById(id,class2)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Class was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Class with id=${req.params.id}. Maybe Class was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Class with id=" + req.params.id
      });
    });

  }

////////////////////////////////////////////////subject
    deleteSubjectById=(req,res)=>
    {
      const id = req.params.id;
  
      DataDal.deleteSubjectById(id)
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Subject was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Subject with id=${id}. Maybe Subject was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Subject with id=" + id
          });
        });
    }

    addSubject=(req,res)=>
    {
        if (!req.body.description) {
            res.status(400).send({
              message: "Content can not be empty!"
            });
            return;
          }
          DataDal.addSubject(req.body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Class."
              });
            });
    }
    getAllSubjects=async(req,res)=>
    {
      res.send(await DataDal.getAllSubjects());
    }

    getByIdClass=(req,res)=>
    {
    const idclass = req.params.idclass;
    console.log(idclass)
    DataDal.getByIdClass(idclass)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subject."
      });
    });
  } 
  updateSubject=(req,res)=>
  {
    const id=req.params.id
    const subject=req.body
    console.log(id)
    console.log(subject)
    DataDal.updateSubjectById(id,subject)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Subject was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Subject with id=${req.params.id}. Maybe Class was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Subject with id=" + req.params.id
      });
    });

  }
///////////////////////////////////////////////subsubject
addSubsubject=(req,res)=>
{
    if (!req.body.description) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      DataDal.addSubsubject(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the subsubject."
          });
        });
}

getByIdSubject=(req,res)=>
    {
    const idSubject = req.params.id;
    console.log(idSubject)
    DataDal.getByIdSubject(idSubject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subsubject."
      });
    });
  } 

  updateSubsubject=(req,res)=>
  {
    const id=req.params.id
    const subsubject=req.body
    console.log(id)
    console.log(subsubject)
    DataDal.updateSubsubjectById(id,subsubject)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Subsubject was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Subsubject with id=${req.params.id}. Maybe Class was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Subsubject with id=" + req.params.id
      });
    });

  }
  deleteSubsubjectById=(req,res)=>
    {
      const id = req.params.id;
  
      DataDal.deleteSubsubjectById(id)
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Subsubject was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Subsubject with id=${id}. Maybe Subject was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Subsubject with id=" + id
          });
        });
    }
  ///////////////////////////////////////////level
  addLevel=(req,res)=>
  {
      if (!req.body.description) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
        DataDal.addLevel(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the level."
            });
          });
  }
  getByIdSubsubject=(req,res)=>
    {
    const idSubsubject = req.params.id;
    console.log(idSubsubject)
    DataDal.getByIdSubsubject(idSubsubject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subsubject."
      });
    });
  } 
updateLevel=(req,res)=>
  {
    const id=req.params.id
    const level=req.body
    console.log(id)
    console.log(level)
    DataDal.updateLevelById(id,level)
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Level was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Level with id=${req.params.id}. Maybe Class was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Level with id=" + req.params.id
      });
    });

  }
  deleteLevelById=(req,res)=>
  {
    const id = req.params.id;

    DataDal.deleteLevelById(id)
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Level was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Level with id=${id}. Maybe Subject was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Level with id=" + id
        });
      });
  }
  getAllData=async(req,res)=>
  {
   
      res.send(await DataDal.getAllData());
    
  }

}

const dataDataAccessor = new dataController();

module.exports = dataDataAccessor;