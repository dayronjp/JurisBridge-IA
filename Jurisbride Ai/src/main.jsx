import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './containers/Home';
import Register from './containers/Register/register';
import Globalstyles from './styles/globalstyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        {/* Adicione outras rotas aqui se necessário */}
      </Routes>
    </Router>
  </React.StrictMode>
);
