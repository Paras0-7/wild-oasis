import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { Heading } from "../../ui/Heading";
import { Row } from "../../ui/Row";
import Tag from "../../ui/Tag";
import { Button } from "../../ui/Button/Button";
import { ButtonGroup } from "../../ui/Button/ButtonGroup";
import { ButtonText } from "../../ui/Button/ButtonText";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../hooks/useBooking";
import { Spinner } from "../../ui/spinner/Spinner";
import { useCheckOut } from "../../hooks/useCheckOut";
import { useDeleteBooking } from "../../hooks/useDeleteBooking";
import { Modal } from "../../ui/Modal";
import { ConfirmDelete } from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export function BookingDetail() {
  const { isLoading, booking } = useBooking();
  const { status = "", id: bookingId } = booking || {};
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const checkOut = useCheckOut();
  const { isDeleting, deleteBookingFn } = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  isLoading && <Spinner />;

  const deleteBooking = function () {
    deleteBookingFn(bookingId);
    navigate(-1);
  };
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {booking && <BookingDataBox booking={booking} />}

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="delete-booking">
            <Button variation="danger">Delete Booking</Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete resourceName="booking" onConfirm={deleteBooking} disabled={isDeleting} />
          </Modal.Window>
        </Modal>
        {status === "unconfirmed" && <Button onClick={() => navigate(`checkin`)}>CheckIn</Button>}
        {status === "checked-in" && <Button onClick={() => checkOut(bookingId)}>CheckOut</Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
