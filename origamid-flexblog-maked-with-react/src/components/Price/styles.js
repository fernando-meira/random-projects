import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.75rem;
  background: #eee;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  flex: 1 1 16.25rem;
`;

export const Block = styled.div`
  padding: 1.25rem;
  margin: 1.25rem 10px;
  border: 0.25rem solid #fafafa;

  h2 {
    margin: 1.25rem;
    border-bottom: 0.25rem solid #fafafa;

    color: #a4a4a4;
    font-size: 3rem;
  }

  span {
    margin: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 0.25rem solid #fafafa;

    display: flex;
    flex-direction: row;

    font-size: 1.5rem;

    p {
      color: #222;
      font-size: 3rem;
      font-weight: 600;
    }
  }

  ul {
    margin: 1.25rem;

    li {
      padding: 0.5rem;

      list-style: none;
      font-style: italic;
      font-size: 1.25rem;

      color: #7c7c7c;
    }
  }

  a {
    padding: 1rem;
    margin: 1.25rem;
    border: 0.25rem solid #222;

    display: flex;

    color: #222;
    font-size: 3rem;
    font-weight: 600;
    text-decoration: none;
  }
`;
