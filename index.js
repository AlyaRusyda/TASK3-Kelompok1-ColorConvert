const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const colorRoutes = require('./routes/color')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/color', colorRoutes)

app.listen(8000, () => {
    console.log("Server run on port 8000");
})