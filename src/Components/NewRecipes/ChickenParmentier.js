import React from 'react'
import Header from '../Header'

export default function ChickenParmentier({dataArray}){
    
    return(
        <div>
            <Header />
            {dataArray.map((item, index) => 
                <div key={index} className="recipe-card-container">
                    <h1 className="meal-title">{item[8].strMeal}</h1>
                    <img src={item[8].strMealThumb} alt="food" />
                    <h4 className="meal-area">{item[8].strArea}</h4>

                    <div className="ingredients-instructions-container">

                        <ul>
                            <h3>Ingredients</h3>
                            <li>{item[8].strIngredient1} - {item[8].strMeasure1}</li>
                            <li>{item[8].strIngredient2} - {item[8].strMeasure2}</li>
                            <li>{item[8].strIngredient3} - {item[8].strMeasure3}</li>
                            <li>{item[8].strIngredient4} - - {item[8].strMeasure4}</li>
                            <li>{item[8].strIngredient5} - - {item[8].strMeasure5}</li>
                            <li>{item[8].strIngredient6} - - {item[8].strMeasure6}</li>
                            <li>{item[8].strIngredient7} - - {item[8].strMeasure7}</li>
                            <li>{item[8].strIngredient8} - - {item[8].strMeasure8}</li>
                            <li>{item[8].strIngredient9} - - {item[8].strMeasure9}</li>
                        </ul>
                        <div className="instructions">
                            <h3>Method</h3>
                            <p>{item[8].strInstructions}</p>
                        </div>
                    </div>
                </div>)}
            
        </div>
    )
}