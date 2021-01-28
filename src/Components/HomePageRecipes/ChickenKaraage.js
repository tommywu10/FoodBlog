import React from 'react'
import Header from '../Header'

export default function ChickenKaraage({dataArray}){
    
    return(
        <div>
            <Header />
            {dataArray.map((item, index) => 
                <div key={index} className="recipe-card-container">
                    <h1 className="meal-title">{item[2].strMeal}</h1>
                    <img src={item[2].strMealThumb} alt="food" />
                    <h4 className="meal-area">{item[2].strArea}</h4>

                    <div className="ingredients-instructions-container">

                        <ul>
                            <h3>Ingredients</h3>
                            <li>{item[2].strIngredient1} - {item[2].strMeasure1}</li>
                            <li>{item[2].strIngredient2} - {item[2].strMeasure2}</li>
                            <li>{item[2].strIngredient3} - {item[2].strMeasure3}</li>
                            <li>{item[2].strIngredient4} - - {item[2].strMeasure4}</li>
                            <li>{item[2].strIngredient5} - - {item[2].strMeasure5}</li>
                            <li>{item[2].strIngredient6} - - {item[2].strMeasure6}</li>
                            <li>{item[2].strIngredient7} - - {item[2].strMeasure7}</li>
                            <li>{item[2].strIngredient8} - - {item[2].strMeasure8}</li>
                            <li>{item[2].strIngredient9} - - {item[2].strMeasure9}</li>
                        </ul>
                        <div className="instructions">
                            <h3>Method</h3>
                            <p>{item[2].strInstructions}</p>
                        </div>
                    </div>
                </div>)}
            
        </div>
    )
}