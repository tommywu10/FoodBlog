import React from 'react'

export default function RecipesYoullLove({dataArray}){
    return(
        <div className="ryl-container">
            <h1>Recipes You'll Love</h1>

            <div className="recipes-youll-love-card-container">
                {dataArray.map((item, index) => 
                    <div key={index} className="ryl-food-display-card">
                        <img src={item[4].strMealThumb} alt="food" />
                        <p>{item[4].strMeal}</p>
                    </div>)}

                {dataArray.map((item, index) => 
                    <div key={index} className="ryl-food-display-card">
                        <img src={item[5].strMealThumb} alt="food" />
                        <p>{item[5].strMeal}</p>
                    </div>)}

                {dataArray.map((item, index) => 
                    <div key={index} className="ryl-food-display-card">
                        <img src={item[6].strMealThumb} alt="food" />
                        <p>{item[6].strMeal}</p>
                    </div>)}
            </div>
        </div>
    )
}