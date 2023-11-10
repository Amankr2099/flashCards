const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const handleAPI = require('./routes/handleAPI')
require('dotenv').config()

//mongodb connection
connectDB()

app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

//handle routes
app.use("/api/card", handleAPI)


app.listen(process.env.PORT, () => {
    console.log("Server initiated to ", process.env.PORT)
})