import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FlavorOfTheWeek from './HomeComponents/FlavorOfTheWeek'
import RecipesYoullLove from './HomeComponents/RecipesYoullLove'
import NewRecipes from './HomeComponents/NewRecipes'
import ChickenInfo from './HomeComponents/ChickenInfo'
import HomePageImage from './HomeComponents/HomePageImage'

export default function Home({dataArray}){

    
    return(
        <div className="home-container">

            <Header />   

            <div className='home-main'>
                <NewRecipes dataArray={dataArray}/>
                <FlavorOfTheWeek dataArray={dataArray}/>
                <RecipesYoullLove dataArray={dataArray}/>
            </div>

            <HomePageImage />
            <ChickenInfo />
            
            <Footer />
         
            
            
        </div>
    )
}