import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCircle, FaUnlockAlt } from 'react-icons/fa';

import { Container, FormLogin, InputModel } from './styles';

export default function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <p>Log In</p>
      <FormLogin>
        <InputModel>
          <FaUserCircle size="24" color="1d2433" />
          <input type="text" placeholder="exemplo@email.com" />
        </InputModel>

        <InputModel>
          <FaUnlockAlt size="24" color="1d2433" />
          <input type="password" placeholder="********" />
        </InputModel>

        <span>
          <Link to="http://">Esqueceu a senha?</Link>
        </span>

        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>
      </FormLogin>
    </Container>
  );
}
