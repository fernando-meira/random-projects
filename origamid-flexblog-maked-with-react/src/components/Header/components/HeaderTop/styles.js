import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 2.6rem;

  display: flex;
  align-items: center;

  background: #122ab2;

  ${media.lessThan('small')`
    height: auto;
  `}

  div {
    width: 60rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;

    p {
      margin: 1rem;
    }
  }

  ${media.lessThan('small')`
    width: 100%;

    P {
      margin: 0.1rem !important;

      font-size: 0.6rem;

    }
  `}
`;
