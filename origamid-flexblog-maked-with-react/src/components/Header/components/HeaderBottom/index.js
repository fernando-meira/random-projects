import React from 'react';

import { Container, LogoMenu, Logo, MenuItems } from './styles';

export default function HeaderBottom() {
  return (
    <Container>
      <LogoMenu>
        <Logo>
          <span>FlexBlog</span>
        </Logo>

        <MenuItems className="menuItems">
          <a href="Sobre">Sobre</a>

          <a href="Produtos">Produtos</a>

          <a href="Preço">Preço</a>

          <a href="Qualidade">Qualidade</a>
        </MenuItems>
      </LogoMenu>
    </Container>
  );
}
