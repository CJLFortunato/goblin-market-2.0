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
            
        </div>
    );
}

//{allItems.map((item, index) => <Item item={item} key={index}/>)}