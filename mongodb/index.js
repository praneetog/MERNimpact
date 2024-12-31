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
app.use(express.json());

const userSchema = new mongoose.Schema({
    id: Number,
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

app.post("/api/users/add", async (req, res) => {
    try {
        const userData = req.body;
        const newUser  = new userModel(userData);
        await newUser.save();

        res.json({
            "Status": "User  added successfully",
            "User ": newUser
        });
    } catch (error) {
        console.error("Error adding user:", error);
        res.json({
            "Status": "Error adding user"
        });
    }
});

app.patch("/api/users/update/:id", async (req, res) => {
    const id = Number(req.params.id);
    const updatedUserData = req.body;
    const user = await userModel.findOne({id : id});

    if (user) {
        // Update only the fields that are present in updatedUser Data
        if (updatedUserData.name !== undefined) {
            user.name = updatedUserData.name;
        }
        if (updatedUserData.dep !== undefined) {
            user.dep = updatedUserData.dep;
        }
        
        await user.save();
        res.json({ "Status": "User  updated successfully" });
    } else {
        res.json({ "Status": "User  not found" });
    }
});

app.delete("/api/users/delete/:id", async (req, res) => {
    let userId = Number(req.params.id)
    await userModel.findOneAndDelete({id : userId})
    res.send("User deleted Successfully")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})