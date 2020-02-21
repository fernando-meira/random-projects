import React, { useState } from 'react';

import { Container } from './styles';

import product1 from '../../assets/produtos1.jpg';
import product2 from '../../assets/produtos2.jpg';
import product3 from '../../assets/produtos3.jpg';

export default function Products() {
  const [items, setItems] = useState([
    {
      id: 1,
      color: 'Purple',
      img: product1,
    },
    {
      id: 3,
      color: 'Blue',
      img: product3,
    },
    {
      id: 2,
      color: 'Pink',
      img: product2,
    },
  ]);

  return (
    <Container>
      <h2>Produtos</h2>
      <div>
        {items.map(item => (
          <div key={item.id}>
            <p>{item.color}</p>
            <img src={item.img} alt={item.id} />
          </div>
        ))}
      </div>
    </Container>
  );
}
