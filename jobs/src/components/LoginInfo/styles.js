import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #7c78d7;

  ${media.lessThan('small')`
    max-width: 100%;
    height: 50vh;
  `}
`;

export const LogoDescription = styled.div`
  padding: 1rem;
  margin-top: 10rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 18rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-bottom: 10rem;

    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  h2 {
    color: #fff;
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
  }

  ${media.lessThan('small')`
    margin: auto;

    img {
      max-width: 10rem;
    }

    h1 {
      margin-bottom: 1rem;

      font-size: 1rem;
    }

    h2 {
      width: 100%;

      font-size: 1.5rem;
      text-align: center;
    }

  `}
`;
