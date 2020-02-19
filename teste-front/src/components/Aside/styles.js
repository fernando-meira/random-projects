import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ isHorizontal }) =>
    isHorizontal
      ? css`
          display: flex;
          align-items: center;
          flex-direction: row-reverse;

          div {
            display: flex;
            align-items: center !important;

            border-left: 1px solid #ddd;

            p {
              padding: 5px;

              color: #566379;
              font-weight: 800;
              font-size: 0.8rem;
              text-align: center;
            }

            a {
              img {
                width: 30px;
              }
            }
          }

          a {
            img {
              width: 18px;
              margin: 10px;

              &.img-facebook {
                width: 13px;
              }
            }
          }
        `
      : css`
          position: fixed;
          top: 320px;

          display: flex;
          align-items: center;
          flex-direction: column;

          div {
            display: flex;
            align-items: center;
            flex-direction: column;

            p {
              padding: 5px;
              border-bottom: 1px solid #ddd;

              color: #566379;
              font-weight: 800;
              font-size: 0.8rem;
              text-align: center;
            }

            a {
              img {
                width: 30px;
              }
            }
          }

          a {
            img {
              width: 18px;
              margin: 10px;

              &.img-facebook {
                width: 13px;
              }
            }
          }
        `};
`;
