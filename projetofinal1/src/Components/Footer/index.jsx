import React from 'react';
import './Footer.css';
import { BiCopyright } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="footer">
      <p>
        <span className="icon">
          <BiCopyright />
        </span>{' '}
        2023 GRUPO 2 S.A. Todos os direitos reservados.
      </p>
      <p>
        Beba com moderação. Não compartilhe este conteúdo com menores de idade.
      </p>
    </footer>
  );
}
export default Footer;
