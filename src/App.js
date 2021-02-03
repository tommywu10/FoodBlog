import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Food from './Components/Food';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ChickenKaraage from './Components/HomePageRecipes/ChickenKaraage';
import ChickenBasquaise from './Components/NewRecipes/ChickenBasquaise';
import ChickenParmentier from './Components/NewRecipes/ChickenParmentier';
import TandooriChicken from './Components/RYL/TandooriChicken';
import ChickenCousCous from './Components/RYL/ChickenCousCous';
import KungPaoch from './Components/RYL/KungPaoChicken'

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
          <Route path="/recipes" render={() => (<Recipes dataArray={dataArray}/>)}/>
          <Route path="/food" component={Food}/>
          <Route path="/chicken-karaage" render={() => (<ChickenKaraage dataArray={dataArray}/>)}/>
          <Route path="/register" component={Register}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/chickenbasquaise" render={() => (<ChickenBasquaise dataArray={dataArray}/>)}/>
          <Route path="/chickenparmentier" render={() => (<ChickenParmentier dataArray={dataArray}/>)}/>
          <Route path="/tandoorichicken" render={() => (<TandooriChicken dataArray={dataArray}/>)}/>
          <Route path="/chickencouscous" render={() => (<ChickenCousCous dataArray={dataArray}/>)}/>
          <Route path="/kungpaochicken" render={() => (<KungPaoch dataArray={dataArray}/>)}/>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
