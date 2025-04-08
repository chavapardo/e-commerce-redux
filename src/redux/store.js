import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer'; // Importa el reducer de productos
import cartReducer from './reducers/cartReducer'; // Importa el reducer de carrito

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
