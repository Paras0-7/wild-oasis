import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/apiAuth";
import toast from "react-hot-toast";

export const useSignUp = function () {
  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success(`New Account for ${data.user.user_metadata.name} created successfully`);
    },

    onError: (err) => toast.error(err.message),
  });

  return { isLoading, signUp };
};
