import express from "express"
import mongoose, { mongo } from "mongoose"
const PORT = 8888
const mongoURL = "mongodb://localhost:27017/demo2"

mongoose.connect(mongoURL)
.then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const app = express()

const userSchema = new mongoose.Schema({
    name: String,
    dep: String
})

const userModel = mongoose.model("users", userSchema)

app.get("/api/users", async(req, res) => {
    const users = await userModel.find()
    res.send(users)
})

app.get("/api/users/:id", async(req, res) => {
    const id = Number(req.params.id)
    const user = await userModel.findOne({id : id})
    console.log(user)
    if(user){
        res.json(user)
    } else {
        res.json({"Status" : "User not found"})
    }
})

app.post("/api/users/add", (req, res) => {

})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})