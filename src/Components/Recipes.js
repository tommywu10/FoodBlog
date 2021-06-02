import React, {useState, useEffect} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import RecipePage from './RecipePage'
export default function Recipes({dataArray, recipeData, setRecipeData}){

   
 
    const clickHandler = (fewd) => {
         setRecipeData(fewd);
    }

    useEffect(() =>{
        clickHandler()
    }, [])

    return(
        <div>
            <div className="recipes-main-page-container">
            <h1>Recipes</h1>
            <p id="recipes-main-page-container-subtitle">Browse the glorious chicken recipes from different cooking styles and cuisines.</p>
          
                <div className="recipes-main-card-container">
                {dataArray.map((item, index) => 
                    dataArray.map((food, index) => 
                        food.map(fewd => 
                            
                        <div key={fewd.idMeal} className="recipes-main-card">
                            <Link className="recipe-link" to='/recipepage' onClick={() => clickHandler(fewd)}>
                            <img src={fewd.strMealThumb} alt="food" />
                                <div className="recipes-main-card-text">
                                    <p>{fewd.strArea}</p>
                                    <h2>{fewd.strMeal}</h2> 
                                </div>
                        </Link>  </div>    )
                        ))}
                </div>
                 
            
        </div>
           
        </div>
        
    )
}