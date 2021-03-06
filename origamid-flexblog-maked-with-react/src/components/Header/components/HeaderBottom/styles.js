import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.header`
  width: 100%;
  height: auto;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);

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
    font-weight: 700;
    font-size: 2.5rem;
  }

  ${media.lessThan('medium')`
    padding: 1rem;
    margin: 0 auto;
  `}
`;

export const MenuItems = styled.div`
  flex: row;
  display: flex;
  padding: 1rem 0;

  a {
    margin-right: 1rem;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }

  ${media.lessThan('medium')`
    padding: 0 0 1rem 0;
    a {
      font-weight: 500;
      padding-bottom: 1rem;
    }
  `}

  ${media.lessThan('small')`
    a {
      padding: 0;
      font-size: 1rem;
    }
  `}
`;
