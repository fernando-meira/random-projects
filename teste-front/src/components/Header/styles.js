import styled from 'styled-components';

export const Container = styled.header`
  max-width: 900px;
  margin: 40px auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    border-radius: 50%;
  }

  h1 {
    padding: 15px 0 10px;

    font-weight: 400;
    text-transform: uppercase;
  }

  h2 {
    color: #999;
    font-weight: 100;
    font-size: 0.9rem;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 60px;

  text-transform: uppercase;

  p {
    display: flex;
    flex-wrap: nowrap;

    margin-right: 40px;

    font-size: 0.5rem;
    span {
      margin: 0 5px;
    }
  }

  span {
    color: orange;
  }
`;
