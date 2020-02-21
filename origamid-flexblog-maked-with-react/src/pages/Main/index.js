import React from 'react';

import { Container } from './styles';

import { About, Products, Price } from '../../components';

export default function Main() {
  return (
    <Container>
      <About />
      <Products />
      {/* <Price /> */}
    </Container>
  );
}
