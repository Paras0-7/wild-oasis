import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useUpdateUser = function () {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("Account Details Update Successfully !!!");
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, updateUser };
};
