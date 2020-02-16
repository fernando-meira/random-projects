import React, { useState } from 'react';

import { Aside } from '../../components';

import { Container } from './styles';

export default function Footer() {
  const [items] = useState([
    'DIY',
    'Vendas',
    'Aplicativo',
    'Lorem',
    'Ipsum',
    'Amet',
  ]);

  return (
    <Container color="">
      <div>
        <p>Tags:</p>

        <div className="spanItems">
          {items.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <Aside isHorizontal />
    </Container>
  );
}
