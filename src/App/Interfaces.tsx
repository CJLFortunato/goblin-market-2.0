export interface Product {
    name: string;
    price: string | number;
    category: string;
    img: any;
    bestSeller: boolean;
    onSale: boolean;
}

export type CloseFunction = React.Dispatch<React.SetStateAction<boolean>>;