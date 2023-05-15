import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calendario.css';
import { BiCopyright, BiCalendar } from 'react-icons/bi';
import MyModal from '../../Modal';

function Feriados() {
  const [feriados, setFeriados] = useState([]);
  const date = new Date();
  const anoatual = date.getFullYear();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://brasilapi.com.br/api/feriados/v1/' + anoatual,
      );
      setFeriados(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="calendario">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>
        Atenção! <br></br>Adiante a visita com o seu representante.
        <br></br>Ponto facultativo em: 8 de Junho - CORPUS CHRISTI.
        <br></br>
        <br></br>
        <br></br>
      </h1>
      <span className="icon">
        <BiCalendar size={70} />
      </span>{' '}
      <br></br>
      <br></br>
      <h2>DATAS COMEMORATIVAS</h2>
      <ul>
        {feriados.map((feriado) => (
          <li key={feriado.date}>
            {feriado.date} || {feriado.name}
          </li>
        ))}
        <br></br>
        <br></br>
      </ul>
    </div>
  );
}

export default Feriados;
