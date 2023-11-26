/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCheckOut } from "../../hooks/useCheckOut";
import { Button } from "../../ui/Button/Button";

function CheckoutButton({ bookingId }) {
  const checkout = useCheckOut();
  return (
    <Button variation="primary" size="small" onClick={() => checkout(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
