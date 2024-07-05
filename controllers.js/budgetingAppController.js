const express = require('express');
const transaction = express.Router();
const transactionData = require('../models/info');

transaction.get('/', (req, res) => {
    res.json(transactionData);
});


module.exports = transaction;