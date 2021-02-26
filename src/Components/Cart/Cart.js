import React from 'react'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleAddToCart, handleUpdateCardQty, handleRemoveFromCart,       handleEmptyCart}) => {

    const EmptyCart = () => (
        <p id="empty-cart-text">You have no items in your cart, <Link to="/shop" id="empty-cart-link">start adding some chickens</Link>!</p>
    )

    const FilledCart = () => (
        <div className="filled-cart-container">
            <div className="cart-item-container">
                {cart.line_items.map((item) => (
                    <CartItem item={item} handleUpdateCardQty={handleUpdateCardQty} handleRemoveFromCart={handleRemoveFromCart}/>
                ))} 
            </div>
            
            <div className="filled-cart-subtotal">
                <h3>Subtotal: {cart.subtotal.formatted_with_symbol}</h3>  
                
                    <button id="check-out-button"><Link to="/checkout">Go to checkout</Link></button>
                
                <button id="empty-button" onClick={() => handleEmptyCart}>Empty cart</button>
            </div>
        </div>
    )

    if(!cart.line_items) return 'Loading...'

    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            { !cart.line_items.length  ? <EmptyCart /> : <FilledCart />}
        </div>
    )
}

export default Cart
