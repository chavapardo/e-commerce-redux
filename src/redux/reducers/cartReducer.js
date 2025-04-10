const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('Producto agregado al carrito:', action.payload); // Verifica el producto
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;