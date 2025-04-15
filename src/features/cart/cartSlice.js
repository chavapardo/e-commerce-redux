import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [], // Estado inicial como un array vacío
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Agregar producto al carrito
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Eliminar producto por ID
    },
    clearCart: () => {
      return []; // Vaciar el carrito
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;