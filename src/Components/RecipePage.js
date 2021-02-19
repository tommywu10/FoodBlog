import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function RecipePage({dataArray, itemNum}){

    return(
        <div>
            {dataArray.map((item, index) => 
                <div key={index} className="recipe-card-container">
                    <h1 className="meal-title">{item[itemNum].strMeal}</h1>
                    <img src={item[itemNum].strMealThumb} alt="food" />
                    <h4 className="meal-area">{item[itemNum].strArea}</h4>

                    <div className="ingredients-instructions-container">

                        <ul>
                            <h3>Ingredients</h3>
                            <li key={index}>{item[itemNum].strIngredient1} - {item[itemNum].strMeasure1}</li>
                            <li key={index}>{item[itemNum].strIngredient2} - {item[itemNum].strMeasure2}</li>
                            <li key={index}>{item[itemNum].strIngredient3} - {item[itemNum].strMeasure3}</li>
                            <li key={index}>{item[itemNum].strIngredient4} - - {item[itemNum].strMeasure4}</li>
                            <li key={index}>{item[itemNum].strIngredient5} - - {item[itemNum].strMeasure5}</li>
                            <li key={index}>{item[itemNum].strIngredient6} - - {item[itemNum].strMeasure6}</li>
                            <li key={index}>{item[itemNum].strIngredient7} - - {item[itemNum].strMeasure7}</li>
                            <li key={index}>{item[itemNum].strIngredient8} - - {item[itemNum].strMeasure8}</li>
                            <li key={index}>{item[itemNum].strIngredient9} - - {item[itemNum].strMeasure9}</li>
                        </ul>
                        <div className="instructions">
                            <h3>Method</h3>
                            <p>{item[itemNum].strInstructions}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}