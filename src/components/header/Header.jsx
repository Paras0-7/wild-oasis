import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: orangered;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export const Header = function () {
  return <StyledHeader>Header</StyledHeader>;
};
