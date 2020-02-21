import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 60rem;
  margin: 0 auto;
  padding: 3.75rem 0;

  h2 {
    font-size: 3rem;
    margin: 0 0 1rem 1rem;
  }

  div {
    max-width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;

    div {
      margin: 0.5rem;
      max-width: 18rem;
      border-top: 0.5rem solid pink;

      display: flex;

      background: #f7f7f7;

      p {
        padding: 3.75rem 1.25rem;

        color: #a4a4a4;
        font-size: 3rem;
        font-weight: 600;
      }

      img {
        max-width: 18rem;
      }
    }
  }
  ${media.lessThan('medium')`
    width: 90%;
    height: auto;

    div {
      div {
        margin: 0;
        max-width: 14rem;

        p {
          padding: 1rem 0.5rem;
        }

        img {
          max-width: 14rem;
        }
      }
    }
  `}

  ${media.lessThan('small')`

    padding: 2rem 0;

  h2 {
    font-size: 2rem;
  }

  div {
      div {
        margin: 0;
        max-width: 6.5rem;

        justify-content: space-between;

        p {
          padding: 1rem 0.5rem;

          font-size: 2rem;
        }

        img {
          max-width: 6.5rem;
        }
      }
    }
  `}
`;
