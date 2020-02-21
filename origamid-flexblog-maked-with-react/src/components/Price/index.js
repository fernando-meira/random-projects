import React from 'react';

import { Container, Block } from './styles';

export default function Price() {
  return (
    <Container>
      <Block>
        <h2>Cobre</h2>

        <span>
          R$ <p>19,00</p>
        </span>

        <ul>
          <li>Planos Limitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
        </ul>

        <a href="a">Comprar</a>
      </Block>

      <Block>
        <h2>Prata</h2>

        <span>
          R$ <p>39,00</p>
        </span>

        <ul>
          <li>Planos Limitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compras Exclusivas</li>
        </ul>

        <a href="#">Comprar</a>
      </Block>

      <Block>
        <h2>Ouro</h2>

        <span>
          R$ <p>79,00</p>
        </span>

        <ul>
          <li>Planos Limitados</li>
          <li>Acesso Restrito</li>
          <li>Conteúdo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compras exclusivas</li>
          <li>Download dos Items</li>
        </ul>

        <a href="#">Comprar</a>
      </Block>
    </Container>
  );
}
