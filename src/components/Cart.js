import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Carrito Compras</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => dispatch(removeFromCart(product))}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;