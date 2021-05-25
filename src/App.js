import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { commerce } from './lib/commerce'

import Home from './Components/Home';
import Recipes from './Components/Recipes';
import Shop from './Components/Shop';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ChickenKaraage from './Components/HomePageRecipes/ChickenKaraage';
import ChickenBasquaise from './Components/NewRecipes/ChickenBasquaise';
import ChickenParmentier from './Components/NewRecipes/ChickenParmentier';
import TandooriChicken from './Components/RYL/TandooriChicken';
import ChickenCousCous from './Components/RYL/ChickenCousCous';
import KungPaoch from './Components/RYL/KungPaoChicken'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/CheckoutForm/Checkout'
import RecipePage from './Components/RecipePage'
function App() {

let [data, setData] = useState([])
const [shopData, setShopData] = useState([])
const [cart, setCart] = useState({})
const [recipeData, setRecipeData] = useState('yo')
//-------------------FETCH CHICKEN DATA-------------------------------------------------------
  

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
  

//-------------------FETCH SHOP DATA-------------------------------------------------------
    

const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setShopData(data);
}



console.log(shopData)

//-------------------SHOPPING CART-------------------------------------------------------

const fetchCart = async () => {
  const cart = await commerce.cart.retrieve();
  setCart(cart)
}

const handleAddToCart = async (productID, quantity) => {
  const {cart} = await commerce.cart.add(productID, quantity)
  setCart(cart)
}

const handleUpdateCardQty = async (productID, quantity) => {
  const {cart} = await commerce.cart.update(productID, {quantity})
  setCart(cart)
}

const handleRemoveFromCart = async (productID) => {
  const {cart} = await commerce.cart.remove(productID)
  setCart(cart)
}


const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty()
  setCart(cart)
}

useEffect(() =>{
  fetchProducts();
  fetchCart();
}, [])

console.log(cart)

return (
  <div className="App">

    <BrowserRouter>

    <Header totalItems={cart.total_items}/>

        <Switch>
          <Route exact path="/" render={() => (<Home dataArray={dataArray} recipeData={recipeData} setRecipeData={setRecipeData}/>)}/>
          <Route path="/recipes" render={() => (<Recipes dataArray={dataArray} recipeData={recipeData} setRecipeData={setRecipeData}/>)}/>
          <Route path="/shop" render={() => (<Shop shopData={shopData} onAddToCart={handleAddToCart}/>)}/>
          <Route path="/checkout" render={() => (<Checkout cart={cart}/>)}/>
          <Route path="/cart" render={() => (
            <Cart 
              cart={cart} 
              handleEmptyCart={handleEmptyCart} 
              handleAddToCart={handleAddToCart} 
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCardQty={handleUpdateCardQty}/>)}/>
          <Route path="/chicken-karaage" render={() => (<ChickenKaraage dataArray={dataArray}/>)}/>
          <Route path="/register" component={Register}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/chickenbasquaise" render={() => (<ChickenBasquaise dataArray={dataArray}/>)}/>
          <Route path="/chickenparmentier" render={() => (<ChickenParmentier dataArray={dataArray}/>)}/>
          <Route path="/tandoorichicken" render={() => (<TandooriChicken dataArray={dataArray}/>)}/>
          <Route path="/chickencouscous" render={() => (<ChickenCousCous dataArray={dataArray}/>)}/>
          <Route path="/kungpaochicken" render={() => (<KungPaoch dataArray={dataArray}/>)}/>
          <Route exact path="/recipepage" render={() => <RecipePage recipeData={recipeData} setRecipeData={setRecipeData}/>} />
        </Switch>

    <Footer />

    </BrowserRouter>
  </div>
);
}

export default App;
