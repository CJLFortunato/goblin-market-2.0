import React, { useEffect } from 'react';
import { Item } from '../Item/Item';
import { Product } from '../../App/Interfaces';

interface Props {
    props: Product[];
}

export function Inventory(props: Props) {

    const allItems = props.props;

    return(
        <div className="inventory">
            {allItems.map((item, index) => <Item name={item.name} price={item.price} category={item.category} img={item.img} bestSeller={item.bestSeller} onSale={item.onSale} key={index}/>)}
        </div>
    );
}

