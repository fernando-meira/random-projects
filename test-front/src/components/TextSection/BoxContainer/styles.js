import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
  border-radius: 8px;

  background: #fff;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderTop = styled.div`
  display: flex;
  padding: 40px 40px 0;
  flex-direction: column;
  img {
    border-radius: 50%;
  }

  h1 {
    padding: 0 0 20px 0;

    color: #222;
    font-weight: 400;
    text-transform: uppercase;
  }

  h2 {
    line-height: 1.4;

    color: #999;
    font-weight: 100;
    font-size: 0.8rem;
  }
`;

export const HeaderBottom = styled.div`
  padding: 10px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-transform: uppercase;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin-right: 10px;

    display: flex;
    flex-wrap: nowrap;

    font-size: 0.5rem;
    span {
      margin: 0 5px;
      color: orange;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
