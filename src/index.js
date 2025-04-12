import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia a 'react-dom/client' para React 18
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Crea el root con la nueva API de React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);