import React from 'react';

import logo from '../../assets/images/logoInfo.svg';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <p>Carregando</p>
    </Container>
  );
}
