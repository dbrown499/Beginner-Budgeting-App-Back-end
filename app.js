const express = require('express');
const app = express();
const budgetingAppController = require('./controllers.js/budgetingAppController');
const cors = require('cors');
// const { nanoid } = require('nanoid');

// app.use(cors());
app.use(express.json());
app.use("/transaction", budgetingAppController)

app.get('/', (req, res)=>{
    res.send("welcome to the budgeting app");
});

app.get("*",(req,res)=>{
    res.status(404).json({error: "Page Not Found"});
});

module.exports =  app ;