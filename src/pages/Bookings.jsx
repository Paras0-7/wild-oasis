import { BookingTable } from "../components/bookings/BookingTable";
import { BookingTableOperations } from "../components/bookings/BookingTableOperations";
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

export const Bookings = function () {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
};

export default Bookings;
