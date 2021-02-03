import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RecipeMainPage from './RecipePageComponents/RecipeMainPage'

export default function Recipes({dataArray}){

    return(
        <div>
            <Header />
            <RecipeMainPage dataArray={dataArray}/>
            <Footer />
        </div>
    )
}