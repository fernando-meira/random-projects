import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 2.6rem;

  display: flex;
  align-items: center;

  background: #122ab2;

  div {
    margin: 0 auto;
    width: 60rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;

    p {
      &:first-child {
        margin-left: 1rem;
      }
    }
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;
