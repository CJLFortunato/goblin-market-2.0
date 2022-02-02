import React from 'react';
import { Product } from '../../App/Interfaces';
//import image from '../../media/placeholder.jpg';

interface Props {
    name: string; price: string | number; category: string; img: any; bestSeller: boolean; onSale: boolean;
    key: number;
}

export function Item(props: Props) {

    const item: Product = {
        name: props.name,
        price: props.price,
        category: props.category,
        img: props.img,
        bestSeller: props.bestSeller,
        onSale: props.onSale
    };

   

    const onClickHandler = (inventoryItem: Product) => {
    }

    return(
        <article className="item">
            <h3 className="item-title">{props.name}</h3>
            <img src={require("./placeholder.jpg")} alt=""></img>
            <p className="price">{props.price}Œ</p>
            <button id="add-cart-btn" onClick={() => onClickHandler(item)}>Add to Cart</button>
        </article>
    );
}