import React, { useState } from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import AddItemAction from './ActionCreators/AddItemAction';

function Product( props ) {

    const dispatch = useDispatch();

    const buyItem = (event) =>{
        event.preventDefault();
        let item = {
            id: props.id,
            image: props.image,
            title: props.title,
            price: props.price,
        }
        dispatch(AddItemAction(item))
    }

    const prod = useSelector((state) => state.items)
    console.log(prod)

    return (
        <div>
            <div onClick={buyItem} className="product">
                <img src={props.image} alt="" />
                <div className="product__info">
                    <strong><p>{props.title}</p></strong>
                    <p className="product__price">
                    <small>₹</small>
                    {props.price} for Two
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product