import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: todayActivity } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["todaysActivity"],
  });

  return { isLoading, todayActivity };
}
