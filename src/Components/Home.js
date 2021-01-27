import React, {useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import MainFoodDisplay from './HomeComponents/MainFoodDisplay'
import RecipesYoullLove from './HomeComponents/RecipesYoullLove'
import NewRecipes from './HomeComponents/NewRecipes'

export default function Home(){

    let [data, setData] = useState('')

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(response => response.json())
        .then(data => setData(data), console.log(data))
        .catch(err => {
            console.error(err);
        })
        console.log(dataArray)
    }, [])

    const dataArray = Object.values(data)/* Object.keys(data).map(i => data[i]) */
    return(
        <div>
            <Header />   
                <div className='home-main'>
                    <NewRecipes dataArray={dataArray}/>
                    <MainFoodDisplay dataArray={dataArray}/>
                    <RecipesYoullLove dataArray={dataArray}/>
                </div>
            <Footer />
        </div>
    )
}