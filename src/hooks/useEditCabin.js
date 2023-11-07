import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

export const useEditCabin = function (reset) {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: updateCabin } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Cabin edited succesfully 🥳");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateCabin };
};
