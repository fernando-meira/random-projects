import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: 100vh;
  max-width: 100%;

  display: flex;
  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;
