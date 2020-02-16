import styled from 'styled-components';

export const Container = styled.footer`
  margin: auto;
  max-width: 600px;

  display: flex;
  flex-direction: row;

  background: ${({ color }) => color};

  div {
    max-width: 50%;

    display: flex;
    align-items: flex-start;

    p {
      padding: 0;

      color: #999;
      font-weight: 600;
      text-transform: uppercase;
    }

    .spanItems {
      max-width: 100%;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      span {
        margin: 5px;
        border-radius: 20px;
        border: 1px solid orange;

        color: orange;
        padding: 5px 10px;
        font-size: 0.7rem;
      }
    }
  }
`;
