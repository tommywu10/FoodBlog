import React from 'react'
import {Link} from 'react-router-dom'

export default function NewRecipes({dataArray}){
    return (
        <div className="recipes-container">
            <h1>New Recipes!</h1>

            <div className="recipes-card-container">

            <Link to="/chickenbasquaise" className="recipes-link">
                {dataArray.map((item, index) => 
                    dataArray.map(food => 
                        <div key={food.idMeal} className="recipes-card ryl-food-display-card">
                            <img src={food[7].strMealThumb} alt="food" />
                            <p>{food[7].strMeal}</p> 
                        </div>  
                        ))}
                </Link>

                <Link to="/chickenparmentier" className="recipes-link">
                {dataArray.map((item, index) => 
                    dataArray.map(food => 
                        <div key={food.idMeal} className="recipes-card ryl-food-display-card">
                            <img src={food[8].strMealThumb} alt="food" />
                            <p>{food[8].strMeal}</p> 
                        </div>  
                        ))}
                </Link>
            </div>
        </div>
    )
}

/* {dataArray.map((item, index) => 
    <div 
        key={index} 
        className="recipes-card">   
            <img src={item[7].strMealThumb} alt="food" />
            <p>{item[7].strMeal}</p>
    </div>)} */