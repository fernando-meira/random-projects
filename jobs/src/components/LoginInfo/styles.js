import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #7c78d7;
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
`;
