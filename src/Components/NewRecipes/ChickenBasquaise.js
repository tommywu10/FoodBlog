import React from 'react'
import Header from '../Header'

export default function ChickenBasquaise({dataArray}){
    
    return(
        <div>
            <Header />
            {dataArray.map((item, index) => 
                <div key={index} className="recipe-card-container">
                    <h1 className="meal-title">{item[7].strMeal}</h1>
                    <img src={item[7].strMealThumb} alt="food" />
                    <h4 className="meal-area">{item[7].strArea}</h4>

                    <div className="ingredients-instructions-container">

                        <ul>
                            <h3>Ingredients</h3>
                            <li>{item[7].strIngredient1} - {item[7].strMeasure1}</li>
                            <li>{item[7].strIngredient2} - {item[7].strMeasure2}</li>
                            <li>{item[7].strIngredient3} - {item[7].strMeasure3}</li>
                            <li>{item[7].strIngredient4} - - {item[7].strMeasure4}</li>
                            <li>{item[7].strIngredient5} - - {item[7].strMeasure5}</li>
                            <li>{item[7].strIngredient6} - - {item[7].strMeasure6}</li>
                            <li>{item[7].strIngredient7} - - {item[7].strMeasure7}</li>
                            <li>{item[7].strIngredient8} - - {item[7].strMeasure8}</li>
                            <li>{item[7].strIngredient9} - - {item[7].strMeasure9}</li>
                        </ul>
                        <div className="instructions">
                            <h3>Method</h3>
                            <p>{item[7].strInstructions}</p>
                        </div>
                    </div>
                </div>)}
            
        </div>
    )
}