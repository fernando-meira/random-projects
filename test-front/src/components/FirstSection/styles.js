import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;

  color: #999;
  line-height: 2;
  font-size: 0.8rem;
  p {
    padding: 20px 0;
  }

  blockquote {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: none;
    max-width: 700px;

    font-size: 1.5em;
    font-weight: 100;
    line-height: 1.4;
    font-style: italic;
    text-align: justify;
    font-family: 'Catamaran', sans-serif;

    span {
      align-items: flex-start;

      height: 60px;
      padding: 10px;

      color: orange;
      font-size: 3rem;
    }
  }
`;
