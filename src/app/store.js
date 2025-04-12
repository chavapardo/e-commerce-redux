import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'; // Se recomienda usar slices con Redux Toolkit
import cartReducer from '../features/cart/cartSlice'; // Se recomienda usar slices con Redux Toolkit

export const store = configureStore({
  reducer: {
    products: productsReducer, // Reducer para productos
    cart: cartReducer, // Reducer para el carrito
  },
});

export default store;