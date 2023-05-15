import React from 'react';
import './Promo.css';
import presente from '../../.././presente.png';
import pepsico from '../../.././pepsico.png';
import Header from '../Header';
import { BsPersonHearts, BsHearts } from 'react-icons/bs';

import Footer from '../../Footer';

function PromoPage() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        <h1>
          <span className="icon">
            <BsPersonHearts />
          </span>{' '}
          O "Dia das Mães" está chegando, <br></br>
          veja nossas indicações!
          <br></br>
          <br></br>
          <br></br>Que tal uma linda cesta recheada com nossos produtos?
          <span className="icon">
            <BsHearts />
          </span>{' '}
          <br></br>
          <br></br>
          <br></br>
        </h1>
      </p>
      <br></br>
      <img src={presente} alt="" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={pepsico} />
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
export default PromoPage;
