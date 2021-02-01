import React from 'react'
import {Link} from 'react-router-dom'

export default function RecipesYoullLove({dataArray}){
    return(
        <div className="ryl-container">
            <h1>Recipes You'll Love</h1>

            <Link to="/tandoorichicken" className="recipes-link">
                    {dataArray.map((item, index) => 
                        <div 
                            key={index} 
                            className="recipes-card">   
                                <img src={item[4].strMealThumb} alt="food" />
                                <p>{item[4].strMeal}</p>
                        </div>)}
                </Link>

                <Link to="/chickencouscous" className="recipes-link">
                    {dataArray.map((item, index) => 
                        <div 
                            key={index} 
                            className="recipes-card">   
                                <img src={item[5].strMealThumb} alt="food" />
                                <p>{item[5].strMeal}</p>
                        </div>)}
                </Link>

                <Link to="/kungpaochicken" className="recipes-link">
                    {dataArray.map((item, index) => 
                        <div 
                            key={index} 
                            className="recipes-card">   
                                <img src={item[6].strMealThumb} alt="food" />
                                <p>{item[6].strMeal}</p>
                        </div>)}
                </Link>
        </div>
    )
}