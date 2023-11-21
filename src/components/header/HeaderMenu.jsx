import styled from "styled-components";
import { LogOut } from "../authentication/LogOut";
import ButtonIcon from "../../ui/Button/ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { DarkModeToggle } from "../../ui/DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

export const HeaderMenu = function () {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <LogOut />
      </li>
    </StyledHeaderMenu>
  );
};
