import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import LogInForm from './LogInForm'
import {ShoppingCart} from "@material-ui/icons"
import {IconButton, Badge} from '@material-ui/core'
Modal.setAppElement('#root')


export default function Navbar({totalItems}){

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="navbar">

            <Modal 
                isOpen={isModalOpen}
                className="modal" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Log In</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="modal-close-button">
                                    X
                            </button>
                        </div>
                        <LogInForm />
                        
                        <p>Don't have an account? <Link to="/register" className="register-button"> Register now!</Link></p>

                        <p><Link to="/forgotpassword" className="register-button"> Forgot your password?</Link></p>
                        
                    </div>
            </Modal>

            <Link 
                className="link log-in-button"
                onClick={() => setIsModalOpen(true)}
                to="#"
                >Log In</Link>
            <Link to="/" className="link">Home</Link>
            <Link to="/recipes" className="link">Recipes</Link>
            <Link to="/shop" className="link">Shop</Link>
            <Link to="/cart">
                <IconButton aria-label="Show cart items">
                    <Badge badgeContent={totalItems} className="shopping-cart-icon">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </Link>
        </div>
    )
}