import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.4rem;
  max-width: 20rem;
  margin: 2rem auto;
  border-radius: 1rem;

  color: #909090;
  background-color: #fff;
  box-shadow: 0 0 1.5rem #333;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    color: #222;
  }

  li {
    display: flex;
    align-items: center;

    margin: 5px 0;
    list-style: none;

    button {
      border: none;
      border-radius: 1rem;
      padding: 0.1rem 0.3rem;

      background-color: transparent;

      svg {
        width: 1.5rem;
        height: 1.5rem;

        color: orange;
      }
    }
  }

  p {
    margin: 5px 0;
    padding: 0.2rem;
    text-align: center;
    border-radius: 1.5rem;

    color: #fff;
    background-color: orange;
  }

  input {
    margin-right: 5px;
    border-radius: 1rem;
    padding: 0.1rem 0.3rem;
    border: 1px solid orange;
  }

  button {
    border-radius: 1rem;
    padding: 0.1rem 0.3rem;
    border: 1px solid orange;

    color: #fff;
    cursor: pointer;
    background: orange;
  }
`;
