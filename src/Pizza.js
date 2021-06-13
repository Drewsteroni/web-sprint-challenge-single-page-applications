import React from 'react'

export default function Pizza(props) {
    const {newOrder} = props;

    return(
        <div>
            <h1>Order Submitted!</h1>
            <p>{newOrder.data}</p>
        </div>
    )
}