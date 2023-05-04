const express=require("express")
const questCon = require("../controllers/questions.js")

// import {register,login} from "../controllers/users.js"

const router = express.Router()



//router.delete("/",loginCon.Delete)
router.route("/test/byStudent")
    .get(questCon.getTestByIdStudent) 
router.route("/test/byStudAndSubject")
    .get(questCon.getTestBybyStudAndSubject) 
router.route("/")
    .post(questCon.addQ)
router.route("/test")
    .get(questCon.getAll)
    .post(questCon.addTest)
    // .post(questCon.addQ)

router.route("/:id")
    .get(questCon.getQuestionById)
    .put(questCon.updateQ)
    .delete(questCon.DeleteQ)
router.route("/test/getTestByIdSubject")   
    .get(questCon.getTestByIdSubject)
router.route("/test/getLevelTestsByIdStudent")
    .get(questCon.getLevelTestsByIdStudent)
router.route("/test/getSubjectsTestsByIdStudent")
    .get(questCon.getSubjectsTestsByIdStudent) 
    
router.route("/test/getCountTestsforSubject")   
    .get(questCon.getCountTestsforSubject)
 
router.route("/test/:id")
    .get(questCon.getMark)
    .put(questCon.updateTest)
    .delete(questCon.deleteTest)
    
router.route("/:idquestion_type/:id")
    .get(questCon.getQByTypeAndId)

    
   
router.route("/test/mark")
//    .post(questCon.addMark)





 //export default router
module.exports=router


    // .get(questCon.get)
    // .get(questCon.getAll)