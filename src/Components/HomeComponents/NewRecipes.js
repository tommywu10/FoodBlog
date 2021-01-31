import React from 'react'
import {Link} from 'react-router-dom'

export default function NewRecipes({dataArray}){
    return (
        <div className="new-recipes-container">
            <h1>New Recipes!</h1>

            <div className="new-recipes-card-container">

                <Link to="/chickenbasquaise" className="new-recipes-link">
                    {dataArray.map((item, index) => 
                        <div 
                            key={index} 
                            className="new-recipes-card">   
                                <img src={item[7].strMealThumb} alt="food" />
                                <p>{item[7].strMeal}</p>
                        </div>)}
                </Link>

                <Link to="/chickenparmentier" className="new-recipes-link">
                    {dataArray.map((item, index) => 
                        <div 
                            key={index} 
                            className="new-recipes-card">
                                <img src={item[8].strMealThumb} alt="food" />
                                <p>{item[8].strMeal}</p>
                        </div>)}
                </Link>
            </div>
        </div>
    )
}