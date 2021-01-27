import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import FlavorOfTheWeek from './HomeComponents/FlavorOfTheWeek'
import RecipesYoullLove from './HomeComponents/RecipesYoullLove'
import NewRecipes from './HomeComponents/NewRecipes'

export default function Home({dataArray}){

    
    return(
        <div>
    
            <Header />   
                <div className='home-main'>
                    <NewRecipes dataArray={dataArray}/>
                    <FlavorOfTheWeek dataArray={dataArray}/>
                    <RecipesYoullLove dataArray={dataArray}/>
                </div>
            <Footer />
         
            
            
        </div>
    )
}