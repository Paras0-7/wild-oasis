import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../services/apiBookings";
import { useParams } from "react-router-dom";

/* eslint-disable no-unused-vars */
export const useBooking = function () {
  const { bookingId } = useParams();
  const { isLoading, data: booking } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking", bookingId],
  });

  return { isLoading, booking };
};
