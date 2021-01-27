import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Food from './Components/Food';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
