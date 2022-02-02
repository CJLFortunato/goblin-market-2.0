import React from 'react';
import { Product } from '../../App/Interfaces';

interface Props {
    item: Product;
    key: number;
}

export function Item(props: Props) {

    const item = props.item;

    const onClickHandler = (inventoryItem: Product) => {
    }

    return(
        <article className="item">
            <h3 className="item-title">{item.name}</h3>
            <img src={item.img.default} alt=""></img>
            <p className="price">{props.item}Œ</p>
            <button id="add-cart-btn" onClick={() => onClickHandler(item)}>Add to Cart</button>
        </article>
    );
}