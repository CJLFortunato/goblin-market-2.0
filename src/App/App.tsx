import React, { useState } from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { Inventory } from '../Components/Inventory/Inventory';
import { MenuCtg } from '../Components/MenuCtg/MenuCtg';
import { MenuCart } from '../Components/MenuCart/MenuCart';
import { MenuLogIn } from '../Components/MenuLogin/MenuLogin';

function App(): JSX.Element {
  const [categMenuToggleSlideIn, setCategMenuToggleSlideIn] = useState(false);
  const [cartMenuToggleSlideIn, setCartMenuToggleSlideIn] = useState(false);
  const [loginMenuToggle, setLoginMenuToggle] = useState(false);

  //======================================================================================================== Click Handlers
  const handleMenuBtnClick = function() {
    setCategMenuToggleSlideIn(!categMenuToggleSlideIn);
    console.log(categMenuToggleSlideIn);
  }
  const handleCartBtnClick = function() {
    setCartMenuToggleSlideIn(!cartMenuToggleSlideIn);
    console.log(cartMenuToggleSlideIn);
  }
  const handleLoginBtnClick = function() {
    setLoginMenuToggle(!loginMenuToggle);
  }
//=========================================================================================================== Toggle Functions

 const categoriesMenuSlideIn = function() {
   if (!categMenuToggleSlideIn) {
     return;
  } 
  return (<MenuCtg closeFunc={setCategMenuToggleSlideIn}/>);
 }

 const cartMenuSlideIn = function() {
  if (!cartMenuToggleSlideIn) {
    return;
 } 
  return (<MenuCart closeFunc={setCartMenuToggleSlideIn}/>);
}

const toggleLoginMenu = function() {
  if (!loginMenuToggle) {
    return;
 } 
  return (<MenuLogIn closeFunc={setLoginMenuToggle}/>);
}

//========================================================================================================== JSX
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <button id="menu-btn" onClick={handleMenuBtnClick}><i className="fas fa-bars"></i></button>
        <h1><i className="fas fa-balance-scale"></i> Goblin Market</h1>
        <SearchBar />
        <button id="act-btn" onClick={handleLoginBtnClick}><i className="fas fa-user-circle"></i></button>
        <button id="cart-btn" onClick={handleCartBtnClick}><i className="fas fa-shopping-cart"></i></button>
        
      </header>
      <main>
        {categoriesMenuSlideIn()}
        {cartMenuSlideIn()}
        {toggleLoginMenu()}
        <Inventory props={
        [{
        name: 'Authentic Terran Cats',
        price: '500',
        category: 'Live Animals',
        img: require("../media/placeholder.jpg"),
        bestSeller: true,
        onSale: false
        }]}
        />
       
      </main>
    </div>
  );
}

export default App;
