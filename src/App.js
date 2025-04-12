import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Alimentos from './components/Alimentos';
import ProductsList from './components/ProductsList'; // Importa el componente ProductsList
import Cart from './components/Cart'; // Importa el componente Cart
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/productos" element={<ProductsList />} /> {/* Nueva ruta para productos */}
          <Route path="/carrito" element={<Cart />} /> {/* Nueva ruta para carrito */}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;