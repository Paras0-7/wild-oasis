/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCabin } from "../services/apiCabins";

export const useCreateCabin = function (reset) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success("New cabin added 🥳");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, mutate };
};
