import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate = useNavigate();
    const [newTransaction, setNewTransaction] = useState({});

    const handleChange = (e) => {
        setNewTransaction((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4001/transaction", {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            navigate("/transaction");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Input New Transaction Details</legend>
                <input
                    type="number"
                    placeholder='Unique ID #'
                    name='id'
                    value={newTransaction.id}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Item Name'
                    name='item_name'
                    value={newTransaction.item_name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="number"
                    placeholder='Amount'
                    name='amount'
                    value={newTransaction.amount}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Date'
                    name='date'
                    value={newTransaction.date}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Send To'
                    name='from'
                    value={newTransaction.from}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Category'
                    name='category'
                    value={newTransaction.category}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    );
};

export default New;
