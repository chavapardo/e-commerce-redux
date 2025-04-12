import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';

const ProductsList = () => {
  const dispatch = useDispatch();

  // Accede al estado de los productos
  const { items: products, status, error } = useSelector((state) => state.products);

  // Despacha fetchProducts cuando el componente se monta
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Muestra un estado de carga mientras se obtienen los productos
  if (status === 'loading') {
    return <p>Cargando productos...</p>;
  }

  // Muestra un mensaje de error si la petición falla
  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  // Renderiza la lista de productos con opción de agregar al carrito
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Agregar al Carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;