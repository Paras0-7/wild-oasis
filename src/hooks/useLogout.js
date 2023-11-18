import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export const useLogout = function () {
  const queryClient = useQueryClient();
  const naviate = useNavigate();
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      naviate("/login");
    },
  });

  return { isLoading, logout };
};
