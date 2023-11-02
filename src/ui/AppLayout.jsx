import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/nav/Sidebar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const StlyedAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
export const AppLayout = function () {
  return (
    <StlyedAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StlyedAppLayout>
  );
};
