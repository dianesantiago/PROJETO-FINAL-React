import React from 'react';
import Header from '../Header';
import Footer from '../../Footer';
import './Home.css';
import imagem01 from '../../../business-benefits_boxes-n-laptop.png';

function Home() {
  return (
    <div className="margem">
      <h1>Olá, seja bem-vindo(a)!</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={imagem01} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default Home;
