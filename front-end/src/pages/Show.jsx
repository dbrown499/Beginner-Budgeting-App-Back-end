import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Show = () => {
    const [display, setDisplay] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4001/transaction/${id}`)
            .then(res => res.json())
            .then(res => {
                setDisplay(res)
                // console.log(res)
            })
            .catch(err => { console.log(err) })
    }, [id])

    const handleDelete = () => {
        fetch(`http://localhost:4001/transaction/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(res =>{
            navigate('/transaction')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Show</h1>
            <h2>{display.category}</h2>
            <section>
                <div>Item Name: {display.item_name}</div>
                <div>Amount saved: ${display.amount}</div>
                <div>Date: {display.date}</div>
                <div>Receiver: {display.from}</div>
                <div>Category: {display.category}</div>
                <div></div>
                <Link to={`/transaction/${id}/edit`}>
                <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>DELETE</button>
            </section>
        </>
    )
}

export default Show