import React, { useEffect, useState } from 'react'

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
            <div>Bank Account Total:{totalAmount}</div>
            <div>
                {total.map((trans) => {
                    return (
                        <div key={trans.id}>
                            <div>{trans.id}</div>
                            <div>{trans.item_name}</div>
                            <div>{trans.amount}</div>
                            <div>{trans.date}</div>
                            <div>{trans.from}</div>
                            <div>{trans.category}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Index