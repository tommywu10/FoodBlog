import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
import LogInForm from './LogInForm'
Modal.setAppElement('#root')

export default function Navbar(){

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
        </div>
    )
}