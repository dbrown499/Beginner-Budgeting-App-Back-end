import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    const [total, setTotal] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4001/transaction`)
            .then(res => res.json())
            .then(res => {
                setTotal(res)
            })
            .catch(err => { console.log(err) })
    }, [])

    const totalAmount = total.reduce((acc, currVal) => acc + currVal.amount, 0);


    return (
        <>
        <h1>Index</h1>
            <div>Bank Account Total:{totalAmount}</div>
            <div>
                {total.map((trans, ind) => {
                    return (
                        <div key={trans.id}>
                            <div>{trans.date}</div>
                            <Link to={`/transaction/${ind}`}>
                                <div>{trans.item_name}</div>
                            </Link>
                            <div>{trans.amount}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Index