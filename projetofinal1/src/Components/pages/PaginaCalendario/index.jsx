import React from 'react';
import Header from '../Header';
import Feriados from '../Calendario';
import anual from '../../../anual.png';
import Footer from '../../Footer';
import './PaginaCalendario.css';

function PaginaCalendario() {
  return (
    <div className="fraseAlerta">
      <Header />
      <Feriados />
      <br></br>
      <br></br>
      <br></br>
      <img className="borda" src={anual} width="800px" />
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
export default PaginaCalendario;
