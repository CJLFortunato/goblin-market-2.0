export interface Product {
    name: string;
    price: number;
    category: string;
    img: any;
    bestSeller: boolean;
    onSale: boolean;
}

export type CloseFunction = React.Dispatch<React.SetStateAction<boolean>>;

export interface CartProduct {
    name: string;
    price: number;
    quantity: number;
}

export interface RequestBody {
    cart: CartProduct[]
  };