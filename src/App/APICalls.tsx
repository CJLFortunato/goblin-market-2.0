
// APIS====================================================

import { Product, CartProduct, RequestBody } from "./Interfaces";

// GET products from server at start
export const APIGetProduct = async (): Promise<Product[]> => {

    const res = await fetch('http://localhost:5000/products').then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Request failed");

    }, networkError => console.log(networkError.message))
    
    .then((jsonResponse): Product[] => {
      return jsonResponse;
    })

    return res;
};

// GET cart state at start

export const APIGetCart = async (): Promise<CartProduct[]> => {

  const res = await fetch('http://localhost:5000/cart').then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error("Request failed");

  }, networkError => console.log(networkError.message))
  
  .then((jsonResponse): CartProduct[] => {
    return jsonResponse;
  })

  return res;
};

// PATCH(?) Cart when user adds products to it

export const APIPatchCart = async (requestBody: CartProduct): Promise<CartProduct[]> => {

  const res: CartProduct[] = await fetch('http://localhost:5000/cart', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  }, (networkError: any) => {
    console.log(networkError.message);
    alert("Something has gone wrong. Please try again.");
  })
  .then((jsonResponse: CartProduct[]) => {
    return jsonResponse;
  })

  return res;

};

// POST clear all items in Cart





 



