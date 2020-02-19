import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo-facebook" />
      <nav>
        <a href="https://www.facebook.com">Meu Perfil</a>

        <FaUserCircle />
      </nav>
    </Container>
  );
}
