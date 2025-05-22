const express= require("express")
const mongoose=require("mongoose")
const cors = require("cors")
const TodoModel = require("./models/Todo")
const { RiSafariFill } = require("react-icons/ri")
require('dotenv').config();


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://process.env.DB_ID:process.env.DB_PASSWORD@cluster0.sqbwr.mongodb.net/Todos")

app.get("/get",(req,res)=>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => RiSafariFill.json())
})
app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task
    })
    .then(result =>res.json(result))
    .catch (err => res.json(err))
})
app.listen(3000,()=>{
    console.log("server is running")
})