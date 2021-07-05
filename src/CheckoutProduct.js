import React from 'react';
import { useDispatch } from 'react-redux';
import RemoveItemAction from './ActionCreators/RemoveItemAction';
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price}) {
   
    const dispatch = useDispatch();

    const removeItem = (event) =>{
        event.preventDefault();
        let item = {
            id: id,
            image: image,
            title: title,
            price: price,
        }
        dispatch(RemoveItemAction(item))
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeItem}>Delete Item</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct