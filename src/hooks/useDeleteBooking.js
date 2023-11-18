import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../services/apiBookings";
import toast from "react-hot-toast";

export const useDeleteBooking = function () {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBookingFn } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking deleted`);

      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => toast.error(err),
  });

  return { isDeleting, deleteBookingFn };
};
