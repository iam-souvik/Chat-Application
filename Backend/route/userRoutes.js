const express = require("express")
const { RegisterUsers, LoginUser } = require("../controllers/userControllers")

const router = express.Router()

router.route("/").post(RegisterUsers )
router.post("/login",LoginUser)

module.exports = router