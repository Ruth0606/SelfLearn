const express=require("express")
const dataCon = require("../controllers/data")
// import {register,login} from "../controllers/users.js"

const router = express.Router()


    router.route("/class/:id")
        .delete(dataCon.deleteClassById)
        .put(dataCon.updateClass)
    router.route("/class")
        .post(dataCon.addClass)
        .get(dataCon.getAllClasses)

    router.route("/subject/:id")
        .delete(dataCon.deleteSubjectById)
        .put(dataCon.updateSubject)
    
    router.route("/subject/:idclass")
        .get(dataCon.getByIdClass)
    router.route("/subject")
        .post(dataCon.addSubject)
        .get(dataCon.getAllSubjects)

    router.route("/subsubject/:id")
        .get(dataCon.getByIdSubject)
        .put(dataCon.updateSubsubject)
        .delete(dataCon.deleteSubsubjectById)
    router.route("/subsubject")
        .post(dataCon.addSubsubject)

    router.route("/level/:id")
        .get(dataCon.getByIdSubsubject)
        .put(dataCon.updateLevel)
        .delete(dataCon.deleteLevelById)
    router.route("/level")
        .post(dataCon.addLevel)

module.exports=router


