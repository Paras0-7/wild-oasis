import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = searchParams.get("last") || 7;
  const queryDate = subDays(new Date(), +numDays).toISOString();
  const { isLoading, data: recentStays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["Stays", `last-${numDays}`],
  });

  const confirmedStays = recentStays?.filter((stay) => stay.status === "checked-in" || stay.status === "checked-out");
  return { isLoading, confirmedStays };
}
