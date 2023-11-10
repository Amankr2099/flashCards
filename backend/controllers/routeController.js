const Card = require('../models/cardModel')


//get all cards
const showCard = async (req, res) => {
    const card_item = await Card.find({})
    res.send(card_item)
}

//add cards
const addCard = async (req, res) => {
    const parsed_question = req.body.question
    const parsed_answer = req.body.answer

    try {
        const card = new Card({ question: parsed_question, answer: parsed_answer })
        await card.save()
        res.send("Card added")
    } catch (err) {
        res.send(err)
    }
}

//delete cards
const deleteCard = async (req, res) => {
    try {
        await Card.findByIdAndDelete(req.params.id)
        res.send("One card deleted")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    showCard,
    addCard,
    deleteCard
}