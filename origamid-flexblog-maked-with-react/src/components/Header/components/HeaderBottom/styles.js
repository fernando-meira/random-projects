import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.header`
  width: 100%;
  height: auto;

  display: flex;

  background: #2c70ff;
`;

export const LogoMenu = styled.div`
  width: 60rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin-left: 1rem;
  span {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const MenuItems = styled.div`
  flex: row;
  display: flex;
  padding: 1rem;

  a {
    padding: 0.5rem;

    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;
