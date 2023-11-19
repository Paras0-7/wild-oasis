import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = function () {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate: loginUser } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data.user);
      toast.success("Login Successfull");
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, loginUser };
};
