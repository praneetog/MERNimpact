import express from "express"
import dotenv from "dotenv"
import data from "./public/Data.json" with {type:'json'}
import path from "path"

dotenv.config()

const homePage = path.join("C:/Users/avnee/OneDrive/Desktop/MERNimpact/express-backend/public/index.html")
const port = process.env.PORT || 3000
const app = express()

// app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/home",(req,res)=>{
    res.sendFile(homePage)
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
}) 

app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
})

app.get("/api/users",(req,res)=>{
    res.json(data)
})

app.get("/api/users/:id",(req,res)=>{
    let userId = Number(req.params.id);
    const singleUser = data.find((user)=>{
        return user.id === userId
    });
    if(singleUser){
        res.json(singleUser)
    }
    else{
        res.send("User not found")
    }
})

app.get("/submit",(req,res)=>{
    res.json(req.query)
})

// app.post("/submit",(req,res)=>{
//     console.log(req.body);
//     res.send("Submitted")
// })

app.listen(port,()=>{
    console.log(`Sever is running on port ${port}`)
})