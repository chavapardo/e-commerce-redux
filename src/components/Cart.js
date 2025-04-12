import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  // Accede al estado del carrito
  const cartItems = useSelector((state) => state.cart.items);

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>Precio: ${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;