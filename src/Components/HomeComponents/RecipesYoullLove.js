import React from 'react'
import {Link} from 'react-router-dom'

export default function RecipesYoullLove({dataArray, recipeData, setRecipeData}){

   /*  const clickHandler = (fewd) => {
        setRecipeData(fewd);
   } */

    return(
        <div className="ryl-container">
            <h1>Recipes You'll Love</h1>
            <div className="recipes-youll-love-card-container">
                <Link to="/tandoorichicken" className="recipes-link">
                    {dataArray.map((item, index) => 
                        dataArray.map(food => 
                            <div key={food.idMeal} className="recipes-card ryl-food-display-card">
                                <img src={food[4].strMealThumb} alt="food" />
                                <p>{food[4].strMeal}</p> 
                            </div>  
                            ))}
                    </Link>

                    <Link to="/chickencouscous" className="recipes-link">
                        {dataArray.map((item, index) => 
                                dataArray.map(food => 
                                    <div key={food.idMeal} className="recipes-card ryl-food-display-card">
                                        <img src={food[5].strMealThumb} alt="food" />
                                        <p>{food[5].strMeal}</p> 
                                    </div>  
                            ))}
                            
                    </Link>

                    <Link to="/kungpaochicken" className="recipes-link">
                        {dataArray.map((item, index) => 
                                dataArray.map(food => 
                                    <div key={food.idMeal} className="recipes-card ryl-food-display-card">
                                        <img src={food[6].strMealThumb} alt="food" />
                                        <p>{food[6].strMeal}</p> 
                                    </div>  
                                    ))}
                    </Link>
            </div>
        </div>
    )
}

