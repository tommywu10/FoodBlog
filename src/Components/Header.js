import React from 'react'
import Navbar from './Navbar'

export default function Header(){
    return (
        <div>
            <header>
                <h1>Crazy Kitchen Chicken</h1>
                <Navbar/>
            </header>
            <div id="banner-header">
                <p>The Ultimate Blog for your Cluckin' Needs</p>
            </div>
        </div>
    )
}