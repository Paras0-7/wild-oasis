/* eslint-disable no-unused-vars */
import BookingRow from "./BookingRow";
import { Menus } from "../../ui/Menus";
import { Table, TableHeader } from "../cabins/CabinTable";
import styled from "styled-components";
import { Empty } from "../../ui/Empty";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { Spinner } from "../../ui/spinner/Spinner";
import { useSearchParams } from "react-router-dom";

export function BookingTable() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");

  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookings({ filter }),
    queryKey: ["bookings", filter],
  });

  if (isLoading) return <Spinner />;

  if (!bookings) return <Empty resource={"Bookings"} />;
  return (
    <Menus>
      <Table>
        <TableHeader>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </TableHeader>
        {bookings.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))}
      </Table>
    </Menus>
  );
}
