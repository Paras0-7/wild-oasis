/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  z-index: 1200;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.div`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();
export const Menus = function ({ children }) {
  const [cabinId, setCabinId] = useState("");
  const [positions, setPositions] = useState({});
  const close = () => setCabinId("");
  const open = setCabinId;
  return <MenusContext.Provider value={{ cabinId, close, open, positions, setPositions }}>{children}</MenusContext.Provider>;
};

function Toggle({ id }) {
  const { open, close, cabinId, setPositions } = useContext(MenusContext);
  const handleClick = function (e) {
    const positions = e.target.closest("button").getBoundingClientRect();
    setPositions({
      x: window.innerWidth - positions.width - positions.x,
      y: positions.height + positions.y + 8,
    });
    if (cabinId === "" || cabinId !== id) {
      return open(id);
    }

    close();
  };
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { cabinId, positions } = useContext(MenusContext);

  if (id !== cabinId) return;

  return <StyledList position={positions}>{children}</StyledList>;
}

function Button({ children }) {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
