import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function Header({totalItems}){
    return (
        <header>
            <div className="header-container-top">
                <Link to="/" className="header-title"><h1>Crazy Kitchen Chicken</h1></Link>
                <Navbar totalItems={totalItems}/>
            </div>
            <div id="banner-header">
                <p>The Ultimate Blog for your Cluckin' Needs</p>
            </div>
            

        </header>
    )
}