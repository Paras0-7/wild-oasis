import { BookingTable } from "../components/bookings/BookingTable";
import { Heading } from "../ui/Heading";
import { Row } from "../ui/Row";

export const Bookings = function () {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
      </Row>
      <BookingTable />
    </>
  );
};

export default Bookings;
