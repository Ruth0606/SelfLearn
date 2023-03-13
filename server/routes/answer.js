const express=require("express")
const answerCon = require("../controllers/answer.js")


const router = express.Router()


router.route("/")
   .post(answerCon.addAns)


router.route("/:id")
    .delete(answerCon.deleteAns)
    .put(answerCon.updateAns)
    .get(answerCon.getCorrectAnswerByIdQuestion)
router.route("/byidquestion/:id")
    .get(answerCon.getAllAnswersByIdQuestion)
router.route("/correctanswer")
    .post(answerCon.addCorrAns)
router.route("/correctanswer/:id")
    .delete(answerCon.deleteCorrAns)
    .put(answerCon.updateCorrAns)
    
module.exports=router
