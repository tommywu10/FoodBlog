import React from 'react'
import {SocialIcon} from 'react-social-icons'

export default function Footer(){
    return (
        <footer>
            <div className='footer-links'>
                <p>A ridiculous food blog by Tommy Wu</p>
            </div>

            <div className='social-media-buttons-footer'>
                <SocialIcon 
                    className='social-icon'
                    url="#"
                    network='facebook' 
                    style={{width: '30px', height: '30px'}}/>
                <SocialIcon 
                    className='social-icon'
                    url="#"
                    network='instagram' 
                    style={{width: '30px', height: '30px'}}/>
                <SocialIcon 
                    className='social-icon'
                    url="#"
                    network='twitter' 
                    style={{width: '30px', height: '30px'}}/>
            </div>
        </footer>
    )
}