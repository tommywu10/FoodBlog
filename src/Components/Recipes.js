import React from 'react'
import RecipeMainPage from './RecipePageComponents/RecipeMainPage'

export default function Recipes({dataArray}){

    return(
        <div>
            <RecipeMainPage dataArray={dataArray}/>
        </div>
    )
}