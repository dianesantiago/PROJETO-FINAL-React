import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PromoPage from './Components/pages/Promo';
import Home from './Components/pages/Home';
import PaginaCalendario from './Components/pages/PaginaCalendario';
import PaginaHistorico from './Components/pages/Historico';
import Header from './Components/pages/Header';
import logo2 from './logo2.png';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <img src={logo2} className="App-logo2 margem" alt="logo2" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promocoes" element={<PromoPage />} />
          <Route path="/calendario" element={<PaginaCalendario />} />
          <Route path="/historico" element={<PaginaHistorico />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
