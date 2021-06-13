import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Home() {
    const history = useHistory()
    const onSubmit = () => {
        history.push('/pizza')
    }
    return (
        <form onSubmit={onSubmit}>
            <button id='order-pizza'>Order Pizza Here!</button>
        </form>
    )
}