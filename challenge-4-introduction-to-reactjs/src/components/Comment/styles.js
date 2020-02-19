import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #eee;

  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }

  div {
    padding: 1rem;
    width: 37.5rem;
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    background: #eee;
    p {
      font-weight: 600;
      text-transform: capitalize;

      span {
        font-weight: 300;
        margin-left: 0.5rem;
        text-transform: none;
      }
    }
  }
`;
