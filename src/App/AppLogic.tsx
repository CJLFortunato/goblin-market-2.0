
// APIS====================================================

import { Product } from "./Interfaces";

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

// PATCH(?) Cart when user adds products to it

// POST clear all items in Cart

// Filtering================================================

// get current category and search term

// Grab catalog, filter it by category and search term

// return filtered array


