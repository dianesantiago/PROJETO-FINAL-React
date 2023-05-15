import React from 'react';
import './Header.css';
import logo2 from '../../.././logo2.png';
import { ImHome, ImCalendar, ImCreditCard, ImCart } from 'react-icons/im';

function Header() {
  return (
    <header className="teste">
      <nav>
        <ul>
          <li>
            <br></br>
            <span className="icon">
              <ImHome size={40} />
            </span>{' '}
            <a href="/">
              Home <br></br>
            </a>
          </li>
          <li>
            <br></br>
            <span className="icon">
              <ImCalendar size={40} />
            </span>{' '}
            <a href="/calendario">Calendário</a>
          </li>
          <li>
            <br></br>
            <span className="icon">
              <ImCreditCard size={40} />
            </span>{' '}
            <a href="promocoes">Promoções</a>
          </li>
          <li>
            <br></br>
            <span className="icon">
              <ImCart size={40} />
            </span>{' '}
            <a href="historico">Compras</a>
          </li>
        </ul>
      </nav>
      <br></br>
      <br></br>

      <br></br>
    </header>
  );
}
export default Header;
