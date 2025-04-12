import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Lista de productos en el carrito
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Agrega un producto al carrito
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Elimina un producto del carrito
    },
    clearCart: (state) => {
      state.items = []; // Limpia el carrito
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;