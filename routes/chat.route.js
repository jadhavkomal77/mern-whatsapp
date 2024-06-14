const chat = require("../controllers/chat.controller")
const router = require("express").Router()
router
    .post("/send", chat.sendMessage)
    .get("/contacts", chat.contacts)
    .post("/create-group", chat.createGroup)
    .get("/:id", chat.getMessages)

module.exports = router