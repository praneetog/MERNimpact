import mongoose from "mongoose"

const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    }
})

let expense;
function expenseModel(){
    expense = mongoose.model("expense",expenseSchema)
}

export {expenseModel,expense}