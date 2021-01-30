import React from 'react'
import img from '../chicken-svg.png'

export default function ChickenInfo(){
    return(
        <div className='chicken-info-container'>
            <img src={img} alt="chicken"/>
            <div className='chicken-info-information'>
                <p>There are more than <span id="orange-highlight">25 billion chickens</span> in the world, and dozens of breeds. With so many of them, it seems only natural to want to know more about this peculiar bird. Here are some scientific facts mixed in with some purely fun facts, so enjoy the read!</p>
                <ul>
                    <li>The United States alone consumes 8 billion chickens a year, and around 250 eggs per capita.</li>
                    <li>There are approximately 30 distinct vocalizations that chickens use to communicate with each other.</li>
                    <li>Chickens are omnivores, meaning they eat seeds and insects, but also have been known to eat mice and lizards.</li>
                    <li>Chickens can recognize around 100 different faces.</li>
                    <li>Chickens lay eggs of different colors. The colors do not affect the nutritional value of the eggs, but the chickens' diet does affect it.</li>
                    <li>You can tell whether an egg is fresh or stale by dropping it in water. A fresh egg will sink, but a stale one will float.</li>
                </ul>
            </div>
        </div>
    )
}