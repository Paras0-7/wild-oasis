import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

export const Logo = function () {
  return (
    <StyledLogo>
      <Link to="/dashboard">
        <Img src="/logo-light.png" alt="Logo" />
      </Link>
    </StyledLogo>
  );
};
