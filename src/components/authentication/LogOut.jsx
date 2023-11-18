import { useLogout } from "../../hooks/useLogout";
import ButtonIcon from "../../ui/Button/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
export const LogOut = function () {
  const { logout } = useLogout();
  return (
    <ButtonIcon onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
};
