import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${(prop) => prop.as === "h1" && css``}
`;
