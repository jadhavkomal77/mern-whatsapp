const user = require("../controllers/user.controller")
const router = require("express").Router()
router.post("/update", user.updateProfile)

module.exports = router