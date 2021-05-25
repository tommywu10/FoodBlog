import React from 'react'
import FlavorOfTheWeek from './HomeComponents/FlavorOfTheWeek'
import RecipesYoullLove from './HomeComponents/RecipesYoullLove'
import NewRecipes from './HomeComponents/NewRecipes'
import ChickenInfo from './HomeComponents/ChickenInfo'
import HomePageImage from './HomeComponents/HomePageImage'

export default function Home({dataArray, recipeData, setRecipeData}){

    
    return(
        <div className="home-container">
            <div className='home-main'>
                <NewRecipes dataArray={dataArray} recipeData={recipeData} setRecipeData={setRecipeData}/>
                <FlavorOfTheWeek dataArray={dataArray} recipeData={recipeData} setRecipeData={setRecipeData}/>
                <RecipesYoullLove dataArray={dataArray} recipeData={recipeData}setRecipeData={setRecipeData}/>
            </div>

            <HomePageImage />
            <ChickenInfo />
            
         
    
            
        </div>
    )
}