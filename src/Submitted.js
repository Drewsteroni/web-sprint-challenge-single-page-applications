import React from 'react'
import { number } from 'yup/lib/locale'

export default function Submitted(props) {
    return(
        <div>
            <h1>Order Submitted!</h1>
                {Object.keys(props.order).map(property => {
                    return <p key={number.toString()}>
                                {property}: {props.order[property]}
                            </p>
            })}
        </div>
    ) 
}