import React from 'react'

export default function RecipePage({dataArray, itemNum, name, recipeData}){

    function func() {
        console.log(recipeData)
    }

    func()

    return(
        <div> 
            <div className="recipe-card-container">
                    <h1 className="meal-title">{recipeData.strMeal}</h1>
                    <img src={recipeData.strMealThumb} alt="food" />
                    <h4 className="meal-area">{recipeData.strArea}</h4>

                    <div className="ingredients-instructions-container">

                        <ul>
                            <h3>Ingredients</h3>
                            <li>{recipeData.strIngredient1} - {recipeData.strMeasure1}</li>
                            <li>{recipeData.strIngredient2} - {recipeData.strMeasure2}</li>
                            <li>{recipeData.strIngredient3} - {recipeData.strMeasure3}</li>
                            <li>{recipeData.strIngredient4} - - {recipeData.strMeasure4}</li>
                            <li>{recipeData.strIngredient5} - - {recipeData.strMeasure5}</li>
                            <li>{recipeData.strIngredient6} - - {recipeData.strMeasure6}</li>
                            <li>{recipeData.strIngredient7} - - {recipeData.strMeasure7}</li>
                            <li>{recipeData.strIngredient8} - - {recipeData.strMeasure8}</li>
                            <li>{recipeData.strIngredient9} - - {recipeData.strMeasure9}</li>
                        </ul>
                        <div className="instructions">
                            <h3>Method</h3>
                            <p>{recipeData.strInstructions}</p>
                        </div>
                    </div>
                </div>      
        </div>
        )
}