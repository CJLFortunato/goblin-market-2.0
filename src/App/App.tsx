import React, { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { Inventory } from '../Components/Inventory/Inventory';
import { MenuCtg } from '../Components/MenuCtg/MenuCtg';
import { MenuCart } from '../Components/MenuCart/MenuCart';
import { MenuLogIn } from '../Components/MenuLogin/MenuLogin';
import { APIGetProduct, APIGetCart, APIPatchCart } from './APICalls';
import { Product, CartProduct, RequestBody } from './Interfaces';

function App(): JSX.Element {
  const [categMenuToggleSlideIn, setCategMenuToggleSlideIn] = useState(false);
  const [cartMenuToggleSlideIn, setCartMenuToggleSlideIn] = useState(false);
  const [loginMenuToggle, setLoginMenuToggle] = useState(false);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [cartContent, setCartContent] = useState<CartProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const serverResponse = await APIGetProduct();
      setCatalog(serverResponse);
    };
    getProducts();

    const getCart = async () => {
      const serverResponse = await APIGetCart();
      setCartContent(serverResponse);
    };
    getCart();
  }, []);

  const getCurrentCategory = (ctg: string) => {
    setCurrentCategory(ctg);
  };
  
  const getCurrentSearchTerm = (term: string) => {
    setCurrentSearchTerm(term);
    
  };

  const addToCart = async (itemName: string, itemPrice: number) => {

    

    const itemToAdd: CartProduct = {
      name: itemName,
      price: itemPrice,
      quantity: 1
    }
    const requestBody: RequestBody = {cart :[...cartContent, itemToAdd]};



    const serverResponse = await APIPatchCart(itemToAdd);

    console.log(requestBody);

    setCartContent(serverResponse);
  };
  
  
  //======================================================================================================== Click Handlers
  const handleMenuBtnClick = function() {
    setCategMenuToggleSlideIn(!categMenuToggleSlideIn);
    
  }
  const handleCartBtnClick = function() {
    setCartMenuToggleSlideIn(!cartMenuToggleSlideIn);
    
  }
  const handleLoginBtnClick = function() {
    setLoginMenuToggle(!loginMenuToggle);
  }
//=========================================================================================================== Toggle Functions

 const categoriesMenuSlideIn = function() {
   if (!categMenuToggleSlideIn) {
     return;
  } 
  return (<MenuCtg closeFunc={setCategMenuToggleSlideIn} categoryFilter={getCurrentCategory}/>);
 }

 const cartMenuSlideIn = function() {
  if (!cartMenuToggleSlideIn) {
    return;
 } 
  return (<MenuCart closeFunc={setCartMenuToggleSlideIn} cartContent={cartContent}/>);
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
        <SearchBar searchFilter={getCurrentSearchTerm}/>
        <button id="act-btn" onClick={handleLoginBtnClick}><i className="fas fa-user-circle"></i></button>
        <button id="cart-btn" onClick={handleCartBtnClick}><i className="fas fa-shopping-cart"></i></button>
        
      </header>
      <main>
        {categoriesMenuSlideIn()}
        {cartMenuSlideIn()}
        {toggleLoginMenu()}
        <Inventory props={catalog}
        currentCategory={currentCategory}
        currentSearchTerm={currentSearchTerm}
        addToCart={addToCart}
        />
       
      </main>
    </div>
  );
}

export default App;
