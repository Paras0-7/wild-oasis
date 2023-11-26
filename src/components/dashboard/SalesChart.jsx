/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import { Heading } from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { useSearchParams } from "react-router-dom";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

export function SalesChart({ bookings }) {
  const [searchParams] = useSearchParams();
  const numDays = +searchParams.get("last") || 7;
  const { darkMode } = useDarkMode();

  const allDates = eachDayOfInterval({ start: subDays(new Date(), numDays - 1), end: new Date() });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings.filter((booking) => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => curr.totalPrice + acc, 0),
      extrasSales: bookings.filter((booking) => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => curr.extrasPrice + acc, 0),
    };
  });
  const colors = darkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };
  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash; {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" />
          <YAxis unit="$" />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area dataKey="totalSales" type="monotone" stroke={colors.totalSales.stoke} fill={colors.totalSales.fill} name="Total Sales" unit="$" />
          <Area dataKey="extrasSales" type="monotone" stroke={colors.extrasSales.stoke} fill={colors.extrasSales.fill} name="Extras Sales" unit="$" />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}
