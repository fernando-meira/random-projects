import styled from 'styled-components';
import { darken } from 'polished';
import media from 'styled-media-query';

export const Container = styled.div`
  height: auto;
  max-width: 50%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 4rem;
    font-weight: 100;
    margin: 10rem 0 2rem 0;
  }
`;

export const FormLogin = styled.form`
  width: 30rem;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  > span {
    width: 80%;
    margin-top: -1.5rem;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;

    a {
      color: #333;
      font-size: 0.8rem;
      text-decoration: none;
    }

    ${media.lessThan('small')`
      width: 23rem;
    `}
  }

  button {
    width: 10rem;
    border: none;
    padding: 1rem;
    /* border-radius: 25px; */

    color: #fff;
    background: #7c78d7;
    transition: background 0.5s;

    &:hover {
      background: ${darken(0.1, '#7c78d7')};
    }
  }
`;

export const InputModel = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  height: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid #7c78d7;
  /* border-radius: 1.5rem; */

  svg {
    margin: 0.5rem;
  }

  input {
    flex: 1;
    border: none;

    background: transparent;
  }
`;
