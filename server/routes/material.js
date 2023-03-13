const express=require("express")
const materialCon = require("../controllers/material.js")

const router = express.Router()

router.route("/:id")
    .delete(materialCon.Delete)
    .put(materialCon.update)
    .get(materialCon.getByIdLevel)

// router.route("/byidlevel/:id")
//     .get(materialCon.getByIdLevel)

router.route("/")
    .post(materialCon.add)

module.exports=router
