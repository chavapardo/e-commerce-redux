const initialProductsState = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Alimento 1', price: 50 },
    { id: 5, name: 'Alimento 2', price: 75 },
  ];
  
  const productsReducer = (state = initialProductsState, action) => {
    return state;
  };
  
  export default productsReducer;