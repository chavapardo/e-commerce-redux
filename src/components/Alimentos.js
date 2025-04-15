import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';

const AlimentosContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Alimentos = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Cargar productos al montar el componente
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,           // ID del producto
      title: product.title,     // Título del producto
      price: product.price,     // Precio del producto
      image: product.image,     // URL de la imagen
    }));
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No hay productos disponibles o están cargando...</p>;
  }

  return (
    <AlimentosContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton onClick={() => handleAddToCart(product)}>
              Agregar al Carrito
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </AlimentosContainer>
  );
};

export default Alimentos;