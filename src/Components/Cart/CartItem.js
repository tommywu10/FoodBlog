import React from 'react'

const CartItem = ({item, handleUpdateCardQty, 
    handleRemoveFromCart}) => { 
    return (
        <div className="cart-item">
            <div className="cart-item-content">
                <img src={item.media.source} alt={item.name}/>
                <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <h5>{item.line_total.formatted_with_symbol}</h5>
                </div>
            <div className="cart-item-quantity">
                <button onClick={() => handleUpdateCardQty(item.id, item.quantity +1)}>+</button>
                <h5>{item.quantity}</h5>
                <button onClick={() => handleUpdateCardQty(item.id, item.quantity -1)}>-</button>
                {/* <button onClick={() => handleRemoveFromCart}>Remove</button> */}
            </div>
            
        </div>
        </div>
    )
}

export default CartItem
