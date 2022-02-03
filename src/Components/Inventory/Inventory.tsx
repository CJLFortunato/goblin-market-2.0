import React, { useEffect } from 'react';
import { Item } from '../Item/Item';
import { Product } from '../../App/Interfaces';


interface Props {
    props: Product[];
    currentCategory: string;
    currentSearchTerm: string;
}

export function Inventory(props: Props) {

    const allItems = props.props;
    const currentCategory: string = props.currentCategory;
    const currentSearchTerm: string = props.currentSearchTerm;

    const inventoryFilterFunc = (productsList: Product[]): Product[] => {

        if (currentSearchTerm.length > 0 && currentCategory.length > 0) {
      
          const temp = productsList.filter((item) => item.category === currentCategory);
          
          return temp.filter((item) => item.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
          ); 
        }
        else if (currentCategory.length > 0) {
      
          if (currentCategory === "Best Sellers") {
              return productsList.filter((item) => item.bestSeller === true);
          }
      
          if (currentCategory === "On Sale") {
              return productsList.filter((item) => item.onSale === true);
          }
      
          return productsList.filter((item) => item.category === currentCategory);
        } 
        else if (currentSearchTerm.length > 0) {
      
          return productsList.filter((item) => item.name.toLowerCase().includes(currentSearchTerm.toLowerCase()));
        } 
        else {
          return productsList;
        }  
    }

    const filteredItems = inventoryFilterFunc(allItems);

    return(
        <div className="inventory">
            {filteredItems.map((item, index) => <Item name={item.name} price={item.price} category={item.category} img={item.img} bestSeller={item.bestSeller} onSale={item.onSale} key={index}/>)}
        </div>
    );
}

