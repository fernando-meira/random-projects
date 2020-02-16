import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 3rem;
  font-weight: 600;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 3rem;
  }

  img {
    width: 7.5rem;

    border-radius: 50%;
    margin-top: 1.2rem;
  }

  h1 {
    margin-top: 0.6rem;

    font-size: 1.5rem;
    text-transform: capitalize;
  }

  p {
    margin-top: 5px;
    font-size: 1rem;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 25rem;
  }
`;

export const IssuesList = styled.ul`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;

  list-style: none;

  li {
    padding: 1rem 0.5rem;
    border: 1px solid #eee;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;

    & + li {
      margin-top: 1rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px solid #eee;
  }

  div {
    flex: 1;

    strong {
      font-size: 1rem;
      a {
        color: #333;
        text-decoration: none;
      }

      & a:hover {
        color: #7159c1;
      }
    }

    p {
      margin-top: 0.4rem;

      color: #999;
      font-size: 1rem;
    }
  }
`;

export const Span = styled.span`
  height: 1.4rem;
  padding: 3px 4px;
  margin-left: 1rem;
  border-radius: 2px;

  color: #fff;
  background: ${({ color }) => color};
  font-weight: 600;
  font-size: 0.8rem;
`;
