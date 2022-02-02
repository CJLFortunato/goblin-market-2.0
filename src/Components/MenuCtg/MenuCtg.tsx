import React from "react";
import { CloseFunction } from "../../App/Interfaces";

interface Props {
    closeFunc: CloseFunction;
}


export function MenuCtg({closeFunc}: Props): JSX.Element {

    const onCategoryClickHandler = (e: any) => {
        const userInput = e.target.innerHTML;
        
    };

    const onClearCategoryHandler = () => {
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
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Technology</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Reagents</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Artifacts</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Live Animals</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Weapons</button></li>  
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Drugs</button></li>
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>Best Sellers</button></li> 
              <li><button className="cat-btn" onClick={onCategoryClickHandler}>On Sale</button></li>     
            </ul>
        </div>
    );
}