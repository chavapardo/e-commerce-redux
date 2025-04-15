import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  // Accede al estado del carrito
  const cartItems = useSelector((state) => state.cart.items);

  // Depuración: verifica los datos en el carrito
  console.log('Productos en el carrito:', cartItems);

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img
              src={item.image || 'https://via.placeholder.com/100'} // Imagen por defecto si no hay URL
              alt={item.title || 'Producto sin título'}
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />
            <div>
              <h2>{item.title}</h2>
              <p>Precio: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;