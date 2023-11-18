import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${(prop) => prop.as === "h1" && css``}
  ${(prop) =>
    prop.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
`;
