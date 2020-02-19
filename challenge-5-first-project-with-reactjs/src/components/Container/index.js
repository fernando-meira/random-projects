import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  padding: 30px;
  max-width: 43.75rem;
  border-radius: 0.25rem;

  background-color: #fff;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

  h1 {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
