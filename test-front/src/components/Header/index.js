import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

import { Container, HeaderTop, HeaderBottom } from './styles';

export default function Header() {
  return (
    <Container>
      <HeaderTop>
        <img src="https://i.pravatar.cc/40?img=48" alt="perfil" />

        <h1>Design Better. Faster. Together.</h1>

        <h2>
          The digital product design platform powering the world's best user
          experiences
        </h2>
      </HeaderTop>
      <HeaderBottom>
        <p>
          Categoria: <span>Por onde começar</span>
        </p>
        <p>
          <span>
            <FaRegCalendarAlt />
          </span>
          01/08/2019
        </p>
        <p>
          <span>
            <MdAccessTime />
          </span>
          7 min de leitura
        </p>
      </HeaderBottom>
    </Container>
  );
}
