import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #4a90e2;

  img {
    margin-left: 2.65rem;
  }

  nav {
    margin-right: 2.65rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      margin-right: 1rem;

      color: #fff;
      font-weight: 600;
      text-decoration: none;
    }

    svg {
      font-size: 2rem;
      color: #fff;
    }
  }
`;
