import styled from 'styled-components';

export const Container = styled.blockquote`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  max-width: 700px;

  color: #999;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  line-height: 1.4rem;

  span {
    height: 20px;
    padding: 40px;

    color: orange;
    font-size: 5rem;
    font-family: 'Arizonia', cursive;
  }
`;
