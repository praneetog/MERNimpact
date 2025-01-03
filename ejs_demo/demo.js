import express from "express";

const app = express();
app.use(express.json())

app.set("view engine", "ejs");

app.set("views", "./views")

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8888, () => {
    console.log(`Server started at http://localhost:8888`)
})