import React from "react";
import { CloseFunction, Product, CartProduct } from "../../App/Interfaces";

interface Props {
    closeFunc: CloseFunction;
    cartContent: CartProduct[];
}

export function MenuCart({closeFunc, cartContent}: Props): JSX.Element {

    const onInputChangeHandler = (name: string, input: string) => {
        if (input ==='') {
            return;
        }
        
    }

    const onRemoveHandler = (name: string) => {
      
    }

    const onClose = function() {
        closeFunc(false);
    };

    function createCartItem(item: any, name: string) {
        
        if (item.quantity === 0) {
          return;
        }
    
        return (
          <li key={name} className="cart-item">
            <p className="cart-p">{name}</p>
            <select
              className="item-quantity"
              value={item.quantity}
              onChange={(e) => {
                onInputChangeHandler(name, e.target.value);
              }}
            >
              {[...Array(100)].map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
            <button id="cart-item-delete-btn" onClick={() => onRemoveHandler(name)}>X</button>
          </li>
        );

        
      }
        const total = function() {
          let sum: number = 0;
          const prices = Object.keys(cartContent).forEach((item: any) => {
            let price = cartContent[item].price;
            let quantity = cartContent[item].quantity;
            sum += price * quantity;
          });
            return sum ? sum : 0;
        }
     

    return(
        <div className="cart">
            <button id="cart-close" onClick={onClose}>X</button>
            <h3 className="cart-h3 menu-h3" id="cart-title">Cart</h3>
            <ul>
              {cartContent.map(item=> createCartItem(item, item.name))}     
            </ul>
            <h3 className="cart-h3 total menu-h3">Total: {total()}Œ</h3>
            <button className="pay-btn">Proceed to payment</button>
        </div>
    );
}