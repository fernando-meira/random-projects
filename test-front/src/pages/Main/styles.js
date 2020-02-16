import styled from 'styled-components';

export const Container = styled.main`
  position: relative;

  padding: 20px 10px;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 0 20px black;

  background: #fff;
`;

export const ImgList = styled.div`
  margin: auto;
  max-width: 600px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  img {
    width: 80px;
    height: 110px;
    margin: 10px 20px;
    border-radius: 4px;

    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  p {
    color: orange;
    font-size: 0.5rem;
  }
`;
