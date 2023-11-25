/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
/* eslint-disable react/prop-types */
export function Stats({ bookings, confirmedStays }) {
  const [searchParams] = useSearchParams();
  const numDays = +searchParams.get("last") || 7;
  const numBookings = bookings?.length;
  const sales = bookings?.reduce((acc, booking) => acc + booking?.totalPrice, 0);

  const checkIns = confirmedStays?.length;

  const occupancy = confirmedStays?.reduce((acc, stay) => acc + stay?.numNights, 0) / (numDays * 8);
  return (
    <>
      <Stat title="bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkIns} />
      <Stat title="Occupancy Rate" color="yellow" icon={<HiOutlineChartBar />} value={Math.round(occupancy * 100) + "%"} />
    </>
  );
}
