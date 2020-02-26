import styled from 'styled-components';

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

  input {
    width: 80%;
    padding: 1rem;
    height: 2.5rem;
    margin-bottom: 2rem;
    border: 1px solid #7c78d7;
    border-radius: 20px;
  }

  button {
    width: 10rem;
    border: none;
    padding: 1rem;
    border-radius: 25px;

    color: #fff;
    background: #7c78d7;
  }
`;
