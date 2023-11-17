/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckIn = function () {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isCheckingIn, mutate: checkInCustomer } = useMutation({
    mutationFn: ({ bookingId, data }) => updateBooking(bookingId, data),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in 🥳`);
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCheckingIn, checkInCustomer };
};
