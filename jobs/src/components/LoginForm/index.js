import React from 'react';
import { FaUserCircle, FaUnlockAlt } from 'react-icons/fa';

import { Container, FormLogin } from './styles';

export default function LoginForm() {
  return (
    <Container>
      <p>Log In</p>
      <FormLogin>
        <div>
          <FaUserCircle size="24" color="7c78d7" />
          <input
            type="text"
            placeholder="fernando.santos121@fatecitapetininga.edu.br"
          />
        </div>
        <div>
          <FaUnlockAlt size="24" color="7c78d7" />
          <input type="password" placeholder="********" />
        </div>

        <button type="submit">Entrar</button>
      </FormLogin>
    </Container>
  );
}
