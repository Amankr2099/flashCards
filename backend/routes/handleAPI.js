const express = require('express')
const router = express.Router()
const {
    showCard,
    addCard,
    deleteCard
} = require("../controllers/routeController")

router.get("/", showCard)

router.post("/add", addCard)

router.delete("/delete/:id", deleteCard)


module.exports = router 