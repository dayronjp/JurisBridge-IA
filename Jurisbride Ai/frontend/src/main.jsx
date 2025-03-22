import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './containers/Home';
import Register from './containers/Register/register';
import Conectse from './containers/Conectese/conecte';
import Globalstyles from './styles/globalstyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Renderização do frontend
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/conectese" element={<Conectse />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);