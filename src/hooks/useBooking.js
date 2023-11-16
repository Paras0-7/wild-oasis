import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../services/apiBookings";

/* eslint-disable no-unused-vars */
export const useBooking = function (bookingId) {
  const { isLoading, data: booking } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking"],
  });

  return { isLoading, booking };
};
