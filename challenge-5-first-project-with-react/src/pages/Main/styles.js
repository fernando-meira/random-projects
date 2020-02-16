import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ errorInput }) => (errorInput ? '#f55' : '#eee')};

  flex: 1;

  font-size: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 2rem;

  li {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    span {
      margin: 0.5rem;

      color: #404040;
      font-size: 1rem;
      text-transform: capitalize;
    }

    a {
      color: #7159c1;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  border: 0;
  padding: 0 1rem;
  margin-left: 0.6rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #7159c1;

  ${({ loadingButton }) =>
    loadingButton &&
    css`
      cursor: not-allowed;
      opacity: 0.6;

      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
