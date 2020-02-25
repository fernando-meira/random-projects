import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: #7c78d7;
`;

export const LogoDescription = styled.div`
  margin-top: 10rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 18rem;
  }

  h1 {
    margin-bottom: 10rem;

    color: #fff;
    font-size: 2rem;
  }

  h2 {
    color: #fff;
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
  }
`;
