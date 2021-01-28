import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Food from './Components/Food';
import ChickenKaraage from './Components/HomePageRecipes/ChickenKaraage';

function App() {

  let [data, setData] = useState('')

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(response => 
            response.json())
        .then(data => 
            setData(data),
            console.log(data))
        .catch(err => {
            console.error(err);
        })
        console.log(dataArray)
    }, [])

  const dataArray = Object.values(data)/* Object.keys(data).map(i => data[i]) */

  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/" render={() => (<Home dataArray={dataArray}/>)}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/food" component={Food}/>
          <Route path="/chicken-karaage" render={() => (<ChickenKaraage dataArray={dataArray}/>)}/>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
