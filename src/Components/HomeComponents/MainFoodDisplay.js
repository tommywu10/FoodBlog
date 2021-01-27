import React from 'react'

export default function MainFoodDisplay({dataArray}){
    return (
        <div>

            <h1>Flavor of the week</h1>

            <div className='main-food-display-container'>
                
                {dataArray.map((item, index) => 
                <div key={index} className="main-food-display-card">
                    <img src={item[2].strMealThumb} alt="food" />
                    <p>{item[2].strArea}</p>
                    <h2>{item[2].strMeal}</h2>
                    
                </div>)}

            </div>
        </div>
    )
}