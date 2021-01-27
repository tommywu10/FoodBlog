import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/recipes" className="link">Recipes</Link>
            <Link to="/food" className="link">Food</Link>
        </div>
    )
}