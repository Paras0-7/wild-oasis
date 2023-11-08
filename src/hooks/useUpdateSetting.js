import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSetting = function () {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: editSettings } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings Updated 🥳");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, editSettings };
};
