import styled from "styled-components";
import { useRecentBookings } from "../../hooks/useRecentBookings";
import { Spinner } from "../../ui/spinner/Spinner";
import { useRecentStays } from "../../hooks/useRecentStays";
import { Stats } from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export function DashboadLayout() {
  const { isLoading, recentBookings } = useRecentBookings();

  const { confirmedStays } = useRecentStays();
  if (isLoading) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats bookings={recentBookings} confirmedStays={confirmedStays} />
      <div>Today&apos;s Activity</div>
      <div>Chart Stay Durations</div>
      <div>Chart Sales</div>
    </StyledDashboardLayout>
  );
}
