import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

import { Container, HeaderTop, HeaderBottom } from './styles';

export default function BoxContainer() {
  return (
    <Container>
      <HeaderTop>
        <h1>Design Better. Faster. Together.</h1>

        <h2>
          Lorem Ipsum é simplesmente uma pequena simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizada desde o século XVII
          amet dollor aint.
        </h2>
      </HeaderTop>

      <div>
        <HeaderBottom>
          <div>
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
          </div>

          <img src="https://i.pravatar.cc/40?img=48" alt="perfil" />
        </HeaderBottom>
      </div>
    </Container>
  );
}
