import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart } from '../redux/actions';

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ItemName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Obtener el carrito del estado global
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <CartContainer>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price}</ItemPrice>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
              Eliminar
            </RemoveButton>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;