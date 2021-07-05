import React, { useState } from 'react'
import './Order.css'
import { useSelector } from 'react-redux'
import CheckoutProduct from "./CheckoutProduct";
import { initialState } from './reducers/AddItem'
import store from './store'

function Order() {


    const items = useSelector((state) => state.AddItem.items)

    console.log(items)

    return (
        <div className='order'>
            <h2>Orders</h2>
            {items?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default Order
