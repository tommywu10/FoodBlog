import React from 'react'
import {Link} from 'react-router-dom'

export default function FlavorOfTheWeek({dataArray}){
    
    return (
        <div>

            <h1>Flavor of the week</h1>

            <div className='flavor-of-the-week-container'>
                
            {dataArray.map((item, index) => 
                    dataArray.map(food => 
                        <div key={food.idMeal} className="recipe-card">
                            <Link to="/chicken-karaage">
                                <img src={food[2].strMealThumb} alt="food" />
                            </Link>
                            <p>{food[2].strArea}</p>
                            <h2>{food[2].strMeal}</h2> 
                        </div> 
                        ))}
                        
            </div>
        </div>
    )
}
/* {dataArray.map((item, index) => 
    <div key={index} className="fotw-card">
        <Link to="/chicken-karaage">
            <img src={item[2].strMealThumb} alt="food" />
        </Link>
        <p>{item[2].strArea}</p>
        <h2>{item[2].strMeal}</h2>
        
    </div>)} */