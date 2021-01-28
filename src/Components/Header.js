import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <div>
            <header>
                <Link to="/" className="header-title"><h1>Crazy Kitchen Chicken</h1></Link>
                <Navbar/>
            </header>

            <div id="banner-header">
                <p>The Ultimate Blog for your Cluckin' Needs</p>
            </div>

        </div>
    )
}