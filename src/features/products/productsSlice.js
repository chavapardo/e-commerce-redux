import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Importa axios

// Acción asíncrona para obtener datos de la API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products'); // Actualiza con tu API si es diferente
  return await response.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: [], // Estado inicial vacío
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload; // Actualiza el estado con los datos obtenidos
    });
  },
});

export default productsSlice.reducer;