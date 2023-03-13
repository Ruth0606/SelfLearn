const MaterialDal=require("../dal/material.js"); 

class Material{
    add = async (req, res) => {

        // if (!req.body.description) {
        //     res.status(400).send({
        //       message: "Content can not be empty!"
        //     });
        //     return;
        //   }

          MaterialDal.add(req.body)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the material."
              });
            });
        }
    update=(req,res)=>
        {
          const id=req.params.id
          const mat=req.body
          MaterialDal.updateById(id,mat)
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Material was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Material with id=${req.params.id}. Maybe Material was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Material with id=" + req.params.id
            });
          });
      
        }
      
     Delete=(req,res)=>
        {
          const id = req.params.id;
      
          MaterialDal.delete(id)
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Material was deleted successfully!"
                });
              } else {
                res.send({
                  message: `Cannot delete Material with id=${id}. Maybe Student was not found!`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Could not delete Student with id=" + id
              });
            });
        }

      getByIdLevel=(req,res)=>
      {
        const idLevel = req.params.id;
        MaterialDal.getByIdLevel(idLevel)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving material."
          });
        });
      }

  }


const material=new Material()
module.exports = material