const express = require('express');
const transaction = express.Router();
const transactionData = require('../models/info');
const {checkForCorrectFormat} = require('../validations/transactionValidations');
// const { nanoid } = require('nanoid');



// INDEX
transaction.get('/', (req, res) => {
    res.json(transactionData);
});

// SHOW
transaction.get('/:id', (req, res) => {
    const { id } = req.params;
    if(id > transactionData.length-1 ){
        res.status(404).json({error: "Transaction Not Found"});
        // res.redirect('/transaction');
    }else{
        res.json(transactionData[id]);
    }
});


// CREATE
transaction.post('/', (req, res) => {
    transactionData.push(req.body);
    // res.json(transactionData);
    res.json(transactionData[transactionData.length-1]);
});

// UPDATE
transaction.put('/:id', (req, res) => {
    const { id } = req.params;
    transactionData[id] = req.body;
    res.status(200).json(transactionData[id]);
    // res.json(transactionData);
});

transaction.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (transactionData[id]) {
        transactionData.splice(id, 1);
        res.json({ message: "Successfully deleted a transaction" });
        // res.json(transactionData);
    } else {
        res.json({ error: "Transaction Not Found" });
    }
});



module.exports = transaction;