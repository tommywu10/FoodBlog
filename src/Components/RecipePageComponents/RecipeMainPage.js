import React from 'react'

export default function RecipeMainPage({dataArray}){
    
    return (
        <div className="recipes-main-page-container">
            <h1>Recipes</h1>
            <p id="recipes-main-page-container-subtitle">Browse the glorious chicken recipes from different cooking styles and cuisines.</p>
                <div className="recipes-main-card-container">
                {dataArray.map((item, index) => 
                    dataArray.map((food, index) => 
                        food.map(fewd => 
                        <div key={fewd.idMeal} className="recipes-main-card">
                            <img src={fewd.strMealThumb} alt="food" />
                                <div className="recipes-main-card-text">
                                    <p>{fewd.strArea}</p>
                                    <h2>{fewd.strMeal}</h2> 
                                </div>
                        </div> )
                        ))}
                </div>
            
        </div>
    )
}
  