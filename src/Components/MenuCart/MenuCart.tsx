import React from "react";
import { CloseFunction } from "../../App/Interfaces";

interface Props {
    closeFunc: CloseFunction;
}

export function MenuCart({closeFunc}: Props): JSX.Element {

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
              {Array(100).map((_, index) => (
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
            return 0;
        }
     

    return(
        <div className="cart">
            <button id="cart-close" onClick={onClose}>X</button>
            <h3 className="cart-h3 menu-h3" id="cart-title">Cart</h3>
            <ul>
              {}     
            </ul>
            <h3 className="cart-h3 total menu-h3">Total: {total()}Œ</h3>
            <button className="pay-btn">Proceed to payment</button>
        </div>
    );
}