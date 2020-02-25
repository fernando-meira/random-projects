import React from 'react';

import { LoginForm, LoginInfo } from '../../components';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <LoginInfo />
      <LoginForm />
    </Container>
  );
}
