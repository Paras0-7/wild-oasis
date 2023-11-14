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
import { Pagination } from "../../ui/Pagination";

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;
export function BookingTable() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");

  const filter = !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  const sort = searchParams.get("sortBy") || "startDate-desc";

  const [field, order] = sort.split("-");
  const sortBy = { field, order };
  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookings({ filter, sortBy }),
    queryKey: ["bookings", filter, sortBy],
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

        <Footer>
          <Pagination count={5} />
        </Footer>
      </Table>
    </Menus>
  );
}
