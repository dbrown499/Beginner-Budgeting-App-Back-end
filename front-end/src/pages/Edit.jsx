import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const [updatedTransaction, setUpdatedTransaction] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:4001/transaction/${id}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setUpdatedTransaction((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleChange = (e) => {
        setUpdatedTransaction((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4001/transaction/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedTransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                navigate(`/transaction/${id}`)
            })
            .catch(err => { console.log(err) })
    }
    

    if (!updatedTransaction) return (<div>Loading...</div>)

    return (
        <>
            <h1>Edit</h1>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit Transaction Details</legend>
                <input
                    type="number"
                    placeholder='Unique ID #'
                    name='id'
                    value={updatedTransaction.id}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Item Name'
                    name='item_name'
                    value={updatedTransaction.item_name}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="number"
                    placeholder='Amount'
                    name='amount'
                    value={updatedTransaction.amount}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Date'
                    name='date'
                    value={updatedTransaction.date}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Send To'
                    name='from'
                    value={updatedTransaction.from}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder='Category'
                    name='category'
                    value={updatedTransaction.category}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit" />
            </fieldset>
        </form>
        </>
    )
}

export default Edit