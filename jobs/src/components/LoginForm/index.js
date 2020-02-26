import React from 'react';
import { FaUserCircle, FaUnlockAlt } from 'react-icons/fa';

import { Container, FormLogin } from './styles';

export default function LoginForm() {
  return (
    <Container>
      <p>Log In</p>
      <FormLogin>
        <input
          type="text"
          placeholder="fernando.santos121@fatecitapetininga.edu.br"
        />
        <input type="password" placeholder="********" />

        <button type="submit">Entrar</button>
      </FormLogin>
    </Container>
  );
}
