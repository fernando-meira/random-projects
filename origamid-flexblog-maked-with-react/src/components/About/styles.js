import styled from 'styled-components';

import media from 'styled-media-query';

export const H1 = styled.h1`
  width: 60rem;
  margin: 0 auto;
  padding: 60px 10px;

  line-height: 1;
  font-size: 3rem;

  ${media.lessThan('medium')`
    width: 90%;

    padding: 3rem 0 3rem 3rem;
  `}

  ${media.lessThan('small')`
    width: 90%;
    padding: 2rem;

    font-size: 1.5rem;
  `}
`;

export const Container = styled.section`
  width: 60rem;
  margin: 0 auto;
  padding: 3.75rem 0;
  border-top: 2px solid #2c70ff;
  border-bottom: 2px solid #2c70ff;

  display: flex;

  ${media.lessThan('medium')`
    width: 90%;
    border-top: 1px solid #2c70ff;
    border-bottom: 1px solid #2c70ff;
  `}

  ${media.lessThan('small')`
    padding: 2rem 0;

    flex-direction: column;
  `}
`;

export const TextAbout = styled.div`
  h2 {
    font-size: 3rem;
    margin: 0 0 1rem 1rem;
  }

  p {
    margin: 0 0 1rem 1rem;

    color: #7c7c7c;
    line-height: 1.4;
    font-size: 1.25rem;
    font-weight: 400;
  }

  ${media.lessThan('medium')`
    h2 {
      flex: 1;
    }

    p {
      min-width: 18rem;
      font-size: 1.5rem;
    }
  `}

  ${media.lessThan('small')`
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  `}
`;

export const ImgAbout = styled.div`
  max-width: 100%;

  display: flex;
  align-items: flex-start;

  img {
    margin: 1rem;
  }

  ${media.lessThan('medium')`
    img {
      max-width: 11.5rem;
      min-width: 8rem;
      height: auto;

      margin: 0.5rem;
    }
  `}
`;
