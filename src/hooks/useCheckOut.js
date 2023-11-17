import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";

export const useCheckOut = function () {
  const queryClient = useQueryClient();
  const { mutate: checkOutCustomer } = useMutation({
    mutationFn: (bookingId) => updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success("Customer has been checked-out");
      queryClient.invalidateQueries({
        queryKey: ["booking", `${data.id}`],
      });
    },
    onError: () => toast.error("Could not check out"),
  });

  return checkOutCustomer;
};
