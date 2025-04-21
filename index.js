import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si tienes estilos globales
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


