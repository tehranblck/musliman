//counterSlice.jsx

"use client"; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/models/ui/Product";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [

  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(product => product.id === newProduct.id);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
     const existingProduct = state.products.find(product => product.id === action.payload);
     if (existingProduct) {
       existingProduct.quantity = (existingProduct.quantity || 0) + 1;
     }    

      
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.products.find(product => product.id === action.payload);
      if (existingProduct && existingProduct.quantity !== undefined && existingProduct.quantity >= 1) {
        existingProduct.quantity = (existingProduct.quantity || 0) - 1;
      }
    },    
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
});

export const { addProduct, removeProduct,increaseQuantity,decreaseQuantity } = productSlice.actions;

export default productSlice.reducer;
