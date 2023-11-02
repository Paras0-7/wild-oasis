import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: aliceblue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`;

export const Sidebar = function () {
  return <StyledSideBar>Sidebar</StyledSideBar>;
};
