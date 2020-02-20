import styled from 'styled-components';

export const Container = styled.section`
  width: 60rem;
  margin: 0 auto;
  padding: 3.75rem 0;

  h2 {
    font-size: 3rem;
    margin: 0 0 1rem 1rem;
  }

  div {
    max-width: 100%;

    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      margin: 0.5rem;
      max-width: 18rem;
      border-top: 0.5rem solid pink;

      display: flex;

      background: #f7f7f7;

      p {
        padding: 3.75rem 1.25rem;

        color: #a4a4a4;
        font-size: 3rem;
        font-weight: 600;
      }

      img {
        max-width: 18rem;
      }
    }
  }
`;

export const Card = styled.div``;
