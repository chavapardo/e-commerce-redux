import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// AsyncThunk para obtener productos de la API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);

// Slice para manejar el estado de los productos
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Lista de productos
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null, // Mensaje de error
  },
  reducers: {}, // Acciones adicionales si las necesitas
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exportar el reducer para integrarlo en el store
export default productsSlice.reducer;