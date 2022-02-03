import React from "react";
import { CloseFunction } from "../../App/Interfaces";


interface Props {
    closeFunc: CloseFunction;
    categoryFilter: (ctg: string) => void;
}


export function MenuCtg({closeFunc, categoryFilter}: Props): JSX.Element {

    const onCategoryClickHandler = (e: any) => {
        const userInput = e.target.innerHTML;
        categoryFilter(userInput);
    };

    const onClearCategoryHandler = () => {
        categoryFilter("");
    }

    const onClose = function() {
        closeFunc(false);
    };

    return(
        <div className="categories-menu">
            <button id="cat-close" onClick={onClose}>X</button>
            <h3 className="menu-h3">Categories</h3>
            <ul>
              <li><button className="cat-btn" onClick={onClearCategoryHandler}>All</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Potions & Consumables</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Ingredients</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Equipment</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Books</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>5</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>6</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Best Sellers</button></li> 
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>On Sale</button></li>     
            </ul>
        </div>
    );
}