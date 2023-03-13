const db=require("../models/index")
const Student=db.students
const Visit_student=db.visits_students
const Visits_levels=db.visits_levels 
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const { Op } = require("sequelize");
class StudentDataAccessor {
    async getAll()
    {
        const users = await Student.findAll();
        console.log(users.every(user => user instanceof Student)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
        return(users)
    }
    getAllByParam(param)
    {
        var condition = param ? { param: { [Op.like]: `%${param}%` } } : null;

        return students.findAll({ where: condition })
    }

     getStudentById(id)
    {
       return Student.findByPk(id)
    //  const users2= await Student.findOne({
    //     where: {
    //       idstudents: {
    //         [Op.eq]: id
    //       }
    //     }
    //   });

    //    return(users2)
    }
    async delete(id)
    {
       return Student.destroy({
            where: { idstudents: id }
          })
        // await Student.destroy({
        //     where: {
        //         idstudents: {
        //         [Op.eq]:id
        //       }
        //     }
        //   });
        //   return "delete sucsses";
    }
    async register(user)
    { 
        const name=user.name
        const grade=user.grade
        const mail=user.mail
        const phone=user.phone
        const id=user.id
        const password=user.password
        const ismanager=user.ismanager
        const hashedPwd = await bcrypt.hash(password, 10)
        return await Student.create({name,grade,mail,phone,id,password:hashedPwd,ismanager })
    }
    updateById(id,user)
    {
        return Student.update(user, {
            where: { idstudent: id }
          })
    }
    async login(id1,password1)
    {
        const found=await Student.findOne({
            where: {
                [Op.and]: [
                    { id:id1 },                 
                  ]
        
            }
          });
         console.log(req.user);

        const match = await bcrypt.compare(password1,found.password)
        if (match)
        {
            const userInfo= {id:found.id,name:found.username,
                grade:found.grade,mail:found.mail,phone:found.phone,ismanager:found.ismanager}
                //Create the token
                const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
                //res.setHeader('Authorization', `Bearer ${accessToken}`)
               return {accessToken:accessToken}
        }


        // return await Student.findAll({
        //     where: {
        //         [Op.and]: [
        //             { id:id1 },
        //             // { password:hashedPwd }
        //           ],
        //          match:true 
        //     }
        //   });
    }
    getByIdVisit(id){
        return Visit_student.findByPk(id)
    }
    getByIdStudent(param){
        var condition = param ? { idstudent: { [Op.like]: `%${param}%` } } : null;

        return Visit_student.findAll({ where: condition })
    }

    async addVisit(visit)
    { 
        const idstudent=visit.idstudent
        const enterdate=visit.enterdate
        const exitdate=visit.exitdate
        const idlevel=visit.idlevel
        await Visit_student.create({idstudent,enterdate,exitdate,idlevel})
    }
    getLevelsofStudent(id)
    {
        return Visit_student.findAll({
            where: {
                idstudent: id
            },
            include: [                                               
                  { model:db.visits_levels,attributes:[],
                        include:[{model:db.levels,attributes:['description'],
                            include:[{model:db.subsubjects,attributes:['description'],
                            include:[{model:db.subjects,attributes:['description']}]}]}]},   
       ],
       raw:true,
       attributes:[]
    })    

}
}
const studentDataAccessor = new StudentDataAccessor();

module.exports = studentDataAccessor;