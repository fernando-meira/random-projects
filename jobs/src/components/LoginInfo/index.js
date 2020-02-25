import React from 'react';

import LogoInfo from '../../assets/images/logoInfo.svg';

import { Container, LogoDescription } from './styles';

export default function LoginInfo() {
  return (
    <Container>
      <LogoDescription>
        <img src={LogoInfo} alt="Logo Fatec Jobs" />

        <h1>Bem vindo ao Fatec Jobs</h1>

        <h2>
          Nessa plataforma você encontrará as melhores oportunidades de estágio.
        </h2>
      </LogoDescription>
    </Container>
  );
}
