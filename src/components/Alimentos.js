import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../redux/actions';

const AlimentosContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Alimentos = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <AlimentosContainer>
      <h1>Alimentos</h1>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
          </ProductItem>
        ))}
      </ProductList>
    </AlimentosContainer>
  );
};

export default Alimentos;