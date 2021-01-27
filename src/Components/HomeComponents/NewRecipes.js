import React from 'react'

export default function NewRecipes({dataArray}){
    return (
        <div className="new-recipes-container">
            <h1>New Recipes!</h1>

            <div className="new-recipes-card-container">
                {dataArray.map((item, index) => 
                    <div key={index} className="new-recipes-card">
                        <img src={item[7].strMealThumb} alt="food" />
                        <p>{item[7].strMeal}</p>
                    </div>)}
                {dataArray.map((item, index) => 
                    <div key={index} className="new-recipes-card">
                        <img src={item[8].strMealThumb} alt="food" />
                        <p>{item[8].strMeal}</p>
                    </div>)}
            </div>
        </div>
    )
}