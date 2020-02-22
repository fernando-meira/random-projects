import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.section`
  padding: 3.75rem;
  background: #9997;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${media.lessThan('large')`
    padding: 3.75rem 3rem;
  `}

  ${media.lessThan('medium')`
    padding: 2.5rem 2rem;
  `}
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

  a {
    padding: 1rem;
    margin: 1.25rem;
    border: 0.25rem solid #222;

    display: flex;
    justify-content: center;

    color: #222;
    font-size: 3rem;
    font-weight: 600;
    text-decoration: none;
  }

  ${media.lessThan('large')`
    height: auto;
    margin: 0;
    padding: 0;
  `}

  ${media.lessThan('medium')`
    max-width: 13rem;

    h2 {
      margin: 1rem;

      font-size: 2.5rem;
    }

    a {
      font-size: 2rem;
  }
  `}
`;

export const PlanValue = styled.span`
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
`;

export const PlanList = styled.ul`
  margin: 1.25rem;

  li {
    padding: 0.5rem;

    list-style: none;
    font-style: italic;
    font-size: 1.25rem;

    color: #7c7c7c;
  }

  ${media.lessThan('medium')`
    margin: 1rem;
  `}
`;
