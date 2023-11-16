/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import { Row } from "../../ui/Row";
import { Heading } from "../../ui/Heading";
import { ButtonText } from "../../ui/Button/ButtonText";
import { ButtonGroup } from "../../ui/Button/ButtonGroup";
import { Button } from "../../ui/Button/Button";
import BookingDataBox from "../bookings/BookingDataBox";
import { useBooking } from "../../hooks/useBooking";
import { Spinner } from "../../ui/spinner/Spinner";
import { useEffect, useState } from "react";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckIn } from "../../hooks/useCheckIn";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

export function CheckinBooking() {
  const moveBack = useMoveBack();
  const { isLoading, booking } = useBooking();
  const [paid, setPaid] = useState(false);
  const { isCheckingIn, checkInCustomer } = useCheckIn();
  const { id: bookingId, guests, totalPrice, numGuests, hasBreakfast, numNights, isPaid } = booking || {};
  useEffect(() => {
    setPaid(() => booking?.isPaid || false);
  }, [booking]);
  // const navigate = useNavigate();

  function handleCheckin() {
    checkInCustomer(bookingId);
    // navigate(-1);
  }

  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox checked={paid} onChange={() => setPaid(true)} disabled={paid}>
          {" "}
          I confirm that {guests.fullName} has paid the amount of {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!paid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
