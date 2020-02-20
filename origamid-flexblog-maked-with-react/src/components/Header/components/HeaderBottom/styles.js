import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.header`
  width: 100%;
  height: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);

  display: flex;

  background: #2c70ff;
`;

export const LogoMenu = styled.div`
  width: 60rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    height: auto;

    flex-direction: column;
  `}
`;

export const Logo = styled.div`
  margin-left: 1rem;
  span {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
  }

  ${media.lessThan('medium')`
    margin: 0 auto;
  `}
`;

export const MenuItems = styled.div`
  flex: row;
  display: flex;
  padding: 1rem 0;

  a {
    padding-left: 1rem;

    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }

  ${media.lessThan('medium')`
    a {
      font-weight: 500;
    }
  `}

  ${media.lessThan('small')`
    a {
      font-size: 1rem;
    }
  `}
`;
