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
import { useSetting } from "../../hooks/useSetting";

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
  const { isLoading: loading, settingData } = useSetting();
  const [paid, setPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { isCheckingIn, checkInCustomer } = useCheckIn();
  const { id: bookingId, guests, totalPrice, numGuests, hasBreakfast, numNights, isPaid } = booking || {};
  useEffect(() => {
    setPaid(() => booking?.isPaid || false);
  }, [booking]);
  // const navigate = useNavigate();

  const getBreakFastPrice = function () {
    return numGuests * settingData.breakfastPrice * (numNights + 1);
  };

  const optionalBreakFastPrice = addBreakfast ? getBreakFastPrice() : 0;
  function handleCheckin() {
    if (addBreakfast) {
      checkInCustomer({ bookingId, data: { status: "checked-in", isPaid: true, hasBreakfast: true, extrasPrice: optionalBreakFastPrice, totalPrice: totalPrice + optionalBreakFastPrice } });
    } else {
      checkInCustomer({ bookingId, data: { status: "checked-in", isPaid: true } });
    }
  }

  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setPaid(false);
            }}
          >
            Do you want to add breakfast for {formatCurrency(getBreakFastPrice())}?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox checked={paid} onChange={() => setPaid(true)} disabled={paid}>
          I confirm that {guests.fullName} has paid the amount of {formatCurrency(totalPrice + optionalBreakFastPrice)}
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
