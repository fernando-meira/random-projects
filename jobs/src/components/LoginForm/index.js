import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle, FaUnlockAlt } from 'react-icons/fa';

import { Container, FormLogin, InputModel } from './styles';

export default function LoginForm() {
  return (
    <Container>
      <p>Log In</p>
      <FormLogin>
        <InputModel>
          <FaUserCircle size="24" color="7c78d7" />
          <input
            type="text"
            placeholder="fernando.santos121@fatecitapetininga.edu.br"
          />
        </InputModel>

        <InputModel>
          <FaUnlockAlt size="24" color="7c78d7" />
          <input type="password" placeholder="********" />
        </InputModel>

        <span>
          <Link to="http://">Esqueceu a senha?</Link>
          <Link to="http://">Não sabe como entrar?</Link>
        </span>

        <button type="submit">Entrar</button>
      </FormLogin>
    </Container>
  );
}
