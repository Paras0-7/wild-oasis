import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

export const Logo = function () {
  const { darkMode } = useDarkMode();

  const src = darkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <StyledLogo>
      <Link to="/dashboard">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
};
