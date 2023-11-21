import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./Button/ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export const DarkModeToggle = function () {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return <ButtonIcon onClick={toggleDarkMode}>{darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}</ButtonIcon>;
};
