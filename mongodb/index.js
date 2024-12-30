import express from "express"
import mongoose, { mongo } from "mongoose"
const PORT = 8888
const mongoURL = "mongodb://localhost:27017/demo"

mongoose.connect(mongoURL)
.then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const app = express()

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
})

mongoose.model("user", userSchema)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})