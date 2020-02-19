import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.4rem;
  margin: 1.5rem 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

  color: #4a4a4a;
  background: #fff;

  img {
    width: 2.5rem;
    height: 2.5rem;

    border-radius: 50%;
  }

  div {
    margin: 1rem 0;

    font-size: 1rem;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-weight: 600;
    font-size: 1.5rem;
  }

  span {
    font-size: 1rem;
    color: #999;
  }
`;
