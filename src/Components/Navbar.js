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
                    <h2 className="modal-title">Log In</h2>
                    <LogInForm />
                    <button 
                        onClick={() => setIsModalOpen(false)}
                        className="modal-close-button">
                            Close
                    </button>
                    <p>Don't have an account? Register now!</p>
            </Modal>

            <Link 
                className="link log-in-button"
                onClick={() => setIsModalOpen(true)}
                
                >Log In</Link>
            <Link to="/" className="link">Home</Link>
            <Link to="/recipes" className="link">Recipes</Link>
            <Link to="/food" className="link">Food</Link>
        </div>
    )
}